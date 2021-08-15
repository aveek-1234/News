import React from 'react';
import  './News.css';
import { useState } from 'react';
import './Newsdetails';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Newsdetails from './Newsdetails';


export default function News(data) {
 const [view,setview] = useState(false);

 const  handleclick=()=> {
     setview(true);
 }


  return (
    <>
    <Card className="root">
      <CardActionArea>
        <CardMedia
          className="media"
          image= {data.image.url}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
          {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button className="Details" size="small"  color="primary" onClick={handleclick} >
          See Details
        </Button>
      </CardActions>
    </Card>
    <Newsdetails view={view} data={data} setview={setview} />
    </>
  );
}