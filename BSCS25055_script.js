if(window.location.pathname == "/BSCS25055_Home.html")
{
    window.onload = function()
    {
        alert("Welcome to Santa's Present a place where you find perfect gifts")
    }
}

document.getElementById("year").textContent = "Current Year: " + new Date().getFullYear();

function stock(id)
{
    if(id == 'button1')
        alert("In Stock");
    if(id == 'button2')
        alert("Out of Stock");
    if(id == 'button3')
        alert("In Stock");
    if(id == 'button4')
        alert("Out of Stock");
    if(id == 'button5')
        alert("In Stock");
}

function validation() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name == "" || email == "" || message == "")
    {
        alert("All fields must be filled out!");
        return false;
    }

    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailregex.test(email))
    {
        alert("Invalid Email!");
        return false;
    }

    return true;
}

function sendMessage() {
event.preventDefault();

let input = document.getElementById("user-input").value.toLowerCase();
let chatlog = document.getElementById("chat-log");

let usermsg = document.createElement("p");
usermsg.textContent = "You: " + input;
chatlog.appendChild(usermsg);

let botresponse = getBotResponse(input);
let botmsg = document.createElement("p");
botmsg.textContent = "Bot: " + botresponse;
chatlog.appendChild(botmsg);

document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
  if (input.includes("hello") || input.includes("hi"))
  {
    return "Hello there! How can I help you?";
  } 
  else if (input.includes("products") || input.includes("gifts")) 
  {
    return "I can provide you gifts to give on special occasions";
  } 
  else if (input.includes("price")) 
  {
    return "price is mentioned with the product";
  } 
  else if (input.includes("stock") || input.includes("available")) 
  {
    return "The stock will be there soon";
  }
  else if (input.includes("thanks")) 
  {
    return "let us know about your queries";
  }
  else 
  {
    return "I'm sorry, I cannot provide response to that";
  }
}