const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

// the prevent.Default stops the page from refreshing every time the button is clicked 
// more specifcally it prevents the default function associated with an action
const copyText = (e) => {
    e.preventDefault();

    // navigator.clioboard is a propperty of the Clipboard API, allowing interaction with the system clipboard 
    // the writeText() is async
    // the function contained within 'then' is what will take place after the async function has finished
    navigator.clipboard.writeText(coupon.value).then(() => {
        btn.textContent = "Copied";

    // this set timeout returns the button text back to "Copy" after 3 seconds
        setTimeout(() => {
            btn.textContent = "Copy";
        }, 3000);
    });
};

btn.addEventListener("click",copyText);