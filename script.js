var quotesContainer = document.getElementById('container');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let quotesRequest = new XMLHttpRequest();
    
    quotesRequest.open('GET', `quotes/quotes.json`);
    
    quotesRequest.onload = () => {
        let data = JSON.parse(quotesRequest.responseText);
        
         function newQuote () {
            const quote = document.querySelector('.mb-0');
            const attrib = document.querySelector('.blockquote-footer');
     
            let indexOfQuote = Math.floor(Math.random() * 102 )
     
            quote.innerHTML = data[indexOfQuote].quote;
            attrib.innerHTML = data[indexOfQuote].author;
        
}
   newQuote();   
}
    
quotesRequest.send();
    
});


