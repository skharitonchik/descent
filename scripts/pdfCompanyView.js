let PdfCompany = (function () {
    const renderPDF = (url, canvasContainerId) => {
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
            canvasContainer.innerHTML = '';
            for (let num = 1; num <= pdfDoc.numPages; num++)
                pdfDoc.getPage(num).then(renderPage);
        }

        // Loaded via <script> tag, create shortcut to access PDF.js exports.
        let pdfjsLib = window['pdfjs-dist/build/pdf'];

        // The workerSrc property shall be specified.
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';

        pdfjsLib.getDocument(url).promise.then(renderPages);

    }

    return {
        render: renderPDF
    };
})();
