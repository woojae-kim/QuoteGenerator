
const category = ['age', 'art', 'attitude', 'business', 'communications', 'computers'
, 'education', 'equality', 'experience', 'failure', 'fitness', 'forgiveness', 'future', 'history',
'inspirational', 'intelligence', 'knowledge', 'leadership', 'learning', 'legal', 'life', 'medical', 'money', 
'success'];

//function for getting a random number between 0 and max, when calling the function, replace max with 
//max desired length
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function getRandomQuote() {

//infinitley generate a new number and show a photo, category length is the max
let randInt = getRandomInt(category.length);

$.ajax({
  method: 'GET',
  url: 'https://api.api-ninjas.com/v1/quotes?category=' + category[randInt],
  headers: { 'X-Api-Key': ''},
  contentType: 'application/json',
  success: function(result) {
    const qAuthor = document.getElementById('quote-author').textContent = result[0].author;
      const qBody = document.getElementById('quote-body').textContent = result[0].quote;
      console.info(result);

  },
  error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
  }
});

};

// Display a random quote on the page
function displayRandomQuote() {
  getRandomQuote().then(quote => {
    const qAuthor = document.getElementById('quote-author');
    const qBody = document.getElementById('quote-body');
    console.info(quote);
    // qAuthor.textContent = quote.author;
    // qBody.textContent = quote.quote;
  }).catch(error => {
    console.error(error);
  });
}

// event for on click
const genQuoteButton = document.getElementById('generate-quote');
genQuoteButton.addEventListener('click', getRandomQuote);


