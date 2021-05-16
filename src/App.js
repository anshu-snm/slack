import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import styled from "styled-components";
import Chat from "./Chat";
import {useAuthState} from "react-firebase-hooks/auth";
import Login from "./Login"
import {auth} from "./firebase"
import Spinner from "react-spinkit";

function App() {
  const [user,loading] = useAuthState(auth);
  if (loading){
    return(
      <AppLoading>
        <AppLoadingContents>
          <img src = "https://th.bing.com/th/id/OIP.MNQIGkQzDy9T2nWTkc1xTQHaHa?w=174&h=180&c=7&o=5&pid=1.7"
          alt = ""/>
          <Spinner
          name= "ball-spin-fade-loader"
          color = "purple"
          fadeIn = "none"/>

        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className="App">
      <Router>
        {!user ?(
          <Login/>
        ):(
          <>
          <Header/>
      <AppBody>
        <SideBar/>
        <Switch>
          
          <Route path="/" exact>

            <Chat />
          </Route>
        </Switch>
      
        </AppBody>
      </>
        )}
      
      
    </Router>
    </div>
  );
}

export default App;
const AppBody = styled.div`
  display:flex;
  height:100vh;
  `;
const AppLoadingContents = styled.div`
text-align:center;
padding-bottom:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
>img{
  height:100px;
  padding:20px;
  margin-bottom :40px;

}
`
const AppLoading = styled.div`
display:grid;
place-items:center;
height:100vh;
width:100%;
`