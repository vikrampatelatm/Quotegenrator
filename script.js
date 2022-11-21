function genrator() {
    var quotes = {
        "– Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."',"– Leo Burnett":' “Curiosity about life in all of its aspects, I think, is still the secret of great creative people.”'," — Ashton Kutcher":'"Don’t settle for what life gives you; make life better and build something." ' ,"Kobe Bryant":'Everything negative – pressure, challenges – is all an opportunity for me to rise." —' ,"— Helen Keller":'"When we do the best we can, we never know what miracle is wrought in our life or the life of another." ' }

var authers=Object.keys(quotes);
var a=authers[Math.floor(Math.random() *authers.length)];
var q=quotes[a];
document.getElementById("quote").innerHTML=q;
document.getElementById("auther").innerHTML=a;
    }
