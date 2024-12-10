const input = document.getElementById("search");
input.addEventListener("keyup", search);

function search() {
    const inputVal = input.value;
    const li = document.getElementsByTagName("li");

    for (i = 0; i <li.length; i++) {
        // checks if the letters we're inputting are included in our list options 
        // however it's interesting because we're basically chekcing if our input is 
        // contained anywhere in the country name 
        // so an input of "str" will leave "Australia" as the only option

        if (li[i].innerHTML.toLowerCase().includes(inputVal)) {
            // keeps the option in the list
            li[i].style.display = "";
        } else {
            // gets rid of the option
            li[i].style.display = "none";
        }
    }
}