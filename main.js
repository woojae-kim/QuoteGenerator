// api request

fetch('https://api.api-ninjas.com/v1/quotes', {
  headers: {
    'X-API-Key': 'qk9jnZV/yQUu9C1F41j1MA==fjWCyWGXrcpj5jQB'
  }
})
  .then(response => response.json())
  .then(data => {
    // to use data in code
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });

  // Fetch quote function
async function getRandomQuote() {
  const response = await fetch('https://api.api-ninjas.com/v1/quotes');
  const data = await response.json();
  return { quote: data.data[0].quoteText, author: data.data[0].quoteAuthor };
}

// Display a random quote on the page
function displayRandomQuote() {
  getRandomQuote().then(quote => {
    const qAuthor = document.getElementById('quote-author');
    const qBody = document.getElementById('quote-body');
    qAuthor.textContent = quote.author;
    qBody.textContent = quote.quote;
  }).catch(error => {
    console.error(error);
  });
}

// event for on click
const genQuoteButton = document.getElementById('generate-quote');
genQuoteButton.addEventListener('click', displayRandomQuote);


