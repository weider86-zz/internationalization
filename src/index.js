console.log("Hello Webpack Project.");

var infoButton = document.getElementsByClassName("info-button")[0];

var showInfo = function () {
  alert("Webpack is working!");
};

infoButton.onclick = showInfo;
