import React from "react";
import "./App.css";

// import Post from "./bright-github/post/post";

// import CountryContainer from './bright-github/Country/countryContainer';

// import UserList from './bright-github/APII/User';
// import Invoice from './bright-github/invoiceApp/invoice';
//import All from './bright-github/github-battle/all'
// import Tour from './bright-github/tours/Tour';
//  import FeedbackContainer from './bright-github/feedbackApp/feedbackContainer';
//import Todo from './bright-github/todoApp/todo'
//import Ebus from './bright-github/ebus.JPG'
// import Navbar from './bright-github/navbar'
// import List from  './bright-github/list'
//import Friends from './bright-github/friendsApp/friends';
//import Twitter from './bright-github/twitter/twitter'
import UserList from "./bright-github/APII/User";
function App() {
  return (
    <React.Fragment className="App">
      <UserList />
      {/* <Post /> */}
      {/* <CountryContainer /> */}
      {/* <UserList /> */}
      {/* <Tour /> */}
      {/* <Invoice /> */}
      {/* <All /> */}
      {/* <FeedbackContainer />  */}
      {/* <Todo />  */}
      {/* <Twitter /> */}
      {/* {  <Friends />  }  */}
    </React.Fragment>
  );
}

export default App;
