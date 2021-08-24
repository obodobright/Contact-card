import React from 'react';
import './App.css';
//import Ebus from './bright-github/ebus.JPG'
// import Navbar from './bright-github/navbar'
// import Nav from './bright-github/excercise/navs'
//  import Start from './bright-github/start'
// import Props from './bright-github/props'
// import PropsExcercise from './bright-github/propsExercise';
// import List from  './bright-github/list'
// import State from './bright-github/excercise/state'
// import Friends from './bright-github/friendsApp/friends';
import Twitter from './bright-github/twitter/twitter'
//  var USER_DATA = {
//    name: 'Obodo Bright',
//    username:'Obodobright0',
//    image: Ebus
//  }
function App() {
  return (
    <React.Fragment className="App">
      <Twitter />
      {/* <Nav /> */}
     {/* <Start /> */}
     {/* <State /> */}
     {/* <Friends /> */}
     {/* <Props 
     username="obodobright"
     name =  "Obodo Bright"
     image = {Ebus}
     /> */}
     {/* <PropsExcercise 
     user = {USER_DATA}
     /> */}
     {/* <List friends={[
       {id:1, name:'Dipo'},
       {id:2, name:'Faruk'},
       {id:3, name:'Tao'},
       {id:4, name:'Segun'},
       {id:5, name:'Shola'}
     ]}
     data = {
       [
         {id:1,username:'Bright',passsword:'obodo'},
         {id:1,username:'Duke',passsword:'ebuka'},
         {id:1,username:'Blessing',passsword:'smith'}
       ]
     }
     /> */}
     {/* <Navbar nav= {
       [
         {id:1, navigation:'Home'},
         {id:2, navigation:'Contact'},
         {id:3, navigation:'About Us'},
         {id:4, navigation:'Services'},
       ]
     } 

     /> */}
    </React.Fragment>
  );
}

export default App;
