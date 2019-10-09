/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [
  {
    quote: "Success in creating AI would be the biggest event in human history. Unfortunately, it might also be the last, unless we learn how to avoid the risks.",
    source: "Stephan Hawking",
    citation: "https://www.cnbc.com/2017/11/06/stephen-hawking-ai-could-be-worst-event-in-civilization.html",
    years: "1942 - 2018"
  },

  {
    quote: "One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.",
    source: "Elbert Hubbard",
    citation: "https://www.brainyquote.com/quotes/elbert_hubbard_108045",
    years: "June 19, 1856 – May 7, 1915"
  },

  {
    quote: "I'm having nightmares that i forgot to back up my system",
    source: "Richard Hendricks",
    citation: "Silicon Valley TV Series"
  },

  {
    quote: "Science and technology revolutionize our lives, but memory, tradition and myth frame our response.",
    source: "Arthur M. Schlesinger",
    citation: "https://www.brainyquote.com/quotes/arthur_m_schlesinger_109503",
    years: "Feb 27, 1888 - Oct 30, 1965"
  },

  {
    quote: "Every human has four endowments - self awareness, conscience, independent will and creative imagination. These give us the ultimate human freedom... The power to choose, to respond, to change.",
    source: "Stephen Covey",
    citation: "https://www.thequotablecoach.com/every-human-has-four-endowments-self-awareness-conscience-independent-will-and-creative-imagination-these-give-us-the-ultimate-human-freedom-the-power-to-choose-to-respond/",
    years: "October 24, 1932 – July 16, 2012"
  },
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  let quoteList = Math.floor(Math.random() * quotes.length);
  return quotes[quoteList];

}



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote variable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  let result = getRandomQuote();
  let stringHTML = "";
  stringHTML = "<p class='quote'>" + result.quote + "</p>";
  stringHTML += "<p class='source'>" + result.source;

if ("citation" in result) {
  stringHTML += "<span class='citation'>" + result.citation + "</span>";
}

  document.getElementById('quote-box').innerHTML = stringHTML;
}
printQuote();


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.