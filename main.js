var quotes = [
    '“Be yourself; everyone else is already taken.”',
    '“So many books, so little time.”',
    '“A room without books is like a body without a soul.”',
    '“You only live once, but if you do it right, once is enough.”',
    '“Be the change that you wish to see in the world.”',
    '“If you tell the truth, you don`t have to remember anything.”',
    '“Without music, life would be a mistake.”',
    '“We accept the love we think we deserve.”'


]
var quotesAuthor = [
    '― Oscar Wilde',
    '― Frank Zappa',
    '― Marcus Tullius Cicero',
    '― Mae West',
    '― Mahatma Gandhi',
    '― Mark Twain',
    '― Friedrich Nietzsche, Twilight of the Idols',
    '― Stephen Chbosky, The Perks of Being a Wallflower',
]

var quoteImage = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg'

]
// // function newQuote(){

// //     var randomNumber = Math.floor(Math.random() * (quotes.length) , Math.random() * (quotesAuthor.length));
// //     document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
// //     document.getElementById('authorDisplay').innerHTML = quotesAuthor[randomNumber]

    
// // }


function newQuote(){
    var randomNumber ;
    var prevNumber ;

    do {
        prevNumber = randomNumber;

        randomNumber = Math.floor(Math.random() * (quotes.length) , Math.random() * (quotesAuthor.length) , Math.random() * (quoteImage.length));
    }
    while (prevNumber === randomNumber);

    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    document.getElementById('authorDisplay').innerHTML = quotesAuthor[randomNumber];
    document.getElementById('quoteImage').src = quoteImage[randomNumber]

}


// // 


// function newQuote() {
//     var randomNumber;
//     var prevNumber;

//     do {
//         prevNumber = randomNumber;

//         // Generate a random index for both arrays separately
//         var randomIndexQuote = Math.floor(Math.random() * quotes.length);
//         var randomIndexAuthor = Math.floor(Math.random() * quotesAuthor.length);

//           randomNumber = randomIndexQuote , randomIndexAuthor ;
//         // Combine the random indexes to get a unique random pair
//         // randomNumber = randomIndexQuote + randomIndexAuthor * quotes.length;
//     } while (prevNumber === randomNumber);

//     document.getElementById('quoteDisplay').innerHTML = quotes[randomIndexQuote];
//     document.getElementById('authorDisplay').innerHTML = quotesAuthor[randomIndexAuthor];
// }



