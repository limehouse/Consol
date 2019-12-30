const terminal = {
  buttons : [
    {
      Label : "Home",
      Header : "Your Digital Dashboard",
      Message : "Hold on tight, we're heading home!",
      Class : "cancel",
      Hotkey : "Escape"
    },
    {
      Label : "Search",
      Header : "Using DuckDuckGo",
      Message : "Off we <a href='https://www.duckduckgo.com/' target='_blank'>DuckDuckGo</a>",
      Class : "green",
      Hotkey : "Digit1"
    },
    {
      Label : "SSH",
      Header : "Server: Pimlico",
      Message : "Make me look 1337",
      Class : "green",
      Hotkey : "Digit2"
    },
    {
      Label : "News",
      Header : "World Headlines",
      Message : "No news is good news",
      Class : "green",
      Hotkey : "Digit3"
    },
    {
      Label : "Download",
      Header : "The Piratebay",
      Message : "Oooharr",
      Class : "green",
      Hotkey : "Digit4"
    },
    {
      Label : "Roster",
      Header : "The Sharks",
      Message : "Don't forget to RSVP",
      Class : "green",
      Hotkey : "Digit5"
    },
    {
      Label : "Help",
      Header : "Read the Manual",
      Message : "You can lead a horse to water&hellip;",
      Class : "green",
      Hotkey : "Digit6"
    }
  ],
  getLabel : function(key)
  {
    return this.buttons[key].Label;
  },
  getHeader : function(key)
  {
    return this.buttons[key].Label.concat(" &ndash; ", this.buttons[key].Header);
  },
  getMessage : function(key)
  {
    return this.buttons[key].Message;
  },
  getClass : function(key)
  {
    return this.buttons[key].Class;
  },
  getHotkey : function(key)
  {
    return this.buttons[key].Hotkey;
  }
}

/**
 * Display content for the user activated input
 */
function navigate(e)
{
  let Label = terminal.getLabel(e.id);
  let Header = terminal.getHeader(e.id);
  let Message = terminal.getMessage(e.id);
  let Class = terminal.getClass(e.id);
  let Hotkey = terminal.getHotkey(e.id);
  
  // content output
  document.getElementById("header").innerHTML = Header;

  // console output
  document.getElementById("label").className = "";
  document.getElementById("label").classList.add(Class);
  document.getElementById("label").innerHTML = Label;
  document.getElementById("message").innerHTML = Message;
}

/**
 * Add buttons to the navigation bar
 */
terminal.buttons.forEach(addNavBtn);

function addNavBtn(item, index)
{
  document.getElementById("topnav").insertAdjacentHTML("beforeend", `<button id="${index}" class="action" onClick="navigate(this)"><span style="float: left; background-color: var(--yellow);">&nbsp;${index}&nbsp;</span>${item.Label}</button>`);
  document.getElementById(index).classList.add(item.Class);
}

/**
* Key up event listener
*/
document.addEventListener("keyup", function(e)
{
  terminal.buttons.find((o, i) => {
    if (o.Hotkey === e.code) {
    //console.log(o, i);
    let buttonEvent = { id : i };
    navigate(buttonEvent);
    }});
});
