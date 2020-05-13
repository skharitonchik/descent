const IMAGES_PATH = 'images/monsters';
const monster_types = Object.freeze({
    castle: 'castle',
    cave: 'cave',
    city: 'city',
    fire: 'fire',
    forest: 'forest',
    ice: 'ice',
    moon: 'moon',
    mount: 'mount',
    undead: 'undead',
    water: 'water'
});

const conditions = Object.freeze({
    immobilized: 'immobilized',
    poisoned: 'poisoned',
    stunned: 'stunned',
    terrified: 'terrified',
    doomed: 'doomed',
    diseased: 'diseased',
    cursed: 'cursed',

    bleeding: 'bleeding',
    burning: 'burning',
    weakened: 'weakened'
})

const monsters = {
    goblin_archer: {
        types: [monster_types.castle, monster_types.cave],
        img: `${IMAGES_PATH}/01.jpg`,
        conditions: []
    },
    cave_spiders: {
        types: [monster_types.forest, monster_types.cave],
        img: `${IMAGES_PATH}/02.jpg`,
        conditions: [conditions.poisoned]
    },
    zombie: {
        types: [monster_types.undead, monster_types.castle],
        img: `${IMAGES_PATH}/03.jpg`,
        conditions: [conditions.diseased, conditions.immobilized]
    },
    flesh_moulder: {
        types: [monster_types.undead, monster_types.city],
        img: `${IMAGES_PATH}/04.jpg`,
        conditions: []
    },
    barghest: {
        types: [monster_types.forest, monster_types.moon],
        img: `${IMAGES_PATH}/05.jpg`,
        conditions: []
    },
    ettin: {
        types: [monster_types.mount, monster_types.cave],
        img: `${IMAGES_PATH}/06.jpg`,
        conditions: []
    },
    merriod: {
        types: [monster_types.forest, monster_types.water],
        img: `${IMAGES_PATH}/07.jpg`,
        conditions: [conditions.immobilized]
    },
    elemental: {
        types: [monster_types.ice, monster_types.fire],
        img: `${IMAGES_PATH}/08.jpg`,
        conditions: [conditions.immobilized]
    },
    shadow_dragon: {
        types: [monster_types.moon, monster_types.cave],
        img: `${IMAGES_PATH}/09.jpg`,
        conditions: []
    },
    blood_ape: {
        types: [monster_types.fire, monster_types.cave],
        img: `${IMAGES_PATH}/46.jpg`,
        conditions: []
    },
    naga: {
        types: [monster_types.water, monster_types.cave],
        img: `${IMAGES_PATH}/27.jpg`,
        conditions: [conditions.poisoned, conditions.immobilized]
    },
    ferrox: {
        types: [monster_types.water, monster_types.cave],
        img: `${IMAGES_PATH}/38.jpg`,
        conditions: [conditions.diseased]
    },
    crow_hag: {
        types: [monster_types.moon, monster_types.city],
        img: `${IMAGES_PATH}/55.jpg`,
        conditions: [conditions.bleeding, conditions.burning, conditions.cursed,
            conditions.diseased, conditions.doomed, conditions.immobilized,
            conditions.poisoned, conditions.stunned, conditions.terrified, conditions.weakened]
    },
    skeleton_archer: {
        types: [monster_types.undead, monster_types.city],
        img: `${IMAGES_PATH}/25.jpg`,
        conditions: []
    },
    demon_lord: {
        types: [monster_types.fire, monster_types.undead],
        img: `${IMAGES_PATH}/31.jpg`,
        conditions: []
    },
    manticore: {
        types: [monster_types.forest, monster_types.moon],
        img: `${IMAGES_PATH}/26.jpg`,
        conditions: [conditions.poisoned]
    },
    ogre: {
        types: [monster_types.castle, monster_types.cave],
        img: `${IMAGES_PATH}/29.jpg`,
        conditions: []
    },
    troll: {
        types: [monster_types.mount, monster_types.cave],
        img: `${IMAGES_PATH}/44.jpg`,
        conditions: []
    },
    dark_minotaur: {
        types: [monster_types.city, monster_types.moon],
        img: `${IMAGES_PATH}/56.jpg`,
        conditions: [conditions.diseased]
    },
    ice_wyrm: {
        types: [monster_types.ice, monster_types.cave],
        img: `${IMAGES_PATH}/40.jpg`,
        conditions: []
    },
    shade: {
        types: [monster_types.undead, monster_types.ice],
        img: `${IMAGES_PATH}/42.jpg`,
        conditions: []
    },
    changeling: {
        types: [monster_types.city, monster_types.undead],
        img: `${IMAGES_PATH}/13.jpg`,
        conditions: [conditions.bleeding]
    },
    rat_swarm: {
        types: [monster_types.castle, monster_types.moon],
        img: `${IMAGES_PATH}/12.jpg`,
        conditions: [conditions.bleeding]
    },
    ironbound: {
        types: [monster_types.city, monster_types.castle],
        img: `${IMAGES_PATH}/14.jpg`,
        conditions: []
    },
    ynfernael_hulk: {
        types: [monster_types.undead, monster_types.fire],
        img: `${IMAGES_PATH}/15.jpg`,
        conditions: []
    },
    bandit: {
        types: [monster_types.forest, monster_types.castle],
        img: `${IMAGES_PATH}/22.jpg`,
        conditions: [conditions.poisoned, conditions.doomed]
    },
    wraith: {
        types: [monster_types.city, monster_types.undead],
        img: `${IMAGES_PATH}/23.jpg`,
        conditions: [conditions.doomed]
    },
    fire_imp: {
        types: [monster_types.fire, monster_types.undead],
        img: `${IMAGES_PATH}/10.jpg`,
        conditions: [conditions.burning]
    },
    hybrid_sentinel: {
        types: [monster_types.mount, monster_types.cave],
        img: `${IMAGES_PATH}/11.jpg`,
        conditions: []
    },
    dispossessed: {
        types: [monster_types.city, monster_types.undead],
        img: `${IMAGES_PATH}/54.jpg`,
        conditions: [conditions.terrified]
    },
    marrow_priest: {
        types: [monster_types.moon, monster_types.castle],
        img: `${IMAGES_PATH}/52.jpg`,
        conditions: []
    },
    shambling_colossus: {
        types: [monster_types.forest, monster_types.undead],
        img: `${IMAGES_PATH}/53.jpg`,
        conditions: [conditions.terrified]
    },
    arachyura: {
        types: [monster_types.forest, monster_types.undead],
        img: `${IMAGES_PATH}/19.jpg`,
        conditions: [conditions.immobilized, conditions.doomed]
    },
    carrion_drake: {
        types: [monster_types.water, monster_types.moon],
        img: `${IMAGES_PATH}/18.jpg`,
        conditions: [conditions.poisoned, conditions.diseased]
    },
    goblin_witcher: {
        types: [monster_types.castle, monster_types.undead],
        img: `${IMAGES_PATH}/16.jpg`,
        conditions: [conditions.doomed]
    },
    volucrix_reaver: {
        types: [monster_types.castle, monster_types.mount],
        img: `${IMAGES_PATH}/17.jpg`,
        conditions: []
    },
    bone_horror: {
        types: [monster_types.cave, monster_types.undead],
        img: `${IMAGES_PATH}/17.jpg`,
        conditions: []
    },
    bone_horror: {
        types: [monster_types.cave, monster_types.undead],
        img: `${IMAGES_PATH}/51.jpg`,
        conditions: []
    },
    broodwalker: {
        types: [monster_types.moon, monster_types.castle],
        img: `${IMAGES_PATH}/50.jpg`,
        conditions: [conditions.diseased, conditions.immobilized, conditions.terrified]
    },
    reanimate: {
        types: [monster_types.city, monster_types.undead],
        img: `${IMAGES_PATH}/49.jpg`,
        conditions: []
    },
    harpy: {
        types: [monster_types.forest, monster_types.mount],
        img: `${IMAGES_PATH}/21.jpg`,
        conditions: []
    },
    plague_worm: {
        types: [monster_types.water, monster_types.cave],
        img: `${IMAGES_PATH}/20.jpg`,
        conditions: [conditions.diseased, conditions.weakened]
    },
    sorcerer: {
        types: [monster_types.city, monster_types.castle],
        img: `${IMAGES_PATH}/24.jpg`,
        conditions: []
    },
    razorwing: {
        types: [monster_types.forest, monster_types.cave],
        img: `${IMAGES_PATH}/28.jpg`,
        conditions: [conditions.stunned]
    },
    hellhound: {
        types: [monster_types.fire, monster_types.undead],
        img: `${IMAGES_PATH}/30.jpg`,
        conditions: []
    },
    crypt_dragon: {
        types: [monster_types.moon, monster_types.undead],
        img: `${IMAGES_PATH}/32.jpg`,
        conditions: [conditions.immobilized]
    },
    giant: {
        types: [monster_types.mount, monster_types.forest],
        img: `${IMAGES_PATH}/33.jpg`,
        conditions: [conditions.stunned]
    },
    beastman: {
        types: [monster_types.mount, monster_types.forest],
        img: `${IMAGES_PATH}/34.jpg`,
        conditions: [conditions.stunned]
    },
    bane_spider: {
        types: [monster_types.moon, monster_types.cave],
        img: `${IMAGES_PATH}/35.jpg`,
        conditions: [conditions.immobilized, conditions.poisoned]
    },
    golem: {
        types: [monster_types.mount, monster_types.castle],
        img: `${IMAGES_PATH}/36.jpg`,
        conditions: []
    },
    cobold: {
        types: [monster_types.castle, monster_types.cave],
        img: `${IMAGES_PATH}/37.jpg`,
        conditions: []
    },
    lava_beetle: {
        types: [monster_types.fire, monster_types.cave],
        img: `${IMAGES_PATH}/39.jpg`,
        conditions: []
    },
    medusa: {
        types: [monster_types.undead, monster_types.castle],
        img: `${IMAGES_PATH}/41.jpg`,
        conditions: [conditions.poisoned, conditions.immobilized, conditions.stunned]
    },
    vendigo: {
        types: [monster_types.ice, monster_types.cave],
        img: `${IMAGES_PATH}/43.jpg`,
        conditions: []
    },
    deep_elf: {
        types: [monster_types.moon, monster_types.cave],
        img: `${IMAGES_PATH}/45.jpg`,
        conditions: []
    },
    dark_priest: {
        types: [monster_types.undead, monster_types.city],
        img: `${IMAGES_PATH}/47.jpg`,
        conditions: []
    },
    chaos_beast: {
        types: [monster_types.moon, monster_types.undead],
        img: `${IMAGES_PATH}/48.jpg`,
        conditions: []
    },
};
const PDF_PATH = 'scripts/data/companies'

