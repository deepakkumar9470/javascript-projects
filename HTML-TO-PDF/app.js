console.log('pdf')


const pdfButton = document.getElementById('pdfBtn')


pdfButton.addEventListener('click', function(){
    pdfGenerator()
});

//html2canvas

//  function pdfGenerator(){
    
//       var elementToPrint = document.getElementById('printArea');
      
//       html2canvas(elementToPrint, {
//           useCORS : true,
//           onrendered: function (canvas) {
//             var pdf = new jsPDF('p', 'pt', 'letter');
            
//              var pageHeight = 980
//              var pageWidth = 900
//              for (var i = 0; i <= elementHTML.clientHeight / pageHeight; i++) {
//                 var srcImg = canvas;
//                 var sX = 0;
//                 var sY = pageHeight * i; 
//                 var sWidth = pageWidth;
//                 var sHeight = pageHeight;
//                 var dX = 0;
//                 var dY = 0;
//                 var dWidth = pageWidth;
//                 var dHeight = pageHeight;

//                 window.onePageCanvas = document.createElement('canvas');
//                 onePageCanvas.setAttribute('width', pageWidth);
//                 onePageCanvas.setAttribute('height', pageHeight);
//                 var ctx = onePageCanvas.getContext('2d');

//                 ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);

//                 var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
//                 var width = onePageCanvas.width;
//                 var height = onePageCanvas.clientHeight;

//                 if(i>0){
//                     pdf.addPage(612,864)
//                     pdf.setPage(i + 1);
//                     pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width * .62), (height * .62));
//                 }
//              }


//              pdf.save('mydoc.pdf')

//           }
//       });



// };