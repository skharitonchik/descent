let MonstersSelector = (function () {
    let selectedTypes = [];
    let selectedExtensions = [];

    const filterMonsters = (availableMonsters) => {
        if (selectedTypes.length === 0) {
            return availableMonsters;
        }
        return availableMonsters.filter(m => selectedTypes.includes(m.types[0]) || selectedTypes.includes(m.types[1]));
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

        asideDiv.appendChild(clearAllBtn);
        asideDiv.appendChild(showSelectedBtn);
    };
    const drawMonsterTypes = () => {
        const iconPath = 'images/icons/{0}.png',
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
                attributes: [`src:${m.img}`],
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
                                selectedExtensions.splice(selectedExtensions.indexOf(e), 1);
                            } else {
                                selectedExtensions.push(this.dataset.ext);
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