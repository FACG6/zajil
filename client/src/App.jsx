import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import { viewPopup, editPopup, deletePopup } from './Components/CommonComponent/table/Popups';
import TableComponent from './Components/CommonComponent/table/Table';
import SideBar from './Components/CommonComponent/Sidebar';
import './App.css';


class App extends Component {
  state = {
    
  }
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Route path="/" component={SideBar} />
    </BrowserRouter>
      {/* <TableComponent
        pageName="customers"
        columns={[{
          key: 54, customer: 'fgd', captain: 'fgdf', date: 'dfsdf',
        }, {
          key: 56, customer: 'fgd', captain: 'fgdf', date: 'dfsdf',
        }]}
        viewPopup={viewPopup}
        editPopup={editPopup}
        deletePopup={deletePopup}
      /> */}
    </div>
    );
  }
}

export default App;
