const doSomething = function () {
  const caret = document.createElement("span");
  caret.className = "dropdown-caret";

  const newElement = document.createElement("a");
  newElement.className = "btn btn-primary float-left ml-2";
  newElement.id = "deverse__button";
  newElement.innerText = "Launch in Deverse";
  newElement.href = "https://www.google.com";
  newElement.setAttribute("target", "_blank");

  newElement.appendChild(caret);

  document.getElementsByClassName("file-navigation")[0].appendChild(newElement);

  console.log("script.js");
};

const init = async function () {
  doSomething();
};

init();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "URL_CHANGED") {
    setTimeout(init, 3000);
  }
});

console.log("here in ext");