
ServerEvents.recipes(event => {
    event.shaped(
            Item.of('astral_calamity_extras:grotesque_ingot'),
            [
                    ' A ',
                    'BCB',
                    ' A '
            ],
            {
                    B: 'terramity:accursed_soul',
                    A: 'born_in_chaos_v1:smoldering_infernal_ember',
                    C: 'blazegear:brimsteel_ingot'
            }
    )
    event.shapeless(
            Item.of('cataclysm:witherite_ingot'),
            [
                    'cataclysm_spellbooks:mechanical_scrap',
                    'cataclysm_spellbooks:mechanical_scrap'
            ]
    )
    event.shapeless(
            Item.of('minecraft:phantom_membrane'),
            [
                    'minecraft:feather',
                    'irons_spellbooks:blood_vial'
            ]
    )
    event.shapeless(
            Item.of('minecraft:rotten_flesh'),
            [
                    'irons_spellbooks:blood_vial',
                    'minecraft:beef'
            ]
    )
    event.shapeless(
            Item.of('minecraft:bone', 5),
            [
                    'luminous_nether:ashes',
                    'irons_spellbooks:blood_vial'
            ]
    )
event.shapeless(
    Item.of('born_in_chaos_v1:stop_hammer'),
    [
        'lethality:charged_redstone_piece',
        'kubejs:quantum_alloy',
        'born_in_chaos_v1:ethereal_spirit'
    ]
)

event.custom({
    type: "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
        {
            item: "ancient_elements:meteorite_ingot", amount: 1
        },
        {
            item: "irons_spellbooks:mithril_scrap", amount: 1
        },
        {
            item: "irons_spellbooks:arcane_essence", amount: 2
        },
        {
            item: "minecraft:diamond", amount: 1
        },
    ],
    results: [
        {
            item: "mmt:mythril_ingot", amount: 1
        }
    ]
})
event.custom({
    type: "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
        {
            item: "ancient_elements:aurora_crystal", amount: 1
        },
        {
            item: "iter_rpg:ether_dust", amount: 1
        },
        {
            item: "celestisynth:solar_crystal", amount: 2
        },
        {
            item: "minecraft:gold_ingot", amount: 1
        },
    ],
    results: [
        {
            item: "mmt:starinium_ingot", amount: 1
        }
    ]
})
event.custom({
    type: "create:mixing",
    "heatRequirement": "superheated",
    "ingredients": [
        {
            item: "kubejs:frigid_ingot", amount: 1
        },
        {
            item: "composite_material:obsidian_steel_ingot", amount: 1
        },
        {
            item: "secretsofthevoid:scoria_ingot", amount: 1
        },
        {
            item: "create:cinder_flour", amount: 1
        },
        {
            item: "irons_spellbooks:cinder_essence", amount: 2
        },
    ],
    results: [
        {
            item: "astral_calamity_extras:hydrothermal_ingot", amount: 2
        }
    ]
})
event.custom({
    type: "create:mixing",
    "heatRequirement": "superheated",
    "ingredients": [
        {
            item: "lethality:nihilite", amount: 1
        },
        {
            item: "astral_calamity_extras:hydrothermal_ingot", amount: 1
        },
        {
            item: "eidolon:bloodlust_incense", amount: 1
        },
        {
            item: "terramity:raw_profanum", amount: 1
        },
        {
            item: "cataclysm:dying_ember", amount: 2
        },
    ],
    results: [
        {
            item: "mmt:calamatium_ingot", amount: 1
        }
    ]
})
event.shapeless(
    Item.of('mmt:acril_ingot'),
    [
        'terramity:circuit_board',
        'terramity:circuit_board',
        'terramity:circuit_board',
        'terramity:circuit_board',
        'smc:perkin_ingot',
        'caverns_and_chasms:silver_ingot',
        'caverns_and_chasms:silver_ingot',
        'caverns_and_chasms:silver_ingot',
        'caverns_and_chasms:silver_ingot'
    ]
)
    event.shaped(
            Item.of('deeperdarker:warden_carapace'),
            [
                    ' A ',
                    'ABA',
                    ' A '
            ],
            {
                    A: 'deeperdarker:sculk_bone',
                    B: 'minecraft:echo_shard'
            }
    )
    event.shaped(
            Item.of('terramity:warden_soul'),
            [
                    ' A ',
                    ' B ',
                    ' A '
            ],
            {
                    A: 'terramity:lost_soul',
                    B: 'deeperdarker:warden_carapace'
            }
    )
    event.shaped(
            Item.of('minecraft:netherite_upgrade_smithing_template'),
            [
                    'ABA',
                    'ACA',
                    'AAA'
            ],
            {
                    A: 'minecraft:netherrack',
                    B: 'minecraft:netherite_ingot',
                    C: 'minecraft:diamond'
            }
    )
    event.remove({ output: 'ancient_elements:elemental_charge' })