const companies = {
    base: {
        name: 'Base',
        map: `${PDF_PATH}/base/map.pdf`,
        quests: {
            act1: [{
                name: 'Первая кровь',
                file: `${PDF_PATH}/base/act_I_first_blod.pdf`
            }, {
                name: 'Толстый гоблин',
                file: `${PDF_PATH}/base/act_I_fat_goblin.pdf`
            }, {
                name: 'Бал маскарад',
                file: `${PDF_PATH}/base/act_I_bal.pdf`
            }, {
                name: 'Замок Дерион',
                file: `${PDF_PATH}/base/act_I_derion.pdf`
            }, {
                name: 'Смерть на Крыльях',
                file: `${PDF_PATH}/base/act_I_smert_na_kryliah.pdf`
            }, {
                name: 'Кардинал в беде',
                file: `${PDF_PATH}/base/act_I_cardinal.pdf`
            }, {
                name: 'Темница теней (Интерлюдия Герои)',
                file: `${PDF_PATH}/base/interludia_1.pdf`
            }, {
                name: 'Маски сброшены (Интерлюдия Властелин)',
                file: `${PDF_PATH}/base/interludia_2.pdf`
            }],
            act2: [{
                name: 'Буйство стихий',
                file: `${PDF_PATH}/base/act_II_buistvo.pdf`
            }, {
                name: 'Ритуал теней',
                file: `${PDF_PATH}/base/act_II_ritual.pdf`
            }, {
                name: 'Морозный штиль',
                file: `${PDF_PATH}/base/act_II_moroz.pdf`
            }, {
                name: 'Кровь героев',
                file: `${PDF_PATH}/base/act_II_krov.pdf`
            }, {
                name: 'Оскверненная гробница',
                file: `${PDF_PATH}/base/act_II_grob.pdf`
            }, {
                name: 'Клинок рассвета',
                file: `${PDF_PATH}/base/act_II_klinok.pdf`
            }, {
                name: 'Клад монстра',
                file: `${PDF_PATH}/base/act_II_klad.pdf`
            }, {
                name: 'Идолы близнецы',
                file: `${PDF_PATH}/base/act_II_idoli.pdf`
            }, {
                name: 'Взлет Дракона',
                file: `${PDF_PATH}/base/act_II_vzlet.pdf`
            }, {
                name: 'Вираж дракона',
                file: `${PDF_PATH}/base/act_II_viraz.pdf`
            }, {
                name: 'Человек который хотел стать королем (Властелин)',
                file: `${PDF_PATH}/base/act_II_final1.pdf`
            }, {
                name: 'Гриворн на воле (Герои)',
                file: `${PDF_PATH}/base/act_II_final2.pdf`
            }]
        }
    },
    raven: {
        name: 'Поместье воронов',
        map: `${PDF_PATH}/raven/raven_map.pdf`,
        quests: {
            act1: [{
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }],
            act2: [{
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }, {
                name: '',
                file: `${PDF_PATH}/base/`
            }]
        }
    }
}

