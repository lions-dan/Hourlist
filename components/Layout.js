import React from 'react';
import GlobalStyle from '../styles/GlobalStyles';
import Button from '../styles/button';
import fetch from 'isomorphic-unfetch';
import MainFrame from './MainFrame'


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {authenticated:false};
  }
  

  componentDidMount(){
    var accessToken = document.location.hash;
    if(accessToken !== ""){
      accessToken = accessToken.split('&')
      .filter(function(el) { if(el.match('access_token') !== null) return true; })[0].split('=')[1];
       this.setState({authenticated:true,accessToken:accessToken})
    }
  }
  render(){

  function authenticateSpotify(){
    const clientID = "05254a545218406db543397b27a55c17";
    const endPoint = "authorize";
    const responseType = "token";
    const scope = "playlist-modify-public%20playlist-modify-private%20user-top-read%20user-library-read%20playlist-read-private";
    const redirectURI = "http://localhost:3000";
    var accessToken;
    console.log("Authenticating")
    const url = "https://accounts.spotify.com/authorize?client_id="+clientID+"&redirect_uri="+redirectURI+"&scope="+scope+"&response_type=token"
    window.location.replace(url);
  }
  
  if(!this.state.authenticated){
    return(
        <div id="root">
        <GlobalStyle />
        <Button onClick={authenticateSpotify}> Authenticate Spotify </Button>
        </div>
      )
    }else{
       return (
          <div id="root">
          <GlobalStyle />
            <MainFrame token={this.state.accessToken}/> 
          </div>   
        )
     }

   

  }
  

};



export default Layout;