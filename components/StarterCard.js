import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 500,
    backgroundColor: 'green'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 auto',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function StarterCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.card}>
        <CardContent>
       
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }