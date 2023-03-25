import React from "react";
import {useState} from "react";
import  "/home/salim/Documents/REACT_APPs/quote-app/src/App.css";

const quoteContainer = [
  { color: "#222222", quote:"Start writing, no matter what.The water does not flow until the faucet is turned on", author:"Louis L’Amour"},
  { color: "#FF8787"},{ color: "#AA8B56"},{ color: "#DC5F00"},{ color: "#404258"}, { color: "#3A1078"},
  { color: "#658864"},{ color: "#2B3467"}, { color: "#00ABB3"}, { color: "#FF731D"},
  {color: "#0f4a42"}, {color: "#002B5B"}, {color: "#262A56"}, {color: "#251749"}, {color: "#820000"}, {color: "#7B2869"},
  {color: "#806019"}, {color: "#13005A"}, {color: "#9A208C"}, {color: "#393E46"}, {color: "#7149C6"}, {color: "#FE6244"},
  {color: "#9e6b47"}, {color: "#00337C"}, {color: "#443C68"}, {color: "##695a5a"}, {color: "#0A2647"}, {color: "#A84448"},
  {color: "#7d7274"}, {color: "#5909de"}, {color: "#181D31"}
]

const QuoteMachine = ({quoteData}) => {
    const [quote, setQuote] = useState(quoteContainer[0].quote);
    const [color, setColor] = useState(quoteContainer[0].color);
    const [author, setAthour] = useState(quoteContainer[0].author);
    document.body.style.background = color;


    function ChangeQuote () {
      //Getting random value
      let randomIndex = Math.floor(Math.random() * (quoteContainer.length-1));
      //Accessing data from the  Api
     setQuote(quoteData.quotes[randomIndex].quote);
     setAthour(quoteData.quotes[randomIndex].author);

     //Acessing data from quoteContainer list
     setColor(quoteContainer[randomIndex].color);
     document.body.style.background = color;

  }


    return (
         <div id="quote-box">
          <h2 id="text" style={{color:color}}>
            <p className="quote-content">
            <span className="quote-icon">
              <i class="fa-solid fa-quote-left">
              </i>
            </span>
            {quote}
            </p>
            <p id="author">
              <em>-{author}</em>
            </p>
          </h2>
          <div className="icons-button-div">
            <button id="new-quote" onClick={ChangeQuote} style={{backgroundColor:color}}>
              <span className="button-text">New quote</span>
            </button>
            <div id="socialMedia">
              <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">
                <div className="twitter-icon" style={{backgroundColor:color}}>
                  <i class="fa-brands fa-twitter"></i>
                  </div>
                  </a>
                  <a href="https://tumblr.com" target="_blank">
                    <div className="tumblr-icon" style={{backgroundColor:color}}>
                      <i class="fa-brands fa-tumblr"></i>
                    </div>
                    </a>
                    </div>
          </div>
          <p className="mtunzi">By Salim</p>
         </div>



    );
}

export default QuoteMachine;