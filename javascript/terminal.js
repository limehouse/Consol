const message = {
  buttons : {
    nav0 : {
      Label : "Home",
      Message : "Hold on tight, we're heading home!",
      Class : "cancel"
    },
    nav1 : {
      Label : "Search",
      Message : "Off we <a href='https://www.duckduckgo.com/' target='_blank'>DuckDuckGo</a>",
      Class : "green"
    },
    nav2 : {
      Label : "SSH",
      Message : "Make me look 1337",
      Class : "green"
    },
    nav3 : {
      Label : "News",
      Message : "No news is good news",
      Class : "green"
    },
    nav4 : {
      Label : "Download",
      Message : "Oooharr",
      Class : "green"
    },
    nav5 : {
      Label : "Roster",
      Message : "Don't forget to RSVP",
      Class : "green"
    },
    nav6 : {
      Label : "Help",
      Message : "You can lead a horse to water&hellip;",
      Class : "green"
    }
  },
  getMessage : function(key)
  {
    return this.buttons[key];
  }
}

function navigate(input)
{
  let btn = message.getMessage(input.id);
  document.getElementById("label").className = "";
  document.getElementById("label").classList.add(btn.Class);
  document.getElementById("label").innerHTML = btn.Label;
  document.getElementById("message").innerHTML = btn.Message;
  document.getElementById("header").innerHTML = btn.Label;
}

let key;
for (key in message.buttons)
{
  document.getElementById("topnav").insertAdjacentHTML("beforeend", `<button id="${key}" class="action" onClick="navigate(this)">${message.buttons[key].Label}</button>`);
  document.getElementById(`${key}`).classList.add(`${message.buttons[key].Class}`);
}

