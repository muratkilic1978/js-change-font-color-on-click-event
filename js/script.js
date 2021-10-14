	
    /*  Step 1 - Use document.getElementById to fecth the id named "color" and store the value in a variable (let) named "colorElem" */

    let colorElem = document.getElementById('color');

    /*  Step 2 - add a addEventListener to the variable "colorElem".  The addEventListener should work on a click event a call the function changeColor */

    colorElem.addEventListener("click", changeColor);

    /* Step 3 - Create a new variable named "currentColor" with the word "let" and store the value "red" into it; */

    let currentColor = "blue";

    /* Step 4 - Create a function named changeColor() { } with open and end curly-brackets*/

    function changeColor() 
    {
        if (currentColor == 'blue') {
            document.querySelector('body').style.color = 'maroon';
            currentColor = 'maroon';
        }
        else {
            document.querySelector('body').style.color = 'blue';
            currentColor = 'blue';
        }
        return currentColor;
    }

    /* Step 4.1 - Inside the curly-brackets in the function - you should create and if else statement */

    /* Step 4.2 - if currentColor is equal (==) to "red" then write open and end curly brackets. Inside the open and end curly brackets do following. Use document.querySelector to select 'h1' element in HTML and set the font-color - style.color = "maroon" and finally set the variable currentColor = "maroon".  */

    /* Step 4.3 - Write else and after the else keyword write begin and end curly brackets */

    /* Step 4.4 - Inside the curly-brackets use document.querySelector to select 'h1' element and set style.color = "blue" and finally set the currentColor = "red" */

    /* Ste 4.5 - Place the cursor outside the end-curly brackets from the else-statement and write return followed by currentColor with a semicolon */