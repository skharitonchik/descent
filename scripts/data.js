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
    bleeding: 'bleeding',
    burning: 'burning',
    cursed: 'cursed',
    diseased: 'diseased',
    doomed: 'doomed',
    immobilized: 'immobilized',
    poisoned: 'poisoned',
    stunned: 'stunned',
    terrified: 'terrified',
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
    }
};

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
    }
};