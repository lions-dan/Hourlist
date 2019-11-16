import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    color:'black',
    height: '200px',
    maxHeight: 200,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function PreviewList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
        <li key={`${props.sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{`Build Up Generated Playlist`}</ListSubheader>
            {props.sortedList.map((item,index) => (
              <ListItem style={{color:'black'}}key={item.id+index}>
                <ListItemText primary={`${item.name} by ${item.artists[0].name}`} />
              </ListItem>
            ))}
          </ul>
        </li>
    </List>
  );
}