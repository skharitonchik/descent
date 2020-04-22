const isMonsterInSelectedTypes = (selectedTypes, monsterTypes) => {
    return selectedTypes.some(item => monsterTypes.includes(item));
}

const isMonsterInSelectedConditions = (selectedConditions, monsterConditions) => {
    return selectedConditions.some(item => monsterConditions.includes(item));
}

let MonstersSelector = (function () {
    let selectedTypes = [];
    let selectedExtensions = [];
    let selectedConditions = [];

    const filterMonsters = (availableMonsters) => {
        let finalMonsters = availableMonsters;
        if (selectedTypes.length !== 0) {
            finalMonsters = finalMonsters.filter(monster => isMonsterInSelectedTypes(selectedTypes, monster.types))
        }

        if (selectedConditions.length !== 0) {
            finalMonsters = finalMonsters.filter(monster => isMonsterInSelectedConditions(selectedConditions, monster.conditions));
        }

        return finalMonsters;
    };
    const drawHelpers = () => {
        let asideDiv = document.getElementById('monstersSelectors');

        asideDiv.innerHTML = '';

        let clearAllBtn = createDOMElement({
            name: 'button',
            text: 'Clear all',
            events: [{
                name: 'click',
                callback: function () {
                    selectedTypes = [];
                    document.querySelectorAll('.monster-type-img')
                        .forEach(type => type.classList.remove('monster-type-img-selected'));
                    drawAvailableMonsters();
                }
            }]
        });

        let showSelectedBtn = createDOMElement({
            name: 'button',
            text: 'Show selected',
            events: [{
                name: 'click',
                callback: function () {
                    let monsters = document.querySelectorAll('.monster-img');
                    monsters.forEach(m => {
                        if (m.classList.contains('monster-img-selected')) {
                            m.classList.remove('monster-img-selected');
                        } else {
                            m.classList.add('hidden');
                        }
                    });
                }
            }]
        });

        const allConditions = Object.keys(conditions);

        let conditionsSelect = createDOMElement({
            name: 'select',
            class: 'conditions-selector',
            attributes: ['multiple', 'name:conditions'],
            events: [{
                name: 'click',
                callback: function () {           
                    selectedConditions = [];         
                    for (let i = 0; i < this.length; i++) {
                        if (this.options[i].selected) selectedConditions.push(this.options[i].value);
                    }
                    drawAvailableMonsters();
                }
            }]
        });

        let conditionsOptions = allConditions.reduce((acc, option) => {
            acc += createDOMElement({
                name: 'option',
                class: 'condition-options',
                attributes: [`value:${option}`],
                text: option
            }).outerHTML;
            return acc;
        }, '');
        conditionsSelect.innerHTML = conditionsOptions;

        asideDiv.appendChild(clearAllBtn);
        asideDiv.appendChild(showSelectedBtn);
        asideDiv.appendChild(conditionsSelect);
    };
    const drawMonsterTypes = () => {
        const iconPath = '../images/icons/{0}.png',
            types = Object.keys(monster_types),
            monsterTypesDiv = document.getElementById('monsterTypes');

        types.forEach(t => {
            const type = monster_types[t];
            let img = createDOMElement({
                name: 'img',
                class: 'monster-type-img',
                attributes: [`src:${iconPath.replace('{0}', type)}`, `data-type:${type}`],
                events: [{
                    name: 'click',
                    callback: function () {
                        const currentType = this.dataset.type;
                        this.classList.toggle('monster-type-img-selected');

                        if (selectedTypes.includes(currentType)) {
                            const i = selectedTypes.indexOf(currentType);
                            selectedTypes.splice(i, 1);
                        } else {
                            selectedTypes.push(currentType);
                        }
                        drawAvailableMonsters();
                    }
                }]
            });

            monsterTypesDiv.appendChild(img);
        });
    };

    const drawAvailableMonsters = () => {
        let availableMonsters = [];
        selectedExtensions.forEach(e =>
            availableMonsters = availableMonsters.concat(extensions[e].monsters));
        const monsters = filterMonsters(availableMonsters),
            monsterContentDiv = document.getElementById('monsterContent');
        monsterContentDiv.innerHTML = '';
        monsters.forEach(m => {
            const monsterEl = createDOMElement({
                name: 'img',
                class: 'monster-img',
                attributes: [`src:../${m.img}`],
                events: [{
                    name: 'click',
                    callback: function () {
                        this.classList.toggle('monster-img-selected');
                    }
                }]
            });

            monsterContentDiv.appendChild(monsterEl);
        });
    };
    const drawExtensionsList = () => {
        const extKeys = Object.keys(extensions),
            extensionsDiv = document.getElementById('extensions');

        const allExtensionsButton = createDOMElement({
            name: 'button',
            class: 'descent-extension',
            id: 'descent-extensaion-all',
            text: 'All extensions',
            events: [{
                name: 'click',
                callback: function () {
                    const allButtons = document.getElementsByClassName('descent-extension');

                    if (selectedExtensions.length === extKeys.length) {
                        for (let i = 0; i < allButtons.length; i++) {
                            allButtons[i].classList.remove('descent-extension-selected');
                        }
                        selectedExtensions = [];
                    } else {
                        
                        for (let i = 0; i < allButtons.length; i++) {
                            allButtons[i].classList.add('descent-extension-selected');
                        }
                        selectedExtensions = extKeys;
                    }
                    drawAvailableMonsters();
                }
            }]
        });

        extensionsDiv.appendChild(allExtensionsButton);
        extKeys.map(e => {
            const ext = extensions[e],
                btn = createDOMElement({
                    name: 'button',
                    class: 'descent-extension',
                    text: ext.name,
                    attributes: [`data-ext:${e}`],
                    events: [{
                        name: 'click',
                        callback: function () {
                            this.classList.toggle('descent-extension-selected');
                            if (selectedExtensions.includes(e)) {
                                const allExtensionButtons = document.getElementById('descent-extensaion-all');
                                allExtensionButtons.classList.remove('descent-extension-selected');
                                selectedExtensions.splice(selectedExtensions.indexOf(e), 1);
                            } else {
                                selectedExtensions.push(this.dataset.ext);
                                if (selectedExtensions.length === extKeys.length) {
                                    const allExtensionButtons = document.getElementById('descent-extensaion-all');
                                    allExtensionButtons.classList.add('descent-extension-selected');
                                }
                            }
                            drawAvailableMonsters();
                        }
                    }]
                });

            extensionsDiv.appendChild(btn);
        });
    };

    return {
        drawAll: () => {
            drawMonsterTypes();
            drawExtensionsList();
            drawHelpers();
        }
    };
})();