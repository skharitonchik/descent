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

const monsters = {
    goblin_archer: {
        types: [monster_types.castle, monster_types.cave],
        img: `${IMAGES_PATH}/01.jpg`
    },
    cave_spiders: {
        types: [monster_types.forest, monster_types.cave],
        img: `${IMAGES_PATH}/02.jpg`
    },
    zombie: {
        types: [monster_types.undead, monster_types.castle],
        img: `${IMAGES_PATH}/03.jpg`
    },
    flesh_moulder: {
        types: [monster_types.undead, monster_types.city],
        img: `${IMAGES_PATH}/04.jpg`
    },
    barghest: {
        types: [monster_types.forest, monster_types.moon],
        img: `${IMAGES_PATH}/05.jpg`
    },
    ettin: {
        types: [monster_types.mount, monster_types.cave],
        img: `${IMAGES_PATH}/06.jpg`
    },
    merriod: {
        types: [monster_types.forest, monster_types.water],
        img: `${IMAGES_PATH}/07.jpg`
    },
    elemental: {
        types: [monster_types.ice, monster_types.fire],
        img: `${IMAGES_PATH}/08.jpg`
    },
    shadow_dragon: {
        types: [monster_types.moon, monster_types.cave],
        img: `${IMAGES_PATH}/09.jpg`
    },
    blood_ape: {
        types: [monster_types.fire, monster_types.cave],
        img: `${IMAGES_PATH}/46.jpg`
    },
    naga: {
        types: [monster_types.water, monster_types.cave],
        img: `${IMAGES_PATH}/27.jpg`
    },
    ferrox: {
        types: [monster_types.water, monster_types.cave],
        img: `${IMAGES_PATH}/38.jpg`
    },
    crow_hag: {
        types: [monster_types.moon, monster_types.city],
        img: `${IMAGES_PATH}/55.jpg`
    },
    skeleton_archer: {
        types: [monster_types.undead, monster_types.city],
        img: `${IMAGES_PATH}/25.jpg`
    },
    demon_lord: {
        types: [monster_types.fire, monster_types.undead],
        img: `${IMAGES_PATH}/31.jpg`
    },
    manticore: {
        types: [monster_types.forest, monster_types.moon],
        img: `${IMAGES_PATH}/26.jpg`
    },
    ogre: {
        types: [monster_types.castle, monster_types.cave],
        img: `${IMAGES_PATH}/29.jpg`
    },
    troll: {
        types: [monster_types.mount, monster_types.cave],
        img: `${IMAGES_PATH}/44.jpg`
    },
    dark_minotaur: {
        types: [monster_types.city, monster_types.moon],
        img: `${IMAGES_PATH}/56.jpg`
    },
    ice_wyrm: {
        types: [monster_types.ice, monster_types.cave],
        img: `${IMAGES_PATH}/40.jpg`
    },
    shade: {
        types: [monster_types.undead, monster_types.ice],
        img: `${IMAGES_PATH}/42.jpg`
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
    }
};