const doSomething = function () {
  const caret = document.createElement("img");
  caret.id = "deverse__play-icon";
  caret.srcset =
    "https://img.icons8.com/ios-glyphs/1x/play-button-circled--v2.png";
  caret.style = "height: 20px; width: 20px; margin-left: 5px";

  const newElement = document.createElement("a");
  newElement.className = "btn btn-primary float-left ml-2";
  newElement.id = "deverse__button";
  newElement.innerText = "Launch in Deverse";
  newElement.href =
    "http://34.135.226.169/?folder=%2Fhome%2Fcodepair-frontend&tkn=007";
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
