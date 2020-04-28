class CompaniesPage {
    constructor(wrapperDiv, extensionsDiv, questsDiv, actsDiv) {
        this.extensionsDiv = extensionsDiv
        this.questsDiv = questsDiv
        this.currentAct = 'act1'
        this.selectedCompany = null
        new Common(wrapperDiv).drawMenu()
        new ActSwitcher(actsDiv, currentAct => {
            this.currentAct = currentAct
            this.drawQuestsLists()
        })
        this.pdf = new PdfCompany()

        this.drawCompaniesList()
    }

    drawCompaniesList() {
        Object.keys(companies).forEach(c => {
            const comp = companies[c]
            const btn = createDOMElement({
                name: 'button',
                class: 'descent-company',
                text: comp.name,
                attributes: [`data-ext:${c}`],
                events: [{
                    name: 'click',
                    callback: (e) => {
                        const {target} = e
                        const btns = document.getElementsByClassName('descent-company')

                        Array.prototype.forEach.call(btns, b => b.classList.remove('descent-company-selected'))
                        target.classList.add('descent-company-selected');
                        this.selectedCompany = target.dataset.ext
                        this.drawQuestsLists()
                    }
                }]
            });

            this.extensionsDiv.appendChild(btn);
        })
    }

    drawQuestsLists() {
        this.questsDiv.innerHTML = ''

        if (this.selectedCompany !== null) {
            const quests = companies[this.selectedCompany].quests
            const questCls = 'company-quest'
            const name = 'button'
            const events = [{
                name: 'click',
                callback: e => this.pdf.renderPDF(`../${e.target.dataset.path}`, 'pdf-page')
            }]

            this.questsDiv.appendChild(createDOMElement({
                name, class: questCls, text: 'Map',
                attributes: [`data-path:${companies[this.selectedCompany].map}`], events
            }))

            quests[this.currentAct].forEach(q => {
                    if (q.name && q.file) {
                        this.questsDiv.appendChild(createDOMElement({
                            name, class: questCls, text: q.name,
                            attributes: [`data-path:${q.file}`], events
                        }))
                    }
                }
            )
        }
    }
}