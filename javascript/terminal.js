const message = {
  buttons : {
    nav0 : {
      Label : "Cancel",
      Message : "Hold on tight, we're heading home!",
      Class : "cancel"
    },
    nav1 : {
      Label : "News",
      Message : "Clicked",
      Class : "green"
    },
    nav2 : {
      Label : "Two",
      Message : "Clicked",
      Class : "green"
    },
    nav3 : {
      Label : "Three",
      Message : "Clicked",
      Class : "green"
    },
    nav4 : {
      Label : "Four",
      Message : "Clicked",
      Class : "green"
    },
    nav5 : {
      Label : "Five",
      Message : "Clicked",
      Class : "green"
    },
    nav6 : {
      Label : "Six",
      Message : "Clicked",
      Class : "green"
    }
  },
  getMessage : function(key)
  {
    return this.buttons[key];
  }
}

/*
    console output
*/
function navigate(output)
{
  let btn = message.getMessage(output.id);
  //console.log(btn.Label, btn.Message);
  document.getElementById("console-button").className = "";
  document.getElementById("console-button").classList.add(btn.Class);
  document.getElementById("console-button").innerHTML = btn.Label;
  document.getElementById("console-return").innerHTML = btn.Message;
}

/*
    add buttons to the navigator
*/
let key;
for (key in message.buttons)
{
  //console.log(key, message.buttons[key]);
  document.getElementById("thenav").insertAdjacentHTML("beforeend", `<button id="${key}" class="navigator" onClick="navigate(this)">${message.buttons[key].Label}</button>`);
  document.getElementById(`${key}`).classList.add(`${message.buttons[key].Class}`);
}