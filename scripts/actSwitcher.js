class ActSwitcher {
    constructor(actsDiv, callback) {
        const act1 = createDOMElement({
            name: 'button',
            class: 'act-btn act-I-btn act-active',
            events: [{
                name: 'click',
                callback: () => {
                    act1.classList.add('act-active')
                    act2.classList.remove('act-active')
                    callback('act1')
                }
            }]
        })
        const act2 = createDOMElement({
            name: 'button',
            class: 'act-btn act-II-btn',
            events: [{
                name: 'click',
                callback: () => {
                    act2.classList.add('act-active')
                    act1.classList.remove('act-active')
                    callback('act2')
                }
            }]
        })

        actsDiv.appendChild(act1)
        actsDiv.appendChild(act2)
    }
}