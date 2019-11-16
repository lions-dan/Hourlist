
import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from "material-table";
import { display } from '@material-ui/system';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


//album_type: "single"
/*
album: {album_type: "single", artists: Array(2), available_markets: Array(79), external_urls: {…}, href: "https://api.spotify.com/v1/albums/5HRACanD0eFXPlHubEHml6", …}
artists: (4) [{…}, {…}, {…}, {…}]
available_markets: (79) ["AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA"]
disc_number: 1
duration_ms: 248001
explicit: true
external_ids: {isrc: "USZ4V1800173"}
external_urls: {spotify: "https://open.spotify.com/track/6mBwzEADA0EfzISE52JqJW"}
href: "https://api.spotify.com/v1/tracks/6mBwzEADA0EfzISE52JqJW"
id: "6mBwzEADA0EfzISE52JqJW"
is_local: false
name: "Live A Lil"
popularity: 60
preview_url: "https://p.scdn.co/mp3-preview/f383781989d650cfeef29b9952211890aab7a983?cid=05254a545218406db543397b27a55c17"
track_number: 4
type: "track"
uri: "spotify:track:6mBwzEADA0EfzISE52JqJW"
*/

var totalTime = 0
function createData(name, artists, length, id , external_urls,album) {
  var arrayOfNames = []
  var time = 0
  artists.forEach(element => {
    arrayOfNames.push(element.name)
  });
  artists = arrayOfNames.toString()
  time = millisToMinutes(length)
  totalTime = time + totalTime
  console.log(totalTime)
  length = millisToMinutesAndSeconds(length)
    return { name, artists, length , id, external_urls , time , album};
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function millisToMinutes(millis){
  var minutes = Math.floor(millis / 60000);
  return minutes
}


export default class Tracks extends React.Component{
  constructor(props){
    super(props)
      console.log(props)
      this.state = {rows:this.props.allTracks, time:totalTime}
    }

  handleGenerateCheck = () =>{
    if(totalTime >= 60){
      this.props.generateReady(totalTime)
    }
  }

  render(){
    var rowsOfData = []
    var displayError = ""
    if(this.props.tracksImported){
      rowsOfData = this.props.allTracks.map(({ name, artists, duration_ms, id, external_urls, album}) => (createData(name, artists,duration_ms,id,external_urls, album)));
      this.handleGenerateCheck()
      console.log(rowsOfData)
    }
    if(totalTime < 60){
      displayError = "You have less than 60 minutes worth of songs in the box"
    }else{
      displayError = " " 
    }
  return (
    <React.Fragment>
    <div style={{ maxWidth: "100%"}}>
        <MaterialTable
          style={{background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', color:'#000000'}}
          icons={tableIcons}
          columns={[
            { title: "NAME", field: "name" },
            { title: "ARTIST", field: "artists" },
            { title: "LENGTH", field: "length", type: "numeric" }
          ]}
          data={rowsOfData}
          title="Hourlist Song Box"
          options={{
          headerStyle: {
            background: 'linear-gradient(to bottom, #434343 0%, black 100%)',
            color: '#FFF'
          }
        }}
        />
        <p style={{color:"red"}}> {displayError} </p>
      </div>
    </React.Fragment>
  );
    }
}