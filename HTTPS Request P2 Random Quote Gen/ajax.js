//(Asynchronous Javascript and XML (Ajax) lets us request and retrieve information from the server without refreshing the webpage
const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");

function getQuotes(e) {
    e.preventDefault();
    if (number.value.length == 0) {
        return alert("Plese enter a number");
    } else {

        // XHR objects are used to request data from a web server
        // It is useful because you can: 
        // 1.Update a web page without reloading the page
        // 2.Request data from a server - after the page has loaded
        // 3.Receive data from a server  - after the page has loaded
        // 4.Send data to a server - in the background

    // NOTE: this is a common JS syntax for using the XMLHttpRequest object, so lets understand the logic line by line
    // new XHR object created 
     const https = new XMLHttpRequest();

     // this link doesn't work anymore 
    // had to make my own json file with my own quotes
    // Inform the XHR object that we wan to use the GET method, calling "wwww.whatever.com", async (true)
    https.open("GET", "quotes.json", true);

    // send the request to the URL and when recieved the onload function we defined will be called.
    https.send();
   
    // This property specifies a function to be excuted when the request is received (loaded)
    https.onload = function() {
        // When a response is received from the website
        // And that response has a code of 200 (success) then we have received
        // the final response from the URL we called.
        // "===" is the strict equality operator ensuring that two values are equal inboth value and type
        // "==" is differrent because it performs type coercion (i.e 1=="1")
        if (this.status === 200) {
            // if the string was a json encoded string, it needs to be parsed according
            const response = shuffle(JSON.parse(this.responseText));

            // the console shows that the response is an array containing json encoded strings where each [{text:"", author:""}] combo is an object
            console.log(response);
            let output = "";
        
            for (let i = 0; i < response.length; i++) {
                if (i == number.value) {break;}
                output += `
                    <li>Quote: ${response[i].text}</li>
                    <li>Author: ${response[i].author}</li>
                   <hr>
               `;
            }

            document.querySelector(".quotes").innerHTML = output;
        }
    } 
    }
}

//  FUNCTION TO SHUFFLE QUOTES

function shuffle(quotes) {
    let CI = quotes.length, tempValue, randomIndex;

    // While elements exist in the array
    while (CI > 0) {
        randomIndex = Math.floor(Math.random() * CI);
        // DECREASE CI BY 1
        CI--;
        // SWAP THE LAST ELEMENT WITH CI
        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }
    return quotes;
}