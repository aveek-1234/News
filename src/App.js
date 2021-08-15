
import './App.css';
import {useState,useEffect} from 'react';
import News from './Components/News';

function App() {
  const [news,setnews]=useState([]);
  const website= process.env.REACT_APP_WEBSITE;
  const key= process.env.REACT_APP_KEY;
  const host= process.env.REACT_APP_HOST;
  

useEffect(()=>{fetch(website, {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": key,
    "x-rapidapi-host": host
  }
})
.then(response=>response.json()).then(data=>{console.log(data.value);
 setnews(data.value);
})
.catch(err => {
  console.error(err);
});
},[])
  
  return (
    
    <div className="App">
     <h1>Ak News</h1>
     <div className="News">
          {news.length >0 && news.map((news)=> <News key={news.id}{...news}/>)}
     </div>
     
    </div>
  )
}
export default App;


