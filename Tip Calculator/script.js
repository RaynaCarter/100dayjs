const btn = document.querySelector(".btn"),
    tip = document.querySelector(".tip"),
    total = document.querySelector(".total"),
    error = document.querySelector(".error");

    const hideError = () => {
        setTimeout(() => {
            error.style.display = "none";
        }, 5000); 
    };

    const calcTip = () => {
       const bill = document.querySelector(".bill").value;
       const rate = document.querySelector(".rate").value;

       if (bill === "" || rate === "") {
            // makes the error <p> with a class of error show up in the display
            error.style.display = "block";
            hideError();
            
       } else if (bill === "0") {
            error.style.display = "block";
            hideError();
       } else {
            let tipAmt = bill * rate;
            tipAmt = Math.ceil(tipAmt);
            tip.innerHTML = `Tip: $${tipAmt}`;
            total.innerHTML = `Total Amount: $${Number(bill)+ tipAmt}`
       }
      
    };

    btn.addEventListener("click",calcTip);

