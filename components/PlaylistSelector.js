import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    overflowY: "hidden"
  };
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    position: "absolute",
    width: "60%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  typography: {
    padding: theme.spacing(2)
  },
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    color: "black",
    height: "200px",
    maxHeight: 200
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
}));
export default function PlaylistSelector(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [arrayOfSongs, updateList] = React.useState(props.importedSong);
  const [input, setInput] = React.useState(""); // '' is the initial state value
  const [created, setCreated] = React.useState(false);
  const [feedback, setFeedback] = React.useState("")
  React.useEffect(() => {
    updateList(prevArray => [...prevArray]);
  }, [1]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalClose = () => {
    setCreated(false)
  }
  const generateTheme = theme => {
    const sortedArray = props.importedSong.sort(function(a, b) {
      return a.feature[theme] - b.feature[theme];
    });
    console.log(sortedArray);
    updateList([...sortedArray]);
  };

  var createPlaylist = async function(named, list, token, user_id) {
    const apiURL = "https://api.spotify.com/v1/users/" + user_id + "/playlists";
    const data = { name: named };
    const response = await fetch(apiURL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const libraryObject = await response.json().then(
      playlist => {
        addSongs(list, playlist, user_id, token);
        setCreated(true);
        setFeedback("Created Playlist Successfully")
      },
      error => {
        console.log(error);
        setCreated(false);
        setFeedback("Playlist Failed to Generate")
      }
    );
  };

  var addSongs = async function(list, playlist, user_id, token) {
    const apiURL =
      "https://api.spotify.com/v1/users/" +
      user_id +
      "/playlists/" +
      playlist.id +
      "/tracks";
    let result = list.map(a => a.uri);
    const response = await fetch(apiURL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(result)
    });
    const libraryObject = await response.json().then(value => {});
  };

  return (
    <div>
      <Button
        disabled={props.featuresGenerated}
        variant="contained"
        size="large"
        onClick={handleOpen}
      >
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
                style={{ width: "100%" }}
                variant="outlined"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                justify="center"
                className={classes.button}
                onClick={() => {
                  generateTheme("danceability");
                }}
              >
                The Dance Build Up
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => {
                  generateTheme("energy");
                }}
              >
                The Energy Build Up
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                onClick={() => {
                  generateTheme("tempo");
                }}
              >
                The Tempo Build Up
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                  generateTheme("loudness");
                }}
              >
                The Build Up
              </Button>
            </Grid>
            <Grid item xs={12}>
              <List className={classes.root} subheader={<li />}>
                <li key={`Section Updated`} className={classes.listSection}>
                  <ul className={classes.ul}>
                    <ListSubheader>{`Build Up Generated Playlist`}</ListSubheader>
                    {arrayOfSongs.map((item, index) => (
                      <ListItem
                        style={{ color: "black" }}
                        key={item.id + index}
                      >
                        <ListItemText
                          primary={`${item.name} by ${item.artists[0].name}`}
                        />
                      </ListItem>
                    ))}
                  </ul>
                </li>
              </List>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                  createPlaylist(
                    input,
                    arrayOfSongs,
                    props.token,
                    props.user_id
                  );
                }}
              >
                Create Playlist
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={created}
                onClose={modalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500
                }}
              >
                <Fade in={created}>
                  <div className={classes.paper}>
                    <h2 id="transition-modal-title">Transition modal</h2>
                    <p id="transition-modal-description">
                      {feedback}
                    </p>
                  </div>
                </Fade>
              </Modal>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </div>
  );
}
