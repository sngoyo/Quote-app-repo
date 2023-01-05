import React from "react";
import {useState, useEffect} from "react";
import  "/home/salim/Documents/REACT_APPs/quote-app/src/App.css";
import $ from "jquery";


const quoteContainer = [
  { color: "#395144", quote:"Start writing, no matter what.The water does not flow until the faucet is turned on", author:"Louis L’Amour"},
  { color: "#FF8787", quote:"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good", author:"William Faulkner"},
  { color: "#AA8B56", quote:"The first draft is just you telling yourself the story", author:"Terry Pratchett"},
  { color: "#DC5F00", quote:"Start before you’re ready", author:"Steven Pressfield"},
  { color: "#BCE29E", quote:"You can always edit a bad page. You can’t edit a blank page", author:"Jodi Picoult"},
  { color: "#FF5858", quote:"You can’t wait for inspiration. You have to go after it with a club.", author:"Jack London"},
  { color: "#4649FF", quote:"I have never started a poem yet whose end I knew. Writing a poem is discovering", author:"Robert Frost"},
  { color: "#3C4048", quote:"If there's a book that you want to read, but it hasn't been written yet, then you must write it.", author:"Toni Morrison"},
  { color: "#00ABB3", quote:"I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later I can build castles.", author:"Shannon Hale"},
  { color: "#FF731D", quote:"If you’re always trying to be normal you will never know how amazing you can be", author:"Maya Angelou"}
]

const QuoteMachine = () => {
    const [quote, setQuote] = useState(quoteContainer[7].quote);
    const [color, setColor] = useState(quoteContainer[7].color);
    const [author, setAthour] = useState(quoteContainer[7].author);
    document.body.style.background = color;


    function ChangeQuote () {

      const randomIndex = Math.floor(Math.random() * quoteContainer.length);

     setQuote(quoteContainer[randomIndex].quote);
      setColor(quoteContainer[randomIndex].color);
      setAthour(quoteContainer[randomIndex].author);
     document.body.style.background = color;



  }


    return (
         <div id="quote-box">
          <h2 id="text" style={{color:color}}> <span className="quote-icon"><i class="fa-solid fa-quote-left"></i></span>

            {quote} <p id="author"><em>-{author}</em></p>  </h2>

          <div className="icons-button-div">

            <button id="new-quote" onClick={ChangeQuote} style={{backgroundColor:color}}><span className="button-text">New quote</span></button>

            <div id="socialMedia">
              <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"><div className="twitter-icon" style={{backgroundColor:color}}><i class="fa-brands fa-twitter"></i></div></a><a href="https://tumblr.com" target="_blank"><div className="tumblr-icon" style={{backgroundColor:color}}><i class="fa-brands fa-tumblr"></i></div></a></div>
          </div>
          <p className="mtunzi">by Salim</p>
         </div>



    );
}

export default QuoteMachine;