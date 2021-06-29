import './App.css';
import {DISHES} from './shared/dishes';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


import Main from'./components/MainComponent.js'

const store = ConfigureStore();
class App extends Component {
  // If you want use States and Props, you must create them in constructor,
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>

      
    );
  } 
}


export default App;
/*
  ? <div className="App">: class how to use AND  where is it from??
  states:nam o dau z.



   


   render() {
    
    return(
      <div className='App'>
          <Navbar dark color="primary">
           <div className="container">
           <NavbarBrand className="" href="#"><h2>Ristorante Con Fusion</h2></NavbarBrand>
           </div>
         </Navbar>

        {list.map(function(item){
          return(
            <div key={item.objectID} className='container'>
              <div className='row'>
                <div className='col-6 col-md-5'>
                <a href={item.ur}>{item.title}</a>
              
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } 

*/