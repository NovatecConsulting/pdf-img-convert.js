var pdf2img = require("./pdf-img-convert.js");
var fs = require("fs");

// This returns a promise as it's an async function
var output = pdf2img.convert('https://gahp.net/wp-content/uploads/2017/09/sample.pdf');

// Acting on this promise when it's fulfilled:
output.then(function(pdfArray) {
  console.log("Saving");
  // Loop through each page, saving the images
  for (i = 0; i < pdfArray.length; i++){
    fs.writeFile("./outputImages/output"+i+".png", pdfArray[i], function (error) {
      if (error) { console.error("Error: " + error); }
    }); //writeFile
  } // for
});
