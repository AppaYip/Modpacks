ServerEvents.recipes(event => {
    event.remove({output: 'zenith:zenith' })

    event.remove({output: 'minecraft:netherite_ingot' })
    event.remove({output: 'terramity:iridium' })

    event.remove({output: 'minecraft:stone_sword' })
    event.remove({output: 'minecraft:stone_axe' })
    event.remove({output: 'minecraft:stone_pickaxe' })
    event.remove({output: 'minecraft:stone_shovel' })
    event.remove({output: 'minecraft:stone_hoe' })

    event.remove({output: 'ancient_elements:infernal_helmet' })
    event.remove({output: 'ancient_elements:infernal_chestplate' })
    event.remove({output: 'ancient_elements:infernal_leggings' })
    event.remove({output: 'ancient_elements:infernal_boots' })
    event.remove({output: 'traveloptics:wand_of_final_light' })
    event.remove({output: 'brutality:event_horizon' })
    event.remove({output: 'celestisynth:poltergeist' })
    event.remove({output: 'traveloptics:voidstrike_reaper' })
    event.remove({output: 'hazennstuff:the_devourer' })
    event.remove({output: 'hazennstuff:insania_aeternus' })
    event.remove({output: 'cataclysm:meat_shredder' })
    event.remove({output: 'brutality:deathsaw' })
    event.remove({output: 'armor_of_remnants:sovereign_ingot' })
    event.remove({output: 'legendary_monsters:eye_of_sandstorm' })
    event.shaped(
    Item.of('iter_rpg:empty_rune', 4),
    [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'iter_rpg:gobsteel_scrap',
        B: 'iter_rpg:the_rock'
    }
)
event.shaped(
    Item.of('minecraft:enchanted_golden_apple'),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        B: 'minecraft:apple',
        A: 'minecraft:gold_block'
    }
)
event.shaped(
    Item.of('armor_of_remnants:sovereign_ingot', 4),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: 'composite_material:abyss_fang',
        C: 'cataclysm:essence_of_the_storm',
        B: 'secretsofthevoid:shimmersteel_ingot',
        D: 'valoria:aquarius_ingot'
    }
)
event.shapeless(
    Item.of('dungeons_and_combat:blessed_dust', 2),
    [
        'terramity:fairy_dust',
        'minecraft:sand',
        'alltheores:gold_dust'
    ]
)
event.shaped(
    Item.of('legendary_monsters:eye_of_sandstorm'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        B: 'legendary_monsters:ancient_sandstone_shard',
        A: 'dungeons_and_combat:blessed_dust',
        D: 'minecraft:ender_eye',
        C: 'valoria:dunestone_brick'
    }
)
event.shaped(
    Item.of('cataclysm:meat_shredder'),
    [
        'ABC',
        'BDB',
        'EBA'
    ],
    {
        D: 'kubejs:exomechanical_core',
        B: 'kubejs:exotic_plating',
        E: 'cataclysm:witherite_ingot',
        C: 'brutality:mechanical_aorta',
        A: 'iter_rpg:cog_heart'
    }
)
event.shaped(
    Item.of('brutality:deathsaw'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        D: 'terramity:daemonium_block',
        A: 'create:precision_mechanism',
        C: 'minecraft:bedrock',
        B: 'kubejs:nebulae_alloy',
        E: 'legendary_monsters:dinosaur_bone_club',
        F: 'cataclysm:meat_shredder'
    }
)
event.shaped(
    Item.of('traveloptics:wand_of_final_light'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        C: 'endrem:wither_eye',
        E: 'kubejs:anti_essence',
        B: 'traveloptics:pocket_black_hole',
        A: 'terramity:black_matter',
        F: 'brutality:dull_knife',
        D: 'traveloptics:withered_excrucis'
    }
)
event.shaped(
    Item.of('hazennstuff:insania_aeternus'),
    [
        'ABC',
        'DCB',
        'EDA'
    ],
    {
        C: 'deeperdarker:sculk_bone',
        A: 'terramity:lost_soul',
        B: 'terramity:dimlite_ingot',
        D: 'composite_material:warden_hand',
        E: 'terramity:anti_gravity_belt'
    }
)
event.shaped(
    Item.of('hazennstuff:the_devourer'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        B: 'lethality:pixie_alloy',
        D: 'terramity:dimlite_block',
        E: 'composite_material:dungeon_sword',
        C: 'ancient_elements:galactrium_sword',
        A: 'brutality:quantite_ingot',
        F: 'hazennstuff:insania_aeternus'
    }
)
event.shaped(
    Item.of('brutality:event_horizon'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        D: 'celestisynth:solar_crystal',
        A: 'celestisynth:lunar_scrap',
        C: 'terramity:void_alloy_block',
        E: 'brutality:pocket_black_hole',
        B: 'lethality:annihilation_alloy',
        F: 'traveloptics:wand_of_final_light'
    }
)
event.shaped(
    Item.of('traveloptics:pyro_spellweave_ingot', 2),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        C: 'irons_spellbooks:arcane_ingot',
        B: 'cataclysm:lava_power_cell',
        A: 'irons_spellbooks:cinder_essence'
    }
)
event.shaped(
    Item.of('traveloptics:verdant_spellweave_ingot', 2),
    [
        'ABA',
        'ACA',
        'ABA'
    ],
    {
        C: 'irons_spellbooks:arcane_ingot',
        A: 'elementus:movcadia_essence',
        B: 'cataclysm:amethyst_crab_shell'
    }
)
event.shaped(
    Item.of('traveloptics:abyssal_spellweave_ingot'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        C: 'irons_spellbooks:arcane_ingot',
        A: 'cataclysm:crystallized_coral',
        B: 'irons_spellbooks:arcane_essence'
    }
)
event.shaped(
    Item.of('brutality:pocket_black_hole'),
    [
        'ABC',
        'DEF',
        'GHI'
    ],
    {
        G: 'smc:frostium_ingot',
        D: 'kubejs:anti_essence',
        E: 'terramity:cracked_microcosm',
        C: 'irons_spellbooks:pyrium_ingot',
        A: 'smc:perkin_ingot',
        B: 'terramity:profanum',
        H: 'kubejs:polarum',
        F: 'terramity:empty_essence',
        I: 'irons_spellbooks:mithril_ingot'
    }
)
event.shaped(
    Item.of('kubejs:anti_essence'),
    [
        'ABA',
        'ACA',
        'ADA'
    ],
    {
        D: 'kubejs:wither_soul',
        A: 'terramity:decayed_bedrock_dust',
        B: 'terramity:black_matter',
        C: 'terramity:empty_essence'
    }
)

