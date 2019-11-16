import React from 'react';
import Container from '@material-ui/core/Container';
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
import { forwardRef } from 'react';


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

  function createData(name, artists, danceAmount, acoustiAmount, liveAmount, energyAmount, loudAmount, instrumentAmount, tempoAmount) {
    var arrayOfNames = []
    artists.forEach(element => {
      arrayOfNames.push(element.name)
    });
    artists = arrayOfNames.toString()
    danceAmount = danceAmount.toFixed(2)
    energyAmount = energyAmount.toFixed(2)
    loudAmount = loudAmount.toFixed(2)
    instrumentAmount = instrumentAmount.toFixed(2)
    tempoAmount = tempoAmount.toFixed(2)
      return { name, artists, danceAmount, liveAmount, energyAmount, loudAmount, instrumentAmount, tempoAmount};
  }
/*

*
acousticness: 0.0126
danceability: 0.864
duration_ms: 189107
energy: 0.877
instrumentalness: 0.0000146
liveness: 0.0831
loudness: -2.418
speechiness: 0.0644
tempo: 103.985
track_href: "https://api.spotify.com/v1/tracks/4cyUTdVRJNxjcI9W4TezDW"
*/


export default class Playlist extends React.Component{
        constructor(props){
        super(props)
        this.state = {rows:this.props.allTracks}
        }
  
        render(){
          var rowsOfData = []
          console.log(this.props.allTracks)
          rowsOfData = this.props.allTracks.map(({feature:{danceability:danceAmount}, feature:{acousticness:acoustiAmount}, feature:{liveiness:liveAmount}, feature:{loudness:loudAmount}, feature:{energy:energyAmount} ,feature:{instrumentalness:instrumentAmount}, feature:{tempo:tempoAmount},  name, artists}) => (createData(name, artists, danceAmount, acoustiAmount, liveAmount, energyAmount, loudAmount, instrumentAmount, tempoAmount)))
          return(
          <Container fixed style={{height:'450px'}}>  
         <React.Fragment>
        <MaterialTable
          style={{background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', maxWidth:"100%", color:'#000000'}}
          icons={tableIcons}
          columns={[
            {title: "NAME", field: "name" },
            {title: "ARTIST", field: "artists" },
            {title: "Dance", field: "danceAmount", type: "numeric" },
            {title: "Energy", field:"energyAmount", type:"numeric"},
            {title: "Loud", field: "loudAmount", type:"numeric"},
            {title: "Tempo", field: "tempoAmount", type:"numeric"},
          ]}
          data={rowsOfData}
          title="Generated Features"
          options={{
          headerStyle: {
            background: 'linear-gradient(to bottom, #434343 0%, black 100%)',
            color: '#FFF'
          }
        }}
        />
        </React.Fragment>
           </Container>  
            )
        }


}
