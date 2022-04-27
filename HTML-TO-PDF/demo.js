const myBtn = document.querySelector('#pdfBtn')
const printArea = document.querySelector('#whattoprint')

myBtn.addEventListener('click', ()=>{
    makePDF()
})



function makePDF () {
    
    html2pdf(printArea, {
        margin:       1,
        filename:     'document.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, logging: true, dpi: 192, letterRendering: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
       });
};