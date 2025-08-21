let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);//convert to array

arr.forEach(button => {
  button.addEventListener('click', (e) => { //(e) is the event object (automatically passed when the button is clicked).
    if (e.target.innerHTML == '=') { //e.target.innerHTML gets the text inside the button.
      try {
        string = eval(string); // evaluate math expression
       // eval() takes a string of JavaScript code and runs it.
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    }
    else if (e.target.innerHTML == 'AC') {
      string = "";
      input.value = string;
    }
    else if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
    else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
