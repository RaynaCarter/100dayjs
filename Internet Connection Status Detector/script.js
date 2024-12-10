// Variables 
const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgcolor = document.getElementById("main");

function setColor (){
    bgcolor.classList.add("online");
}

// try to fetch an img from an external source and if 
// its able to fetch it then it is connected to internet 
// however, if the fetch isn't completed then it is not connected
// We decided to get the image and current date 

// try-catch structure 
//  await pauses the execution of the function until the Promise returned by fetch is resolved.
async function connectionStatus() {
    try {
        // fetch is a function that makes a network request to the specified URL. Here, it's requesting
        // an image from Wikipedia, with '?time=' appended to the URL to prevent 
        // caching by adding a unique timestamp.
        const fetchResult = await fetch (
            "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" + (new Date()).getTime());
            
        image.src = "./images/online.svg";
        setColor();
        
        // we know we have internet if the status is between 200 and 300 
        return fetchResult.status >=200 && fetchResult.status < 300;

         } catch (error){
            //console.log(error);
            statusDisplay.textContent = 'OOPS!!! Your internet connection is down';

            image.src = "./images/offline.svg";
            bgcolor.classList.remove("online");
        }
}

// Monitor the connection

setInterval(async () => {
    const result = await connectionStatus();
    if (result) {
        statusDisplay.textContent = "Online connection looks good ";
        setColor();
    }
}, 6000);

// check the connection when the page loads
window.addEventListener("load", async (event) => {
    if (connectionStatus()) {
         statusDisplay.textContent = 'You are online';
    } else {
        statusDisplay.textContent = 'You are NOT online';
    }
})