const extensions = {
    base: {
        name: 'Base',
        monsters: [monsters.barghest,
            monsters.cave_spiders,
            monsters.elemental,
            monsters.ettin,
            monsters.flesh_moulder,
            monsters.goblin_archer,
            monsters.merriod,
            monsters.shadow_dragon,
            monsters.zombie]
    },
    stewards_of_the_secret: {
        name: 'Stewards of the Secret',
        monsters: [monsters.naga, monsters.blood_ape, monsters.ferrox]
    },
    treaty_of_champions: {
        name: 'Treaty of Champions',
        monsters: [monsters.demon_lord, monsters.skeleton_archer, monsters.crow_hag]
    },
    vision_of_dawn: {
        name: 'Visions of Dawn',
        monsters: [monsters.troll, monsters.manticore, monsters.ogre]
    },
    shards_of_everdark: {
        name: 'Shards of Everdark',
        monsters: [monsters.ice_wyrm, monsters.shade, monsters.dark_minotaur]
    },
    shadow_of_nerekhall: {
        name: 'Shadow of Nerekhall',
        monsters: [monsters.changeling, monsters.ironbound, monsters.ynfernael_hulk, monsters.rat_swarm]
    },
    manor_of_ravens: {
        name: 'Manor of Ravens',
        monsters: [monsters.bandit, monsters.wraith]
    },
    lair_of_the_wyrm: {
        name: 'Lair of the Wyrm',
        monsters: [monsters.fire_imp, monsters.hybrid_sentinel]
    },
    chains_that_rust: {
        name: 'Chains that rust',
        monsters: [monsters.dispossessed, monsters.marrow_priest, monsters.shambling_colossus]
    },
    labyrinth_of_ruin: {
        name: 'Labyrinth of Ruin',
        monsters: [monsters.arachyura, monsters.carrion_drake, monsters.goblin_witcher, monsters.volucrix_reaver]
    },
    mists_of_bilhall: {
        name: 'Mists of Bilhall',
        monsters: [monsters.bone_horror, monsters.broodwalker, monsters.reanimate]
    },
    trollfense: {
        name: 'Trollfense',
        monsters: [monsters.harpy, monsters.plague_worm]
    },
    conversion_kit: {
        name: 'Conversion kit',
        monsters: [monsters.sorcerer,
            monsters.razorwing,
            monsters.hellhound,
            monsters.crypt_dragon,
            monsters.giant,
            monsters.beastman,
            monsters.bane_spider,
            monsters.golem,
            monsters.cobold,
            monsters.lava_beetle,
            monsters.medusa,
            monsters.vendigo,
            monsters.deep_elf,
            monsters.dark_priest,
            monsters.chaos_beast
        ]
    }
};