event.shaped(
    Item.of('ancient_elements:elemental_charge'),
    [
        'ABC',
        'DEF',
        'GHI'
    ],
    {
        D: 'legendary_monsters:air_rune',
        H: 'aquamirae:ship_graveyard_echo',
        G: 'cataclysm:lava_power_cell',
        I: 'traveloptics:hullbreaker_scales',
        A: 'legendary_monsters:ancient_spike',
        B: 'terramity:hurricane_in_a_jar',
        F: 'irons_spellbooks:dragonskin',
        C: 'cataclysm:amethyst_crab_shell',
        E: 'valoria:unstable_core'
    }
)
event.shaped(
    Item.of('create:creative_motor'),
    [
        'ABA',
        'CDE',
        'AFA'
    ],
    {
        E: 'alexscaves:azure_neodymium_ingot',
        B: 'create:shaft',
        C: 'alexscaves:scarlet_neodymium_ingot',
        D: 'witherstormmod:withered_nether_star',
        F: 'alexscaves:tesla_bulb',
        A: 'createdeco:industrial_iron_sheet'
    }
)
    event.shaped(
            Item.of('create:creative_fluid_tank'),
            [
                    'ABA',
                    'CDC',
                    'ECE'
            ],
            {
                    C: 'ancient_elements:celestium_ingot',
                    B: 'terramity:conductite',
                    E: 'brutality:quantite_ingot',
                    A: 'terramity:cosmilite_ingot',
                    D: 'create:fluid_tank'
            }
    )
    event.shaped(
            Item.of('create:creative_crate'),
            [
                    'ABA',
                    'CDC',
                    'CEC'
            ],
            {
                    E: 'ancient_elements:celestium_ingot',
                    B: 'terramity:conductite',
                    C: 'ancient_elements:galactrium_ingot',
                    D: 'create:item_vault',
                    A: 'ancient_elements:alloy_of_elements'
            }
    )
    event.shaped(
            Item.of('create:creative_blaze_cake'),
            [
                    ' A ',
                    ' B ',
                    '   '
            ],
            {
                    A: 'terramity:nyxium',
                    B: 'create:blaze_cake'
            }
    )
    event.shaped(
            Item.of('minecraft:sculk', 8),
            [
                    'AAA',
                    'ABA',
                    'AAA'
            ],
            {
                    B: 'create:sand_paper',
                    A: 'deeperdarker:cobbled_sculk_stone'
            }
    )
    event.shapeless(
            Item.of('minecraft:echo_shard', 9),
            [
                    'minecraft:sculk'
            ]
    )
    event.shaped(
            Item.of('minecraft:sculk'),
            [
                    'AAA',
                    'AAA',
                    'AAA'
            ],
            {
                    A: 'minecraft:echo_shard'
            }
    )
    event.shapeless(
            Item.of('cataclysm_spellbooks:mechanical_scrap', 2),
            [
                    'cataclysm:witherite_ingot'
            ]
    )
    event.shaped(
            Item.of('terramity:antiprism', 3),
            [
                    'ABA',
                    'CDC',
                    'ABA'
            ],
            {
                    A: 'cataclysm_spellbooks:mechanical_scrap',
                    D: 'terramity:antiprism',
                    C: 'terramity:void_alloy',
                    B: 'terramity:black_matter'
            }
    )
    event.remove({ output: 'terramity:sword_of_the_imprisoned' })
    event.shaped(
            Item.of('terramity:sword_of_the_imprisoned'),
            [
                    'ABA',
                    'CDE',
                    'AFA'
            ],
            {
                    D: 'terramity:hero_sword',
                    B: 'terramity:murasama',
                    E: 'terramity:crescent_moonblade',
                    C: 'terramity:guiding_moonlight',
                    F: 'brutality:double_down',
                    A: 'lethality:nihilite'
            }
    )
    event.shaped(
    Item.of('ancient_elements:sanctum_shard'),
    [
        ' A ',
        'BCB',
        ' B '
    ],
    {
        A: 'terramity:spectral_soul',
        B: 'terramity:fairy_dust',
        C: 'valoria:elemental_crystal'
    }
)
    event.shaped(
    Item.of('kubejs:mystical_gem'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        D: 'terramity:sapphire',
        F: 'composite_material:dungeon_steel_ingot',
        E: 'terramity:decayed_bedrock_dust',
        A: 'eidolon:death_essence',
        C: 'born_in_chaos_v1:dark_charge',
        B: 'terramity:daemonium'
    }
)
event.shaped(
    Item.of('kubejs:pyro_gem'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        B: 'cataclysm:lava_power_cell',
        D: 'terramity:ruby',
        E: 'irons_spellbooks:blood_vial',
        F: 'terramity:hellspec_alloy',
        A: 'born_in_chaos_v1:fire_dust',
        C: 'terramity:spiteful_soul'
    }
)
event.shaped(
    Item.of('kubejs:radiant_gem'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        F: 'dungeons_and_combat:sandstone_ingot',
        C: 'terramity:lost_soul',
        E: 'create:experience_nugget',
        A: 'minecraft:diamond',
        B: 'galosphere:allurite_shard',
        D: 'terramity:topaz'
    }
)
event.shaped(
    Item.of('kubejs:ether_gem'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        F: 'enlightened_end:adamantite_ingot',
        D: 'terramity:iridescent_shard',
        C: 'minecraft:dragon_breath',
        E: 'terramity:iridium_chunk',
        B: 'valoria:nihility_shard',
        A: 'create:powdered_obsidian'
    }
)
event.shaped(
    Item.of('kubejs:star_of_the_cosmos'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        C: 'kubejs:ether_gem',
        E: 'traveloptics:void_spellweave_ingot',
        B: 'voidscape:voidic_crystal',
        F: 'voidscape:tendril',
        A: 'terramity:raw_cosmilite',
        D: 'ancient_elements:sanctum_shard'
    }
)
event.shaped(
    Item.of('kubejs:star_of_spectre'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        E: 'dungeons_and_combat:blessed_gold_ingot',
        F: 'alexscaves:tesla_bulb',
        B: 'dungeons_and_combat:divine_blood_vial',
        A: 'dungeons_and_combat:solar_emblem',
        C: 'kubejs:radiant_gem',
        D: 'ancient_elements:sanctum_shard'
    }
)
event.shaped(
    Item.of('kubejs:star_of_havoc'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        C: 'kubejs:pyro_gem',
        A: 'terramity:chthonian_void',
        B: 'brutality:unbridled_rage',
        F: 'alexscaves:pure_darkness',
        E: 'ancient_elements:infernal_ingot',
        D: 'ancient_elements:sanctum_shard'
    }
)
event.shaped(
    Item.of('kubejs:star_of_eternity'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        B: 'alexscaves:heavy_bone',
        C: 'kubejs:mystical_gem',
        A: 'composite_material:primitive_tenacity',
        E: 'legendary_monsters:molten_metal_ingot',
        F: 'composite_material:warden_hand',
        D: 'ancient_elements:sanctum_shard'
    }
)
    event.shaped(
            Item.of('kubejs:quantum_alloy'),
            [
                    'ABA',
                    'CDE',
                    'AFA'
            ],
            {
                    C: 'kubejs:star_of_the_cosmos',
                    E: 'kubejs:star_of_havoc',
                    F: 'kubejs:star_of_eternity',
                    B: 'kubejs:star_of_spectre',
                    A: 'astral_calamity_extras:hexite_ingot',
                    D: 'ancient_elements:alloy_of_elements'
            }
    )
