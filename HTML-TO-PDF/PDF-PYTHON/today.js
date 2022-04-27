const pdfBtn = document.querySelector('#pdfBtn')

pdfBtn.addEventListener('click',  () =>{
   
    pdfGenerator()
    
})

function pdfGenerator() {
  
    var element = document.getElementById('whattoprint');
  
    html2canvas(element, {
      useCORS: true,
      onrendered: function(canvas) {
  
        var pdf = new jsPDF('p', 'pt', 'a4');
  
        var pageHeight = 1123;
        var pageWidth = 794;
        for (var i = 0; i <= element.clientHeight / pageHeight; i++) {
          var srcImg = canvas;
          var sX = 0;
          var sY = pageHeight * i; // start 1 pageHeight down for every new page
          var sWidth = pageWidth;
          var sHeight = pageHeight;
          var dX = 0;
          var dY = 0;
          var dWidth = pageWidth;
          var dHeight = pageHeight;
  
          window.onePageCanvas = document.createElement("canvas");
          onePageCanvas.setAttribute('width', pageWidth);
          onePageCanvas.setAttribute('height', pageHeight);
          var ctx = onePageCanvas.getContext('2d');
          ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
  
          var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
          var width = onePageCanvas.width;
          var height = onePageCanvas.clientHeight;
  
          if (i > 0) 
            pdf.addPage(595, 791); 
  
          
            pdf.addImage(canvasDataURL, 'PNG', 0, 0, (width * .75), (height * .75)); // add content to the page
  
        }
        pdf.save('Blurgs-Letter-Head.pdf');
      }
    });
  }