import { Button } from '@material-ui/core';
import React from 'react';
import {useState} from 'react';
import './Newsdetails.css';

function Newsdetails(props) {
    
    return ( <>{(props.view)?(
                <div className="Totaldetail" >
                 <h2>{props.data.title}</h2>
                 <img src={props.data.image.url}/>
                <div className="Details">{props.data.body}
       <Button size="Small" className="close"  onClick={()=>props.setview(false)} >Close</Button>
    </div>
    </div>): ""}

   </> );
}
export default Newsdetails
