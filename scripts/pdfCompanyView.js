class PdfCompany {
    renderPDF(url, canvasContainerId) {
        const canvasContainer = document.getElementById(canvasContainerId)
        const renderPage = (page) => {
            let viewport = page.getViewport({scale: 1.5});
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            let renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };

            canvas.height = viewport.height;
            canvas.width = viewport.width;

            canvasContainer.appendChild(canvas);

            page.render(renderContext);
        }

        const renderPages = (pdfDoc) => {
            let promises = []
            for (let num = 1; num <= pdfDoc.numPages; num++) {
                promises.push(pdfDoc.getPage(num).then(renderPage))
            }
            Promise.all(promises).then(() => canvasContainer.removeChild(canvasContainer.childNodes[0]))
        }

        // Loaded via <script> tag, create shortcut to access PDF.js exports.
        let pdfjsLib = window['pdfjs-dist/build/pdf'];

        // The workerSrc property shall be specified.
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';

        canvasContainer.innerHTML = ''
        canvasContainer.insertAdjacentHTML('afterbegin', 'Loading...')

        pdfjsLib.getDocument(url).promise.then(renderPages);

    }
}
