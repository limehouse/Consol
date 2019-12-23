const message = {
  buttons : {
    nav0 : {
      Label : "Cancel",
      Message : "Hold on tight, we're heading home!"
    },
    nav1 : {
      Label : "One",
      Message : "Clicked"
    },
    nav2 : {
      Label : "Two",
      Message : "Clicked"
    },
    nav3 : {
      Label : "Three",
      Message : "Clicked"
    },
    nav4 : {
      Label : "Four",
      Message : "Clicked"
    },
    nav5 : {
      Label : "Five",
      Message : "Clicked"
    },
    nav6 : {
      Label : "Six",
      Message : "Clicked"
    }
  },
  getMessage : function(key)
  {
    return "[".concat(this.buttons[key].Label.toUpperCase(), "] ", this.buttons[key].Message);
  }
}

function navigate(output)
{
  let msgs = message.getMessage(output.id);
  document.getElementById("console-return").innerHTML = msgs;
  console.log(msgs);
}