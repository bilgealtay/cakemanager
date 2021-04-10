import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Table from './components/table';
import CreateNew from './components/createNew';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Table} />
          <Route path="/createNew" component={CreateNew} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
