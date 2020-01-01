const terminal = {
  buttons : [
    {
      Label : "Home",
      Header : "Switchboard",
      Message : "Hold on tight, we're heading home!",
      Class : "cancel",
      Hotkey : "Digit1"
    },
    {
      Label : "Search",
      Header : "DuckDuckGo",
      Message : "Off we <a href='https://www.duckduckgo.com/' target='_blank'>DuckDuckGo</a>",
      Class : "green",
      Hotkey : "Digit2"
    },
    {
      Label : "SSH",
      Header : "Pimlico",
      Message : "Make me look 1337",
      Class : "green",
      Hotkey : "Digit3"
    },
    {
      Label : "News",
      Header : "Reuters",
      Message : "No news is good news",
      Class : "green",
      Hotkey : "Digit4"
    },
    {
      Label : "Download",
      Header : "Torrents",
      Message : "Oooharr",
      Class : "green",
      Hotkey : "Digit5"
    },
    {
      Label : "Roster",
      Header : "Sharks",
      Message : "Don't forget to RSVP",
      Class : "green",
      Hotkey : "Digit6"
    },
    {
      Label : "Help",
      Header : "Manual",
      Message : "You can lead a horse to water&hellip;",
      Class : "green",
      Hotkey : "Digit7"
    }
  ],
  getLabel : function(key)
  {
    return this.buttons[key].Label;
  },
  getHeader : function(key)
  {
    //return this.buttons[key].Label.concat(" &ndash; ", this.buttons[key].Header);
    return this.buttons[key].Header;
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
 * Page builder
 */
terminal.buttons.forEach(addNavBtn); // add the navigation buttons
navigate({ id : 0 }); // default page to load

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
  //document.getElementById("header").innerHTML = Header;
  document.getElementById("title").innerHTML = Label;
  document.getElementById("description").innerHTML = Header;

  document.getElementById("page").innerHTML = e.id;

  // console output
  document.getElementById("label").className = "";
  document.getElementById("label").classList.add(Class);
  document.getElementById("label").innerHTML = Label;
  document.getElementById("message").innerHTML = Message;
}

/**
 * Add buttons to the navigation bar
 */
function addNavBtn(item, index)
{
  document.getElementById("topnav").insertAdjacentHTML("beforeend", `<button id="${index}" class="action" onClick="navigate(this)"><span class="hotkey">${index + 1}</span>${item.Label}</button>`);
  document.getElementById(index).classList.add(item.Class);
}

/**
* Key up event listener
*/
document.addEventListener("keyup", function(e)
{
  //console.log(e.code); //enable this to capture all keyup events
  terminal.buttons.find((o, i) => {
    if (o.Hotkey === e.code) {
    //console.log(o, i);
    navigate({ id : i });
    }});
});
