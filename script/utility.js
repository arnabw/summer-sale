function changeInnerText(id, theText) {
  document.getElementById(id).innerText = theText;
}
function splitThePrice(str) {
  str = str.split(" ");
  return parseFloat(str[0]);
}

function getId(id) {
  return document.getElementById(id);
}
