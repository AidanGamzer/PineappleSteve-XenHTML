$(document.ready(function() {

    setInterval( function() {
        
        console.log("Loaded... - pineapple.js")

        var hours = new Date().getHours();

        var mins = new Date().getMinutes();

        document.getElementById("hour-text").innerHTML = hours;
        
        document.getElementById("minute-text").innerHTML = mins;

    }, 10000 );

}));