event.remove({ output: 'valoria:infernal_sword' })
event.remove({ output: 'undergarden:catalyst' })
event.shaped(
    Item.of('undergarden:catalyst'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        B: 'lethality:improbability_steel',
        C: 'minecraft:diamond',
        A: 'dungeons_and_combat:blessed_gold_ingot'
    }
)
    event.shaped(
            Item.of('terramity:chthonic_nectar'),
            [
                    'ABA',
                    'ACA',
                    'DED'
            ],
            {
                    A: 'terramity:chthonian_void',
                    B: 'minecraft:netherite_ingot',
                    D: 'brutality:unbridled_rage',
                    C: 'terramity:analeptic_amphora',
                    E: 'terramity:spiteful_soul'
            }
    )
    event.remove({ output: 'terramity:electron_bracelets' })
    event.remove({ output: 'terramity:supercharged_speed_ring' })

    event.shaped(
            Item.of('terramity:electron_bracelets'),
            [
                    'AB ',
                    'CDB',
                    ' CA'
            ],
            {
                    B: 'alexscaves:azure_neodymium_ingot',
                    C: 'alexscaves:scarlet_neodymium_ingot',
                    D: 'terramity:power_bracelets',
                    A: 'terramity:conductite'
            }
    )
    event.shaped(
            Item.of('ancient_elements:pocket_magnet'),
            [
                    'A A',
                    'B C',
                    'BAC'
            ],
            {
                    C: 'alexscaves:azure_neodymium_ingot',
                    B: 'alexscaves:scarlet_neodymium_ingot',
                    A: 'ancient_elements:steel_ingot'
            }
    )
    event.shaped(
            Item.of('terramity:supercharged_speed_ring'),
            [
                    'ABC',
                    'ADC',
                    'AEC'
            ],
            {
                    A: 'alexscaves:azure_neodymium_ingot',
                    C: 'alexscaves:scarlet_neodymium_ingot',
                    B: 'terramity:conductite',
                    D: 'terramity:rush_ring_plus',
                    E: 'terramity:excavation_ring'
            }
    )

       event.remove({ output: 'cataclysm_spellbooks:murasama_blade' })

    event.shaped(
            Item.of('cataclysm_spellbooks:murasama_blade'),
            [
                    'ABC',
                    'ECB',
                    'DEA'
            ],
            {
                    A: 'terramity:circuit_board',
                    D: 'terramity:murasama',
                    C: 'kubejs:auric_ingot',
                    B: 'brutality:high_frequency_alloy',
                    E: 'mmt:acril_ingot'
            }
        )
