const isMonsterInSelectedTypes = (selectedTypes, monsterTypes) =>
    selectedTypes.some(item => monsterTypes.includes(item))

const isMonsterInSelectedConditions = (selectedConditions, monsterConditions) =>
    selectedConditions.some(item => monsterConditions.includes(item))

class MonstersSelector {
    constructor(monsterContentDiv) {
        this.selectedTypes = []
        this.selectedExtensions = []
        this.selectedConditions = []

        this.monsterContentDiv = monsterContentDiv
    }

    drawHelpers(parentElement) {
        parentElement.innerHTML = '';

        let clearAllBtn = createDOMElement({
            name: 'button',
            text: 'Clear all',
            events: [{
                name: 'click',
                callback: () => {
                    this.selectedTypes = [];
                    document.getElementsByClassName('monster-type-img')[0]
                        .forEach(type => type.classList.remove('monster-type-img-selected'));
                    this.drawAvailableMonsters();
                }
            }]
        });

        let showSelectedBtn = createDOMElement({
            name: 'button',
            text: 'Show selected',
            events: [{
                name: 'click',
                callback: () => {
                    let monsters = document.getElementsByClassName('monster-img');
                    for (let i = 0; i < monsters.length; i++) {
                        let m = monsters[i];
                        if (m.classList.contains('monster-img-selected')) {
                            m.classList.remove('monster-img-selected');
                        } else {
                            m.classList.add('hidden');
                        }
                    }
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
                callback: (e) => {
                    this.selectedConditions = [];
                    for (let i = 0; i < e.target.length; i++) {
                        if (e.target.options[i].selected) this.selectedConditions.push(e.target.options[i].value);
                    }
                    this.drawAvailableMonsters();
                }
            }]
        });

        conditionsSelect.innerHTML = allConditions.reduce((acc, option) => {
            acc += createDOMElement({
                name: 'option',
                class: 'condition-options',
                attributes: [`value:${option}`],
                text: option
            }).outerHTML;
            return acc;
        }, '');

        parentElement.appendChild(clearAllBtn);
        parentElement.appendChild(showSelectedBtn);
        parentElement.appendChild(conditionsSelect);
    };

    drawAvailableMonsters = (monsterContentDiv) => {
        let availableMonsters = []

        this.selectedExtensions.forEach(e =>
            availableMonsters = availableMonsters.concat(extensions[e].monsters))

        const monsters = this.filterMonsters(availableMonsters)

        this.monsterContentDiv.innerHTML = '';

        monsters.forEach(m => {
            const monsterEl = createDOMElement({
                name: 'img',
                class: 'monster-img',
                attributes: [`src:../${m.img}`],
                events: [{
                    name: 'click',
                    callback: function (e) {
                        e.target.classList.toggle('monster-img-selected');
                    }
                }]
            });

            this.monsterContentDiv.appendChild(monsterEl);
        });
    };

    filterMonsters = (availableMonsters) => {
        let finalMonsters = availableMonsters;
        if (this.selectedTypes.length !== 0) {
            finalMonsters = finalMonsters.filter(monster => isMonsterInSelectedTypes(this.selectedTypes, monster.types))
        }

        if (this.selectedConditions.length !== 0) {
            finalMonsters = finalMonsters.filter(monster => isMonsterInSelectedConditions(this.selectedConditions, monster.conditions));
        }

        return finalMonsters;
    };

    drawMonsterTypes = (monsterTypesDiv) => {
        const iconPath = '../images/icons/{0}.png',
            types = Object.keys(monster_types)

        types.forEach(t => {
            const type = monster_types[t];
            let img = createDOMElement({
                name: 'img',
                class: 'monster-type-img',
                attributes: [`src:${iconPath.replace('{0}', type)}`, `data-type:${type}`],
                events: [{
                    name: 'click',
                    callback: (e) => {
                        const currentType = this.dataset.type;
                        e.target.classList.toggle('monster-type-img-selected');

                        if (this.selectedTypes.includes(currentType)) {
                            const i = this.selectedTypes.indexOf(currentType);
                            this.selectedTypes.splice(i, 1);
                        } else {
                            this.selectedTypes.push(currentType);
                        }
                        this.drawAvailableMonsters();
                    }
                }]
            });

            monsterTypesDiv.appendChild(img);
        });
    };

    drawExtensionsList = (extensionsDiv) => {
        const extKeys = Object.keys(extensions)

        const allExtensionsButton = createDOMElement({
            name: 'button',
            class: 'descent-extension',
            id: 'descent-extensaion-all',
            text: 'All extensions',
            events: [{
                name: 'click',
                callback: () => {
                    const allButtons = document.getElementsByClassName('descent-extension');

                    if (this.selectedExtensions.length === extKeys.length) {
                        for (let i = 0; i < allButtons.length; i++) {
                            allButtons[i].classList.remove('descent-extension-selected');
                        }
                        this.selectedExtensions = [];
                    } else {

                        for (let i = 0; i < allButtons.length; i++) {
                            allButtons[i].classList.add('descent-extension-selected');
                        }
                        this.selectedExtensions = extKeys;
                    }
                    this.drawAvailableMonsters();
                }
            }]
        });

        extensionsDiv.appendChild(allExtensionsButton)

        extKeys.map(e => {
            const ext = extensions[e],
                btn = createDOMElement({
                    name: 'button',
                    class: 'descent-extension',
                    text: ext.name,
                    attributes: [`data-ext:${e}`],
                    events: [{
                        name: 'click',
                        callback: (e) => {
                            e.target.classList.toggle('descent-extension-selected');
                            if (this.selectedExtensions.includes(e)) {
                                const allExtensionButtons = document.getElementById('descent-extensaion-all');
                                allExtensionButtons.classList.remove('descent-extension-selected');
                                this.selectedExtensions.splice(this.selectedExtensions.indexOf(e), 1);
                            } else {
                                this.selectedExtensions.push(e.target.dataset.ext);
                                if (this.selectedExtensions.length === extKeys.length) {
                                    const allExtensionButtons = document.getElementById('descent-extensaion-all');
                                    allExtensionButtons.classList.add('descent-extension-selected');
                                }
                            }
                            this.drawAvailableMonsters();
                        }
                    }]
                });

            extensionsDiv.appendChild(btn);
        });
    };
}