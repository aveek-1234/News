import { Button } from '@material-ui/core';
import React from 'react';
import {useState} from 'react';
import './Newsdetails.css';

function Newsdetails(props) {
    
    return ( <>{(props.view)?(
                <div className="Totaldetail" >
                 <h2>{props.data.title}</h2>
                <div className="Details">{props.data.body}
                <img src={props.data.image.url}/>
       <Button size="Small" className="close" color="primary" onClick={()=>props.setview(false)} >Close</Button>
    </div>
    </div>): ""}

   </> );
}
export default Newsdetails
