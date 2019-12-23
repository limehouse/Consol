document.getElementById("nav0").addEventListener("click", n0);

function n0()
{
  msg("Hold on tight, we're heading home!");
}

function msg(output)
{
  document.getElementById("console-return").innerHTML = output;
}