event.shapeless(
    Item.of('mmt:raw_zirconium', 3),
    [
        'hazennstuff:crude_metal',
        'minecraft:charcoal',
        'create:raw_zinc',
        'iter_rpg:gobsteel_scrap'
    ]
)
event.smelting('mmt:zirconium_ingot', 'mmt:raw_zirconium').xp(0.35)
event.custom({
    type: "create:pressing",
    "ingredients": [
        {
            item: "mmt:zirconium_ingot", amount: 1
        },
    ],
    results: [
        {
            item: "mmt:zirconium_plate", amount: 1
        }
    ]
})
event.custom({
  "type": "celestisynth:starlit_factory",
  "core_material": {
    "item": "celestisynth:eyebomination"
  },
  "extra_core_material": {
    "item": "celestisynth:supernal_netherite_ingot"
  },
  "forging_time": 700,
  "result": "celestisynth:poltergeist",
  "supporting_core_material": {
    "item": "celestisynth:eyebomination"
  },
  "supporting_material_bottom": {
    "item": "composite_material:dungeon_axe"
  },
  "supporting_material_middle": {
    "item": "legendary_monsters:enderitium_ingot"
  },
  "supporting_material_top": {
    "item": "legendary_monsters:enderitium_ingot"
  }})
event.shapeless(
    Item.of('composite_material:echoium_ingot', 3),
    [
        'terramity:antiprism',
        'terramity:dimlite_ingot',
        'composite_material:warden_hand',
        'minecraft:diamond'
    ]
)
event.shaped(
    Item.of('traveloptics:voidstrike_reaper'),
    [
        'ABC',
        'DEB',
        'FGH'
    ],
    {
        C: 'cataclysm:void_core',
        G: 'voidscape:tendril',
        B: 'lethality:pixie_alloy',
        D: 'legendary_monsters:corrupted_soul',
        F: 'celestisynth:poltergeist',
        A: 'valoria:void_core',
        H: 'minecraft:dragon_egg',
        E: 'traveloptics:stellothorn'
    }
)
event.shaped(
    Item.of('mmt:abiding_alloy_plate'),
    [
        'ABC',
        'DEF',
        ' G '
    ],
    {
        B: 'ancient_elements:ruined_remnant',
        D: 'kubejs:essence_of_rapture',
        G: 'create:sturdy_sheet',
        F: 'kubejs:essence_of_blizzard',
        C: 'kubejs:essence_of_earth',
        A: 'kubejs:essence_of_helio',
        E: 'ancient_elements:collapse_prism'
    }
)
event.custom({
    type: "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
        {
            item: "minecraft:gold_ingot", amount: "2"
        },
        {
            item: "minecraft:netherite_scrap", amount: "3"
        },
        {
            item: "netherexp:fossil_fuel", amount: 1
        },
    ],
    results: [
        {
            item: "minecraft:netherite_ingot", amount: 1
        }
    ]
})
event.custom({
    type: "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
        {
            item: "terramity:fairy_dust", amount: 1
        },
        {
            item: "terramity:iridium_chunk", amount: "2"
        },
        {
            item: "terramity:iridescent_shard", amount: 1
        },
    ],
    results: [
        {
            item: "terramity:iridium", amount: 1
        }
    ]
})

event.smithing(
  'ancient_elements:infernal_helmet',                     // arg 1: output
  'ancient_elements:infernal_smithing_template', // arg 2: the smithing template
  'traveloptics:pyro_spellweave_ingot',                          // arg 3: the item to be upgraded
  'valoria:black_gold_helmet'                            // arg 4: the upgrade item
)
event.smithing(
  'ancient_elements:infernal_chestplate',                     // arg 1: output
  'ancient_elements:infernal_smithing_template', // arg 2: the smithing template
  'traveloptics:pyro_spellweave_ingot',                          // arg 3: the item to be upgraded
  'valoria:black_gold_chestplate'                            // arg 4: the upgrade item
)
event.smithing(
  'ancient_elements:infernal_leggings',                     // arg 1: output
  'ancient_elements:infernal_smithing_template', // arg 2: the smithing template
  'traveloptics:pyro_spellweave_ingot',                          // arg 3: the item to be upgraded
  'valoria:black_gold_leggings'                            // arg 4: the upgrade item
)
event.smithing(
  'ancient_elements:infernal_boots',                     // arg 1: output
  'ancient_elements:infernal_smithing_template', // arg 2: the smithing template
  'traveloptics:pyro_spellweave_ingot',                          // arg 3: the item to be upgraded
  'valoria:black_gold_boots'                            // arg 4: the upgrade item
)
})
