ServerEvents.recipes(event => {
    event.remove({output: 'cataclysm:ignitium_helmet' })
    event.remove({output: 'cataclysm:ignitium_chestplate' })
    event.remove({output: 'cataclysm:ignitium_leggings' })
    event.remove({output: 'cataclysm:ignitium_boots' })

    event.remove({output: 'composite_material:etherite_ingot' })

    event.remove({output: 'composite_material:primitive_tenacity' })
    event.remove({output: 'ancient_elements:ancient_metal_ingot' })

    event.remove({output: 'dungeons_and_combat:neptunium_trident' })
    event.remove({output: 'dungeons_and_combat:neptunium_dagger' })
    event.remove({output: 'dungeons_and_combat:neptunium_greathammer' })

    event.remove({output: 'traveloptics:mechanized_exoskeleton_helmet' })
    event.remove({output: 'traveloptics:mechanized_exoskeleton_chestplate' })
    event.remove({output: 'traveloptics:mechanized_exoskeleton_leggings' })
    event.remove({output: 'traveloptics:mechanized_exoskeleton_boots' })

    event.remove({output: 'traveloptics:trident_of_the_eternal_maelstrom' })

    event.remove({output:  'lethality:improbability_steel' })

    event.remove({output:  'dungeons_and_combat:titan_helmet' })
    event.remove({output:  'dungeons_and_combat:titan_chestplate' })
    event.remove({output:  'dungeons_and_combat:titan_leggings' })
    event.remove({output:  'dungeons_and_combat:titan_boots' })

    event.remove({output: 'brutality:depth_crusher' })

    event.remove({output: 'traveloptics:galenic_polarizer' })
    event.remove({output: 'traveloptics:charged_sands' })
    event.remove({output: 'cataclysm:astrape' })

    event.remove({output: 'lethality:bladecrest_oathsword' })
    event.remove({output: 'lethality:forbidden_oathblade' })
    event.remove({output: 'lethality:exalted_oathblade' })
    event.remove({output: 'lethality:devils_devastation' })

    event.remove({output: 'ancient_elements:molten_lance' })
    event.remove({output: 'blazegear:nethersteel_sword' })
    event.remove({output: 'terramity:simmeredge' })
    event.remove({output: 'dungeons_and_combat:molten_blazing_sword' })

    event.remove({output: 'lethality:defiled_greatsword' })
    event.remove({output: 'lethality:blighted_cleaver' })
    event.remove({output: 'lethality:caustic_edge' })
    event.remove({output: 'lethality:tainted_blade' })
    
    event.remove({output: 'hazennstuff:alchemist_supreme_helmet' })
    event.remove({output: 'hazennstuff:alchemist_supreme_chestplate' })
    event.remove({output: 'hazennstuff:alchemist_supreme_leggings' })
    event.remove({output: 'hazennstuff:alchemist_supreme_boots' })

    event.remove({output: 'cataclysm_spellbooks:ignis_helmet' })
    event.remove({output: 'cataclysm_spellbooks:ignis_chestplate' })
    event.remove({output: 'cataclysm_spellbooks:ignis_leggings' })
    event.remove({output: 'cataclysm_spellbooks:ignis_boots' })

    event.remove({output: 'terramity:hellfire_flurry' })
    event.remove({output: 'composite_material:perkin' })
    event.remove({output: 'ancient_elements:aeonite_pickaxe' })
    event.remove({output: 'terramity:devastation' })

    event.remove({output: 'smc:excalibur' })
    event.remove({output: 'brutality:rhongomyniad' })
    event.remove({output: 'hazennstuff:excalibur' })
    
    event.remove({output: 'hazennstuff:umbranova' })
    event.remove({output: 'traveloptics:abyssal_tidecaller' })
    event.remove({output: 'traveloptics:the_obliterator' })

    event.remove({output: 'lethality:annihilation_alloy' })
    event.remove({output: 'lethality:pixie_alloy' })

    event.remove({output: 'rpg_style_more_weapons_r:black_fabric' })
    event.remove({output: 'terramity:asphodel' })
event.shapeless(
    Item.of('ancient_elements:frost_ingot', 2),
    [
        'ancient_elements:frost_shard',
        'ancient_elements:frost_shard',
        'astral_calamity_extras:hardened_permafrost',
        'ancient_elements:frost_shard'
    ]
)
    event.shapeless(
    Item.of('cataclysm:black_steel_ingot', 3),
    [
        'born_in_chaos_v1:pileof_dark_metal',
        'lethality:improbability_steel',
        'astral_calamity_extras:wrought_armor_plating'
    ]
)
event.shaped(
    Item.of('hazennstuff:umbranova'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        B: 'aquamirae:abyssal_amethyst',
        C: 'valoria:crystal_shard',
        D: 'traveloptics:void_spellweave_ingot',
        A: 'celestisynth:starstruck_scrap',
        F: 'dungeons_and_combat:netherite_trident',
        E: 'armor_of_remnants:ancient_eldritch_ingot'
    }
)
event.shaped(
    Item.of('traveloptics:abyssal_tidecaller'),
    [
        'ABC',
        'BDE',
        'FEG'
    ],
    {
        G: 'cataclysm:crystallized_coral',
        B: 'composite_material:abyss_fang',
        D: 'valoria:void_ingot',
        C: 'cataclysm:tidal_claws',
        F: 'enigmaticlegacy:etherium_scythe',
        A: 'terramity:onyx',
        E: 'iter_rpg:abyssquartz_shard'
    }
)
event.shaped(
    Item.of('traveloptics:the_obliterator'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        F: 'hazennstuff:umbranova',
        A: 'valoria:nihility_shard',
        E: 'traveloptics:abyssal_tidecaller',
        C: 'traveloptics:abyssal_tentacle',
        B: 'valoria:wicked_amethyst',
        D: 'traveloptics:abyssal_spellweave_ingot'
    }
)
event.shaped(
    Item.of('brutality:rhongomyniad'),
    [
        'ABC',
        'DEB',
        'EDA'
    ],
    {
        D: 'minecraft:netherite_scrap',
        B: 'smc:perkin_ingot',
        E: 'minecraft:stick',
        C: 'terramity:excalibur',
        A: 'cataclysm:ancient_metal_ingot'
    }
)
event.shaped(
    Item.of('hazennstuff:excalibur'),
    [
        'ABB',
        'CDB',
        'ECA'
    ],
    {
        D: 'terramity:hero_sword',
        A: 'smc:perkin_ingot',
        B: 'composite_material:evolutium',
        E: 'smc:knife',
        C: 'cataclysm:ancient_metal_ingot'
    }
)
event.shaped(
    Item.of('smc:excalibur'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        D: 'composite_material:perkin',
        E: 'brutality:rhongomyniad',
        A: 'irons_spellbooks:divine_soulshard',
        C: 'minecraft:nether_star',
        F: 'hazennstuff:excalibur',
        B: 'kubejs:auric_ingot'
    }
)
event.shaped(
    Item.of('irons_spellbooks:divine_soulshard', 2),
    [
        ' A ',
        ' B ',
        ' C '
    ],
    {
        B: 'mmt:abiding_alloy_plate',
        A: 'irons_spellbooks:divine_soulshard',
        C: 'terramity:empty_essence'
    }
)
event.shaped(
    Item.of('kubejs:auric_ingot'),
    [
        'ABC',
        'DEF',
        'GHI'
    ],
    {
        I: 'cataclysm_spellbooks:mechanical_scrap',
        B: 'terramity:conductite',
        H: 'composite_material:evolutium',
        E: 'terramity:energized_core',
        C: 'cataclysm:essence_of_the_storm',
        D: 'terramity:reverium',
        F: 'kubejs:exomechanical_ingot',
        G: 'minecraft:experience_bottle',
        A: 'dungeons_and_combat:essence_of_sunleia'
    }
)
event.shaped(
    Item.of('lethality:pixie_alloy'),
    [
        'ABC',
        'DEF',
        'GHI'
    ],
    {
        B: 'irons_spellbooks:arcane_ingot',
        G: 'aquamirae:abyssal_amethyst',
        I: 'terramity:warden_soul',
        C: 'terramity:fairy_dust',
        D: 'terramity:cosmilite_ingot',
        E: 'cataclysm:void_core',
        F: 'composite_material:echoium_ingot',
        A: 'terramity:empty_essence',
        H: 'traveloptics:abyssal_spellweave_ingot'
    }
)

    event.shapeless(
    Item.of('lethality:improbability_steel'),
    [
        'terramity:chthonic_crystal',
        'terramity:daemonium_chunk',
        'create:iron_sheet'
    ]
)
    event.shapeless(
    Item.of('iter_rpg:deepsteel_ingot', 2),
    [
        'minecraft:copper_ingot',
        'elementus:crude_steel',
        'minecraft:pointed_dripstone',
        'born_in_chaos_v1:pieceofdarkmetal'
    ]
)

    event.shaped(
    Item.of('dungeons_and_combat:titan_helmet'),
    [
        'AAA',
        'A A',
        '   '
    ],
    {
        A: 'iter_rpg:deepsteel_ingot'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:titan_leggings'),
    [
        'AAA',
        'B B',
        'A A'
    ],
    {
        A: 'iter_rpg:deepsteel_ingot',
        B: 'astral_calamity_extras:wrought_armor_plating'
    }
)
event.shaped(
    Item.of('traveloptics:mechanized_exoskeleton_helmet'),
    [
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        A: 'kubejs:exotic_plating',
        C: 'cataclysm:witherite_ingot',
        D: 'irons_spellbooks:netherite_mage_helmet',
        B: 'traveloptics:witherite_upgrade_smithing_template',
        E: 'kubejs:auric_ingot'
    }
)
event.shaped(
    Item.of('traveloptics:mechanized_exoskeleton_chestplate'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        F: 'traveloptics:elytra_jetpack_component',
        A: 'kubejs:exotic_plating',
        D: 'irons_spellbooks:netherite_mage_chestplate',
        E: 'cataclysm:witherite_ingot',
        B: 'traveloptics:witherite_upgrade_smithing_template',
        C: 'kubejs:auric_ingot'
    }
)
event.shapeless(
    Item.of('kubejs:frigid_ingot'),
    [
        'astral_calamity_extras:arctic_fur',
        'astral_calamity_extras:arctic_fur',
        'astral_calamity_extras:arctic_fur',
        'astral_calamity_extras:arctic_fur',
        'astral_calamity_extras:hardened_permafrost',
        'terramity:sapphire',
        'terramity:sapphire',
        'terramity:sapphire',
        'terramity:sapphire'
    ]
)
event.shapeless(
    Item.of('composite_material:primitive_tenacity', 2),
    [
        'minecraft:sniffer_egg',
        'composite_material:guardian_elder_spike',
        'kubejs:frigid_ingot',
        'minecraft:conduit',
        'minecraft:netherite_scrap',
        'terramity:occult_fabric'
    ]
)
event.shapeless(
    Item.of('ancient_elements:ancient_metal_ingot', 3),
    [
        'minecraft:iron_ingot',
        'astral_calamity_extras:sandworm_scale',
        'ancient_elements:ancient_scrap',
        'ancient_elements:ancient_scrap'
    ]
)
event.shaped(
    Item.of('traveloptics:mechanized_exoskeleton_leggings'),
    [
        'ABA',
        'CDC',
        'CEC'
    ],
    {
        C: 'kubejs:exotic_plating',
        A: 'cataclysm:witherite_ingot',
        D: 'irons_spellbooks:netherite_mage_leggings',
        B: 'traveloptics:witherite_upgrade_smithing_template',
        E: 'kubejs:auric_ingot'
    }
)
event.shaped(
    Item.of('traveloptics:mechanized_exoskeleton_boots'),
    [
        ' A ',
        'BCB',
        'DED'
    ],
    {
        D: 'kubejs:exotic_plating',
        C: 'irons_spellbooks:netherite_mage_boots',
        B: 'cataclysm:witherite_ingot',
        A: 'kubejs:auric_ingot',
        E: 'traveloptics:witherite_upgrade_smithing_template'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:titan_boots'),
    [
        '   ',
        'A A',
        'B B'
    ],
    {
        B: 'iter_rpg:deepsteel_ingot',
        A: 'astral_calamity_extras:wrought_armor_plating'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:titan_chestplate'),
    [
        'A A',
        'BBB',
        'ABA'
    ],
    {
        A: 'iter_rpg:deepsteel_ingot',
        B: 'astral_calamity_extras:wrought_armor_plating'
    }
)
    event.shaped(
    Item.of('brutality:depth_crusher'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        C: 'cataclysm:crystallized_coral',
        B: 'valoria:oceanic_shell',
        E: 'legendary_monsters:monstrous_anchor',
        F: 'dungeons_and_combat:neptunium_trident',
        A: 'legendary_monsters:nature_crystal',
        D: 'terramity:onyx'
    }
)
    event.shaped(
    Item.of('traveloptics:trident_of_the_eternal_maelstrom'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        B: 'kubejs:nebulae_alloy',
        C: 'cataclysm:lacrima',
        A: 'alexscaves:pearl',
        E: 'traveloptics:staff_of_the_storm_empress',
        F: 'brutality:depth_crusher',
        D: 'traveloptics:hullbreaker_steel'
    }
)
    event.shaped(
    Item.of('cataclysm:ignitium_chestplate'),
    [
        'A A',
        'BCB',
        'DED'
    ],
    {
        A: 'cataclysm:ignitium_ingot',
        E: 'cataclysm:ignitium_upgrade_smithing_template',
        D: 'traveloptics:flame_tempered_handguard',
        B: 'kubejs:solar_alloy',
        C: 'ancient_elements:hellstone_armor_chestplate'
    }
)
event.shaped(
    Item.of('lethality:bladecrest_oathsword'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        F: 'born_in_chaos_v1:sharpened_dark_metal_sword',
        E: 'minecraft:netherite_scrap',
        B: 'legendary_monsters:chiseled_ancient_dripstone_shard',
        D: 'caverns_and_chasms:living_flesh',
        A: 'terramity:chthonic_crystal',
        C: 'iter_rpg:abyssquartz_shard'
    }
)
event.shaped(
    Item.of('lethality:forbidden_oathblade'),
    [
        'ABC',
        'DCB',
        'EDA'
    ],
    {
        D: 'dungeons_and_combat:crimson_ingot',
        E: 'lethality:bladecrest_oathsword',
        B: 'brutality:unbridled_rage',
        A: 'irons_spellbooks:blood_vial',
        C: 'iter_rpg:bottle_of_obsidian_tears'
    }
)
event.shaped(
    Item.of('lethality:exalted_oathblade'),
    [
        'ABC',
        'DCB',
        'EDA'
    ],
    {
        D: 'caverns_and_chasms:living_flesh',
        E: 'lethality:forbidden_oathblade',
        B: 'terramity:chthonian_void',
        C: 'enigmaticlegacy:etherium_ingot',
        A: 'terramity:hellspec_alloy'
    }
)
event.shaped(
    Item.of('lethality:devils_devastation'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        E: 'valoria:meatcutter',
        B: 'terramity:raw_profanum',
        C: 'valoria:pain_crystal',
        A: 'lethality:annihilation_alloy',
        D: 'composite_material:obsidian_steel_ingot',
        F: 'lethality:exalted_oathblade'
    }
)
event.shaped(
    Item.of('cataclysm:ignitium_helmet'),
    [
        'ABA',
        'CDC',
        ' E '
    ],
    {
        D: 'cataclysm:monstrous_helm',
        C: 'cataclysm:ignitium_ingot',
        E: 'cataclysm:ignitium_upgrade_smithing_template',
        B: 'ancient_elements:hellstone_armor_helmet',
        A: 'kubejs:solar_alloy'
    }
)
event.shaped(
    Item.of('cataclysm:ignitium_leggings'),
    [
        'ABA',
        'CDC',
        'E E'
    ],
    {
        C: 'cataclysm:lava_power_cell',
        B: 'ancient_elements:hellstone_armor_leggings',
        A: 'cataclysm:ignitium_ingot',
        D: 'cataclysm:ignitium_upgrade_smithing_template',
        E: 'kubejs:solar_alloy'
    }
)
event.shaped(
    Item.of('cataclysm:ignitium_boots'),
    [
        'ABA',
        'CDC',
        'E E'
    ],
    {
        C: 'dungeons_and_combat:blazing_ingot',
        A: 'cataclysm:ignitium_ingot',
        B: 'cataclysm:ignitium_upgrade_smithing_template',
        D: 'ancient_elements:hellstone_armor_boots',
        E: 'kubejs:solar_alloy'
    }
)
event.shaped(
    Item.of('hazennstuff:legionnaire_warlock_axe'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        A: 'terramity:antiprism',
        C: 'irons_spellbooks:hellrazor',
        F: 'cataclysm:the_incinerator',
        B: 'lethality:annihilation_alloy',
        E: 'valoria:infernal_sword',
        D: 'legendary_monsters:withered_bone'
    }
)
event.shaped(
    Item.of('terramity:hellfire_flurry'),
    [
        'ABA',
        'CDC',
        ' B '
    ],
    {
        D: 'terramity:pump_action_shotgun',
        A: 'minecraft:dragon_breath',
        C: 'terramity:profanum',
        B: 'terramity:spiteful_soul'
    }
)
event.shaped(
    Item.of('ancient_elements:aeonite_pickaxe'),
    [
        'ABC',
        'DEF',
        'GHI'
    ],
    {
        D: 'ancient_elements:void_steel_pickaxe',
        C: 'terramity:conductite_pickaxe',
        B: 'terramity:devastation',
        F: 'ancient_elements:aetherium_pickaxe',
        G: 'ancient_elements:galactrium_pickaxe',
        A: 'terramity:dimlite_pickaxe',
        H: 'ancient_elements:hellstone_pickaxe',
        I: 'ancient_elements:elementinium_pickaxe',
        E: 'ancient_elements:alloy_of_elements'
    }
)
event.shaped(
    Item.of('kubejs:nebulae_alloy'),
    [
        'ABC',
        'DEF',
        'GHI'
    ],
    {
        A: 'traveloptics:verdant_spellweave_ingot',
        F: 'traveloptics:tectonic_ingot',
        H: 'traveloptics:hullbreaker_steel',
        I: 'enigmaticlegacy:earth_heart',
        C: 'aquamirae:ship_graveyard_echo',
        D: 'cataclysm:ancient_metal_ingot',
        G: 'cataclysm:lacrima',
        B: 'cataclysm:cursium_ingot',
        E: 'traveloptics:tremor_core'
    }
)
event.shaped(
    Item.of('lethality:annihilation_alloy'),
    [
        'ABC',
        'DEF',
        'GHI'
    ],
    {
        I: 'terramity:raw_profanum',
        H: 'terramity:profanum',
        F: 'cataclysm:ignitium_ingot',
        G: 'terramity:chthonian_void',
        E: 'valoria:pain_crystal',
        D: 'terramity:hellspec_alloy',
        A: 'lethality:nihilite',
        B: 'dungeons_and_combat:ebony_ingot',
        C: 'kubejs:wither_soul'
    }
)
event.shaped(
    Item.of('kubejs:alloy_o_bedrock'),
    [
        '   ',
        'AAB',
        'CCB'
    ],
    {
        A: 'minecraft:bedrock',
        B: 'terramity:antiprism',
        C: 'terramity:profanum'
    }
)
event.shaped(
    Item.of('kubejs:solar_alloy'),
    [
        '   ',
        'AAB',
        'CCB'
    ],
    {
        B: 'terramity:antiprism',
        C: 'terramity:profanum',
        A: 'kubejs:solar_core'
    }
)


event.shaped(
    Item.of('composite_material:perkin', 4),
    [
        'ABA',
        'CDE',
        'AFA'
    ],
    {
        B: 'terramity:ambrosia',
        C: 'terramity:prismatic_jewel',
        D: 'smc:perkin_ingot',
        E: 'ancient_elements:aurora_crystal',
        A: 'eidolon:enchanted_ash',
        F: 'terramity:chthonic_nectar'
    }
)
event.shaped(
    Item.of('kubejs:solar_core'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        B: 'kubejs:ignitium_nugget',
        C: 'dungeons_and_combat:blazing_core',
        A: 'ancient_elements:raw_infernal_ore'
    }
)
event.shaped(
    Item.of('terramity:devastation'),
    [
        'ABA',
        'CDE',
        'FBF'
    ],
    {
        C: 'terramity:exodium_pickaxe',
        E: 'terramity:reverium_pickaxe',
        A: 'terramity:profanum',
        D: 'terramity:nyxium_pickaxe',
        B: 'lethality:nihilite',
        F: 'kubejs:polarum'
    }
)
event.remove({output: 'celestisynth:frostbound' })

event.shaped(
    Item.of('celestisynth:frostbound'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        A: 'terramity:antiprism',
        C: 'traveloptics:cursed_wraithblade',
        E: 'hazennstuff:ice_pike',
        D: 'celestisynth:wintereis_shard',
        B: 'kubejs:nebulae_alloy',
        F: 'irons_spellbooks:weapon_parts'
    }
)

event.shaped(
    Item.of('cataclysm_spellbooks:ignis_chestplate'),
    [
        'A A',
        'BCB',
        'DED'
    ],
    {
        C: 'hazennstuff:hazel_chestplate',
        A: 'cataclysm:ignitium_ingot',
        E: 'cataclysm:ignitium_upgrade_smithing_template',
        D: 'traveloptics:flame_tempered_handguard',
        B: 'kubejs:solar_alloy'
    }
)
event.shaped(
    Item.of('cataclysm_spellbooks:ignis_helmet'),
    [
        ' A ',
        'BCB',
        'DED'
    ],
    {
        D: 'cataclysm:ignitium_ingot',
        E: 'cataclysm:ignitium_upgrade_smithing_template',
        C: 'hazennstuff:hazel_helmet',
        A: 'traveloptics:flame_tempered_handguard',
        B: 'kubejs:solar_alloy'
    }
)
event.shaped(
    Item.of('cataclysm_spellbooks:ignis_leggings'),
    [
        'ABA',
        'CDC',
        'E E'
    ],
    {
        C: 'cataclysm:ignitium_ingot',
        B: 'cataclysm:ignitium_upgrade_smithing_template',
        A: 'traveloptics:flame_tempered_handguard',
        D: 'hazennstuff:hazel_leggings',
        E: 'kubejs:solar_alloy'
    }
)
event.shaped(
    Item.of('cataclysm_spellbooks:ignis_boots'),
    [
        ' A ',
        'BCB',
        'DED'
    ],
    {
        B: 'cataclysm:ignitium_ingot',
        A: 'cataclysm:ignitium_upgrade_smithing_template',
        C: 'hazennstuff:hazel_boots',
        E: 'traveloptics:flame_tempered_handguard',
        D: 'kubejs:solar_alloy'
    }
)
event.shaped(
    Item.of('hazennstuff:alchemist_supreme_chestplate'),
    [
        'A A',
        'BCB',
        'DED'
    ],
    {
        E: 'lethality:pixie_alloy',
        B: 'terramity:occult_fabric',
        A: 'minecraft:emerald',
        D: 'rpg_style_more_weapons_r:black_fabric',
        C: 'irons_spellbooks:archevoker_chestplate'
    }
)
event.shaped(
    Item.of('hazennstuff:alchemist_supreme_leggings'),
    [
        'ABA',
        'CDC',
        'E E'
    ],
    {
        B: 'lethality:pixie_alloy',
        C: 'terramity:occult_fabric',
        E: 'born_in_chaos_v1:magical_holiday_candy',
        A: 'rpg_style_more_weapons_r:black_fabric',
        D: 'irons_spellbooks:archevoker_leggings'
    }
)
event.shapeless(
    Item.of('terramity:daemonium'),
    [
        'ancient_elements:selenite_shard',
        'minecraft:diamond',
        'minecraft:diamond'
    ]
)
event.shapeless(
    Item.of('terramity:onyx'),
    [
        'ancient_elements:nocturnal_shard',
        'minecraft:diamond',
        'minecraft:diamond'
    ]
)
event.shapeless(
    Item.of('hazennstuff:zenalite_ingot'),
    [
        'hazennstuff:raw_zenalite',
        'irons_spellbooks:arcane_ingot'
    ]
)
event.shapeless(
    Item.of('terramity:sapphire'),
    [
        'ancient_elements:cerulean_shard',
        'minecraft:diamond',
        'minecraft:diamond'
    ]
)
event.shapeless(
    Item.of('terramity:ruby'),
    [
        'ancient_elements:scarlet_shard',
        'minecraft:diamond',
        'minecraft:diamond'
    ]
)
event.shapeless(
    Item.of('#forge:raw_materials/uranium'),
    [
        'ancient_elements:verdant_viridium_shard',
        'minecraft:diamond',
        'minecraft:diamond'
    ]
)
event.shapeless(
    Item.of('terramity:topaz'),
    [
        'ancient_elements:topaz_shard',
        'minecraft:diamond',
        'minecraft:diamond'
    ]
)
event.shaped(
    Item.of('hazennstuff:alchemist_supreme_boots'),
    [
        'A A',
        'BCB',
        'DED'
    ],
    {
        E: 'lethality:pixie_alloy',
        A: 'born_in_chaos_v1:magical_holiday_candy',
        D: 'terramity:occult_fabric',
        B: 'rpg_style_more_weapons_r:black_fabric',
        C: 'irons_spellbooks:archevoker_boots'
    }
)
event.shaped(
    Item.of('hazennstuff:alchemist_supreme_helmet'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        F: 'lethality:pixie_alloy',
        A: 'terramity:occult_fabric',
        C: 'born_in_chaos_v1:magical_holiday_candy',
        E: 'rpg_style_more_weapons_r:black_fabric',
        B: 'irons_spellbooks:archevoker_helmet',
        D: 'born_in_chaos_v1:lord_pumpkinheads_hat_helmet'
    }
)
event.shaped(
    Item.of('terramity:asphodel'),
    [
        'ABA',
        'CDC',
        ' E '
    ],
    {
        C: 'lethality:pixie_alloy',
        D: 'terramity:pump_action_shotgun',
        E: 'terramity:opaline_moonstone',
        A: 'terramity:iridium_chunk',
        B: 'terramity:raw_cosmilite'
    }
)
event.shaped(
    Item.of('blazegear:nethersteel_sword'),
    [
        '  A',
        'BC ',
        'DB '
    ],
    {
        C: 'blazegear:brimsteel_sword',
        B: 'minecraft:netherite_ingot',
        A: 'terramity:ruby',
        D: 'minecraft:blaze_rod'
    }
)
event.shaped(
    Item.of('terramity:simmeredge'),
    [
        ' AB',
        'CBA',
        'DC '
    ],
    {
        A: 'minecraft:blaze_powder',
        D: 'terramity:iridium_sword',
        B: 'terramity:ruby',
        C: 'terramity:spiteful_soul'
    }
)
event.shaped(
    Item.of('ancient_elements:molten_lance'),
    [
        '  A',
        'BA ',
        'CB '
    ],
    {
        C: 'terramity:simmeredge',
        B: 'ancient_elements:fiery_solution',
        A: 'terramity:ruby'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:molten_blazing_sword'),
    [
        ' AA',
        'ABC',
        'D  '
    ],
    {
        C: 'minecraft:nether_brick',
        A: 'dungeons_and_combat:blazing_ingot',
        B: 'minecraft:wither_skeleton_skull',
        D: 'blazegear:nethersteel_sword'
    }
)




event.shaped(
    Item.of('valoria:infernal_sword'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        D: 'traveloptics:pyro_spellweave_ingot',
        A: 'block_factorys_bosses:dragon_bone',
        F: 'celestisynth:solar_crystal',
        B: 'cataclysm:ignitium_ingot',
        E: 'dungeons_and_combat:molten_blazing_sword',
        C: 'ancient_elements:molten_lance'
    }
)
event.shapeless(
    Item.of('composite_material:etherite_ingot', 3),
    [
        'lethality:pixie_alloy',
        'minecraft:nether_star',
        'terramity:reverium',
        'composite_material:echoium_ingot',
        'terramity:prismatic_jewel',
        'composite_material:allay_steel_ingot'
    ]
)
event.shaped(
    Item.of('lethality:defiled_greatsword'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        C: 'alexscaves:ominous_catalyst',
        A: 'terramity:warden_soul',
        D: 'composite_material:primitive_tenacity',
        E: 'lethality:miasma',
        F: 'lethality:blighted_cleaver',
        B: 'kubejs:nebulae_alloy'
    }
)
event.shaped(
    Item.of('lethality:blighted_cleaver'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        F: 'lethality:caustic_edge',
        E: 'brutality:atomic_judgement',
        B: 'cataclysm:koboleton_bone',
        D: 'terramity:virentium_alloy_ingot',
        C: 'traveloptics:tremor_core',
        A: 'valoria:rotten_bone'
    }
)
event.shaped(
    Item.of('lethality:caustic_edge'),
    [
        'ABC',
        'BDB',
        'EBA'
    ],
    {
        A: 'terramity:accursed_soul',
        D: 'legendary_monsters:nature_crystal',
        B: 'ancient_elements:jungle_steel_ingot',
        C: 'evenbetternether:nether_ruby_block',
        E: 'lethality:tainted_blade'
    }
)
event.shaped(
    Item.of('lethality:tainted_blade'),
    [
        'ABC',
        'DCB',
        'EDA'
    ],
    {
        D: 'irons_spellbooks:nature_rune',
        E: 'ancient_elements:jungle_steel_sword',
        B: 'minecraft:fermented_spider_eye',
        C: 'minecraft:netherrack',
        A: 'ancient_elements:ancient_scrap'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:neptunium_dagger'),
    [
        ' AB',
        'ADA',
        ' A '
    ],
    {
        A: 'minecraft:prismarine_shard',
        B: 'terramity:sapphire',
        D: 'composite_material:abyss_blade'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:neptunium_greathammer'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        C: 'legendary_monsters:monstrous_anchor',
        B: 'composite_material:prismarine_alloy_ingot',
        A: 'minecraft:prismarine_shard'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:neptunium_trident'),
    [
        ' AB',
        ' CA',
        'D  '
    ],
    {
        B: 'composite_material:abyss_fang',
        D: 'composite_material:prismarine_alloy_ingot',
        A: 'minecraft:prismarine_shard',
        C: 'minecraft:trident'
    }
)
event.shaped(
    Item.of('cataclysm:astrape'),
    [
        ' AB',
        'CDA',
        'AC '
    ],
    {
        B: 'composite_material:abyss_fang',
        A: 'cataclysm:lacrima',
        C: 'terramity:topaz',
        D: 'minecraft:lightning_rod'
    }
)
event.shaped(
    Item.of('traveloptics:charged_sands'),
    [
        'ABC',
        'DEB',
        'FDA'
    ],
    {
        A: 'irons_spellbooks:lightning_bottle',
        E: 'cataclysm:astrape',
        B: 'cataclysm:essence_of_the_storm',
        C: 'opposing_force:electric_charge',
        F: 'cataclysm:ancient_spear',
        D: 'minecraft:diamond'
    }
)
event.shaped(
    Item.of('traveloptics:galenic_polarizer'),
    [
        'ABC',
        'DEF',
        'GHA'
    ],
    {
        C: 'alexscaves:heart_of_iron',
        F: 'alexscaves:azure_magnet',
        G: 'alexscaves:tesla_bulb',
        D: 'brutality:thunderbolt',
        E: 'traveloptics:neodymium_infused_mechanized_catalyst',
        H: 'traveloptics:charged_sands',
        B: 'alexscaves:scarlet_magnet',
        A: 'kubejs:auric_ingot'
    }
)
event.shaped(
    Item.of('astral_calamity_extras:hexite_ingot', 2),
    [
        ' A ',
        ' B ',
        ' C '
    ],
    {
        A: 'astral_calamity_extras:universium_ingot',
        C: 'astral_calamity_extras:devilblood_ingot',
        B: 'valoria:unstable_core'
    }
)
})