const myBtn = document.querySelector('#pdfBtn')
const printArea = document.querySelector('#whattoprint')

myBtn.addEventListener('click', ()=>{
    generatePdf()
});

function generatePdf () {
    
    html2pdf(printArea, {
        margin:       1,
        filename:     'blurgs-letter-head.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 1, logging: true, dpi: 96, },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
       });
};

