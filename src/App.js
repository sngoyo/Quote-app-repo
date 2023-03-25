import React from "react";
import QuoteMachine from "./Components/QuoteMachine";
import "./App.css";
import {useEffect, useState} from "react";

const App = ()=> {
  const [quoteData, setQuoteData] = useState("");

  useEffect(() =>{
     fetchQuote();
  },[]);

  async function fetchQuote() {
      try{
          const response = await fetch("https://dummyjson.com/quotes");
          if(!response.ok){
              throw new Error(`HTTP error: ${response.status}`);
          }
          const data = await response.json();
          setQuoteData(data);


      } catch(error){
          alert(`Could not get Quote: ${error}, Check your Internet Connection`);
  }
}

  return(
    <div id="quote box">
      <QuoteMachine quoteData={quoteData}/>
    </div>


  );
}

export default App;
