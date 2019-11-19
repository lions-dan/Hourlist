import React from 'react'
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tracks from './Tracks'
import Playlist from './Playlist'
import PlaylistSelector from './PlaylistSelector'
const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));


async function getSpotifyProfile(token){
    const apiUrlOne = 'https://api.spotify.com/v1/me'
    const response = await fetch(apiUrlOne, {
        method: 'GET',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      const profileObject = await response.json();
      return profileObject
}

async function addUserLibrary(token,limit){
    const apiURL = "https://api.spotify.com/v1/me/tracks?limit="+limit
    const response = await fetch(apiURL, {
        method: 'GET',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
     const libraryObject = await response.json();
     return libraryObject
}

async function addUserTopTracks(token, limit){
    const apiURL = "https://api.spotify.com/v1/me/top/tracks?limit="+limit
    const response = await fetch(apiURL, {
        method: 'GET',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
     const libraryObject = await response.json();
     return libraryObject
}


async function addLibraryFeatures(token, tracks){
  var arrayOfTracks = []
  tracks.forEach(element => {
    arrayOfTracks.push(element.id)
  });
  tracks = arrayOfTracks.toString()
  const apiURL = "https://api.spotify.com/v1/audio-features/?ids="+tracks
  const response = await fetch(apiURL, {
      method: 'GET',
      mode: 'cors', 
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
   const libraryObject = await response.json();

   return libraryObject
}


var generateReady = false;
var totalTime = 0;

class MainFrame extends React.Component {
    constructor(props){
     super(props)
        this.state = {importedLibrary:false, importedTop:false, imported:[], features:[], generateReady:false, totalTime:0, renderTable: true, pickPlaylist: false, open:false, setOpen: false, featuresGenerated:false,user_id:"null"}
      }
    componentDidMount(){
      getSpotifyProfile(this.props.token).then((value)=>{
        console.log(value)
        this.setState({user_id:value.id})
      })
    }

    handleOpen(){
      this.setState({open:true})
    }
    handleClose(){
      this.setState({open:false})
    }
    
    handleLibraryImport(){
      addUserLibrary(this.props.token,50).then((librarySongs)=>{
          const trackArray = librarySongs.items.map(function (obj) {
            return obj.track;
          });
          this.setState(prevState => ({
            imported: [...prevState.imported,...trackArray]
          }))
        })
        this.setState({importedLibrary: true})
      }

    handleTopImport(){
     addUserTopTracks(this.props.token,50).then((topTracks)=>{
        this.setState(prevState => ({
          imported: [...prevState.imported,...topTracks.items]
        }))
     })
     this.setState({importedTop: true})
    }

    checkTrackSize = (dataFromChild)=>{
      if(dataFromChild >= 60 && this.state.generateReady == false){
        this.setState({generateReady:true})
        totalTime = dataFromChild
      }
    }
    handleGenerate(){
      addLibraryFeatures(this.props.token, this.state.imported).then((features)=>{
        let importedSong = this.state.imported
        var count =  0;
        importedSong.forEach(element => {
          element.feature = features.audio_features[count];
          count = count + 1;
        });
        this.setState({imported:importedSong,renderTable:false, pickPlaylist: true, generateReady: false, featuresGenerated:true})
    })
  }




    render(){
        return( 
            <Container  maxWidth="lg" style={{padding: "5%"}}>
                <Paper style={{margin:"5%", padding:"5%", height: '100%', backgroundImage:'linear-gradient(60deg, #29323c 0%, #485563 100%)',  display: 'grid',}}> 
                <Grid container spacing={5}>
                <Grid item xs>
                  <Button  disabled={this.state.importedLibrary} variant="contained" size="large"   onClick={()=>(this.handleLibraryImport())}> Import Saved Tracks </Button>
                </Grid>
                  <Grid item xs>
                  <Button disabled={this.state.importedTop} variant="contained" size="large"  onClick={()=>(this.handleTopImport())} > Import Library Tracks </Button>
                 </Grid>
                 <Grid item xs>
                   <Button  disabled={!this.state.generateReady} variant="contained" size="large"  onClick={()=>(this.handleGenerate())} > Generate Features </Button>
                  </Grid>
                  <Grid item xs>
                    <PlaylistSelector token={this.props.token} user_id={this.state.user_id} featuresGenerated={!this.state.featuresGenerated} importedSong={this.state.imported}/> 
                  </Grid>
                 <Grid item xs={12}>
                  {(this.state.renderTable) ? <Tracks generateReady={this.checkTrackSize} tracksImported={this.state.importedLibrary || this.state.importedTop} allTracks={this.state.imported}/> : <Playlist allTracks={this.state.imported}/> }
                 </Grid>
                </Grid>
                </Paper>
            </Container>
        )
    }



}
 export  default MainFrame;