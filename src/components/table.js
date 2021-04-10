import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { API_URL } from "../utils/constants"
import { DownloadPage } from './downloadPage.js';


class Table extends Component {

   componentDidMount = () => {
      axios.get(`${API_URL}/`)
         .then(res => {
            const cakes = res.data;
            this.setState({ cakes });
         })
   };

   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         cakes: [],
      }
   }

   renderTableData() {
      return this.state.cakes.map((cake, index) => {
         const { id, title, description, image } = cake //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{title}</td>
               <td>{description}</td>
               <td>{image}</td>
            </tr>
         )
      })
   }

   render() {

      console.log('apiden gelen cakes', this.state.cakes);
      return (
         <div className='cakes cakeList'>
            <h1>Cake List</h1>

            <table>
               <tr className='head'>
                  <td>ID</td>
                  <td>TITLE</td>
                  <td>DESCRIPTION</td>
                  <td>IMAGE</td>
               </tr>
               {this.renderTableData()}
            </table>

            <div><DownloadPage /></div>

            <Link to="createNew">
               <button className='btn-primary'>Create</button>
            </Link>



         </div>
      )
   }
}

export default Table //exporting a component make it reusable and this is the beauty of react