import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

function CreateNew() {

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');

  const saveCake = async () => {
    await axios.post(`http://localhost:8282/cakes`, { title, description, image })
  }

  return (


    <div className='cakes'>
      <h1>Create New Cake</h1>
      <div className='formWrap'>
        <div className='formGroup'>
          <label>Title</label>
          <input className='formControl' type='text' name='title' value={title} onChange={e => setTitle(e.target.value)} />

        </div>
        <div className='formGroup'>
          <label>Description</label>
          <input className='formControl' type='text' name='description' value={description} onChange={e => setDescription(e.target.value)} />

        </div>
        <div className='formGroup'>
          <label>Image</label>
          <input className='formControl' type='text' name='image' value={image} onChange={e => setImage(e.target.value)} />

        </div>
        <button className='btn-success' onClick={() => saveCake()}>Save</button>
      </div>

      <Link to="/">
        <button className='btn-primary'>List page</button>
      </Link>

    </div>


  );
}

export default CreateNew;