event.shaped(
    Item.of('kubejs:exomechanical_ingot'),
    [
        '   ',
        'AAB',
        'CCB'
    ],
    {
        C: 'kubejs:exomechanical_core',
        B: 'terramity:antiprism',
        A: 'terramity:profanum'
    }
)
    event.remove({ output: 'terramity:murasama' })
    event.shaped(
            Item.of('terramity:murasama'),
            [
                    'ABC',
                    'BDB',
                    'EBF'
            ],
            {
                    F: 'alexscaves:azure_neodymium_ingot',
                    A: 'alexscaves:scarlet_neodymium_ingot',
                    D: 'terramity:simmeredge',
                    E: 'cataclysm_spellbooks:mechanical_weapon_parts',
                    B: 'brutality:high_frequency_alloy',
                    C: 'terramity:exodium_superalloy'
            }
    )

    event.remove({output: 'brutality:royal_guardian_sword' })   

    event.shaped(
    Item.of('brutality:royal_guardian_sword'),
    [
        ' AB',
        'CDA',
        'EC '
    ],
    {
        A: 'kubejs:vortex_alloy',
        D: 'terramity:energized_core',
        B: 'minecraft:nether_star',
        C: 'dungeons_and_combat:blessed_gold_ingot',
        E: 'terramity:reverium_sword'
    }
)
event.remove({output: 'brutality:whisperwaltz' })
event.shaped(
    Item.of('brutality:whisperwaltz'),
    [
        '  A',
        ' A ',
        'BC '
    ],
    {
        A: 'iter_rpg:otherwordly_ingot',
        C: 'terramity:reverium',
        B: 'terramity:excalibur'
    }
)
event.remove({output: 'lethality:hf_meowrasama' })
event.shaped(
    Item.of('lethality:hf_meowrasama'),
    [
        ' AB',
        'ACA',
        'DA '
    ],
    {
        A: 'mmt:starinium_ingot',
        D: 'terramity:murasama',
        B: 'minecraft:salmon',
        C: 'brutality:high_frequency_alloy'
    }
)
event.remove({output: 'lethality:starlight' })
event.shaped(
    Item.of('lethality:starlight'),
    [
        'FAB',
        'CDA',
        'ECF'
    ],
    {
        A: 'terramity:iridescent_shard',
        C: 'traveloptics:void_spellweave_ingot',
        B: 'terramity:prismatic_jewel',
        D: 'brutality:whisperwaltz',
        E: 'lethality:hf_meowrasama',
        F: 'lethality:pixie_alloy'
    }
)
event.shaped(
    Item.of('terramity:axe_of_unholy_divinity'),
    [
        'ABC',
        'DCB',
        'EDA'
    ],
    {
        C: 'minecraft:bedrock',
        D: 'terramity:antiprism',
        B: 'kubejs:alloy_o_bedrock',
        A: 'terramity:black_matter',
        E: 'dungeons_and_combat:ebony_long_sword'
    }
)
event.remove({output: 'born_in_chaos_v1:frostbitten_blade' })
event.remove({output: 'hazennstuff:ice_pike' })
event.shaped(
    Item.of('hazennstuff:ice_pike'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        E: 'born_in_chaos_v1:frostbitten_blade',
        A: 'cataclysm:cursium_ingot',
        B: 'irons_spellbooks:icy_fang',
        C: 'fdbosses:fire_and_ice_core',
        F: 'legendary_monsters:the_great_frost',
        D: 'ancient_elements:spectrillium_ingot'
    }
)
event.remove({output: 'terramity:icebrand' })
event.shaped(
    Item.of('born_in_chaos_v1:frostbitten_blade'),
    [
        ' AB',
        'CBA',
        'DC '
    ],
    {
        A: 'terramity:sapphire',
        C: 'astral_calamity_extras:hardened_permafrost',
        D: 'terramity:icebrand',
        B: 'irons_spellbooks:frosted_helve'
    }
)
event.shaped(
    Item.of('terramity:icebrand'),
    [
        ' AB',
        'CEA',
        'DC '
    ],
    {
        C: 'astral_calamity_extras:hardened_permafrost',
        B: 'irons_spellbooks:frozen_bone',
        E: 'terramity:iridium_sword',
        A: 'minecraft:ice',
        D: 'smc:frostium_sword'
    }
)
event.remove({output: 'ancient_elements:alloy_of_elements' })
event.shaped(
    Item.of('ancient_elements:alloy_of_elements', 6),
    [
        ' A ',
        'BCD',
        ' E '
    ],
    {
        D: 'lethality:pixie_alloy',
        A: 'kubejs:nebulae_alloy',
        C: 'ancient_elements:ruined_remnant',
        B: 'lethality:annihilation_alloy',
        E: 'kubejs:auric_ingot'
    }
)
event.shaped(
    Item.of('astral_calamity_extras:universium_ingot'),
    [
        ' A ',
        'BCD',
        ' E '
    ],
    {
        A: 'valoria:void_ingot',
        D: 'terramity:void_alloy',
        B: 'terramity:cosmilite_ingot',
        C: 'brutality:pocket_black_hole',
        E: 'ancient_elements:galactrium_ingot'
    }
)
event.shaped(
    Item.of('astral_calamity_extras:devilblood_ingot'),
    [
        ' A ',
        'BCD',
        ' E '
    ],
    {
        A: 'valoria:crimtane_ingot',
        C: 'brutality:blood_orb',
        E: 'dungeons_and_combat:crimson_ingot',
        D: 'terramity:hellspec_alloy',
        B: 'terramity:exodium_superalloy'
    }
)
event.remove({output: 'ancient_elements:frost_ingot' })
event.remove({output: 'ancient_elements:abyssal_ingot' })

event.shapeless(
    Item.of('ancient_elements:abyssal_ingot', 3),
    [
        'composite_material:guardian_elder_spike',
        'minecraft:iron_ingot',
        'ancient_elements:abyssal_scrap',
        'ancient_elements:abyssal_scrap',
        'ancient_elements:abyssal_scrap'
    ]
)
event.shaped(
    Item.of('kubejs:exomechanical_core'),
    [
        'ABA',
        'CDC',
        'CBC'
    ],
    {
        B: 'cataclysm_spellbooks:mechanical_scrap',
        A: 'minecraft:redstone_block',
        C: 'kubejs:exotic_plating',
        D: 'irons_spellbooks:energized_core'
    }
)
})