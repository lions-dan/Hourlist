import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from '@material-ui/core/TextField';
import PreviewList from './PreviewList'


function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    overflowY: 'hidden'
  };
}


const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "60%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
export default function PlaylistSelector(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [list,updateList] = React.useState([]);
  const [input, setInput] = React.useState(''); // '' is the initial state value
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var generateTheme = (theme)=>{
    console.log(props)
    updateList(props.importedSong.sort(function(a,b){return a.feature[theme]-b.feature[theme]}))
  }


  var createPlaylist = async function(named, list, token, user_id){
    const apiURL = "https://api.spotify.com/v1/users/"+user_id+"/playlists"
    const data = {"name":named}
    const response = await fetch(apiURL, {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Authorization': 'Bearer ' + token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
     const libraryObject = await response.json().then((playlist)=>{
       addSongs(list,playlist,user_id,token)
     })
  }

  var addSongs = async function(list,playlist,user_id,token){
    const apiURL = "https://api.spotify.com/v1/users/"+user_id+"/playlists/"+playlist.id+"/tracks"
    let result = list.map(a => a.uri);
    const response = await fetch(apiURL, {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Authorization': 'Bearer ' + token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(result)
      });
      const libraryObject = await response.json().then((value)=>{
          console.log(value)
      })

  }

  return (
    <div>
      <Button disabled={props.featuresGenerated} variant="contained" size="large" onClick={handleOpen}>
        Choose Playlist Theme
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            spacing={3}
          >
          <Grid item xs={12}>
          <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Playlist Name"
          margin="normal"
          style={{width:'100%'}}
          variant="outlined"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
       </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                justify="center"
                className={classes.button}
                onClick={()=>generateTheme("danceability")}
              >
              The Dance Build Up
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={()=>generateTheme("energy")}
              >
               The Energy Build Up
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                onClick={()=>generateTheme("tempo")}
              >
                The Tempo Build Up
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={()=>generateTheme("loudness")}
              >
                The Build Up
              </Button>
            </Grid>
             <Grid item xs={12}>
              <PreviewList sortedList={list} sectionId={"List Preview"}></PreviewList>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={()=>createPlaylist(input,list,props.token,props.user_id)}
              >
                Create Playlist
              </Button>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </div>
  );
}
