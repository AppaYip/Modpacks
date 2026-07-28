ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:leather_helmet' })
    event.remove({output: 'minecraft:leather_chestplate' })
    event.remove({output: 'minecraft:leather_leggings' })
    event.remove({output: 'minecraft:leather_boots' })
    event.remove({output: 'sniffsweapons:binding_string' })

    event.remove({output: 'composite_material:echoium_ingot' })

    event.remove({output: 'dungeons_and_combat:bronze_helmet' })
    event.remove({output: 'dungeons_and_combat:bronze_chestplate' })
    event.remove({output: 'dungeons_and_combat:bronze_leggings' })
    event.remove({output: 'dungeons_and_combat:bronze_boots' })

    event.remove({output: 'minecraft:iron_helmet' })
    event.remove({output: 'minecraft:iron_chestplate' })
    event.remove({output: 'minecraft:iron_leggings' })
    event.remove({output: 'minecraft:iron_boots' })

    event.remove({output: 'ancient_elements:lead_helmet' })
    event.remove({output: 'ancient_elements:lead_chestplate' })
    event.remove({output: 'ancient_elements:lead_leggings' })
    event.remove({output: 'ancient_elements:lead_boots' })

    event.remove({output: 'composite_material:copper_helmet' })
    event.remove({output: 'composite_material:copper_chestplate' })
    event.remove({output: 'composite_material:copper_leggings' })
    event.remove({output: 'composite_material:copper_boots' })

    event.remove({output: 'alexscaves:hazmat_mask' })
    event.remove({output: 'alexscaves:hazmat_chestplate' })
    event.remove({output: 'alexscaves:hazmat_leggings' })
    event.remove({output: 'alexscaves:hazmat_boots' })

    event.remove({output: 'orevolution:livingstone_helmet' })
    event.remove({output: 'orevolution:livingstone_chestplate' })
    event.remove({output: 'orevolution:livingstone_boots' })
    event.remove({output: 'orevolution:livingstone_leggings' })

    event.remove({output: 'minecraft:golden_helmet' })
    event.remove({output: 'minecraft:golden_chestplate' })
    event.remove({output: 'minecraft:golden_leggings' })
    event.remove({output: 'minecraft:golden_boots' })

    event.remove({output: 'iter_rpg:damned_helmet' })
    event.remove({output: 'iter_rpg:damned_chestplate' })
    event.remove({output: 'iter_rpg:damned_leggings' })
    event.remove({output: 'iter_rpg:damned_boots' })

    event.shaped(
    Item.of('sniffsweapons:binding_string', 3),
    [
        'ABA',
        'BBB',
        'ABA'
    ],
    {
        B: 'minecraft:string',
        A: '#forge:plates/cardboard'
    }
)
    event.shaped(
    Item.of('minecraft:leather_helmet'),
    [
        'ABA',
        'A A',
        '   '
    ],
    {
        A: 'minecraft:leather',
        B: 'sniffsweapons:binding_string'
    }
)
event.shaped(
    Item.of('minecraft:leather_chestplate'),
    [
        'A A',
        'BAB',
        'ABA'
    ],
    {
        A: 'minecraft:leather',
        B: 'sniffsweapons:binding_string'
    }
)
event.shaped(
    Item.of('minecraft:leather_leggings'),
    [
        'ABA',
        'B B',
        'B B'
    ],
    {
        B: 'minecraft:leather',
        A: 'sniffsweapons:binding_string'
    }
)
event.shaped(
    Item.of('minecraft:leather_boots'),
    [
        '   ',
        'A A',
        'B B'
    ],
    {
        B: 'minecraft:leather',
        A: 'sniffsweapons:binding_string'
    }
)
event.shaped(
    Item.of('valoria:bronze_ingot', 2),
    [
        '   ',
        'AA ',
        'BB '
    ],
    {
        A: 'caverns_and_chasms:tin_ingot',
        B: 'minecraft:copper_ingot'
    }
)
event.shaped(
    Item.of('minecraft:iron_chestplate'),
    [
        'A A',
        'BCB',
        'ACA'
    ],
    {
        C: 'create:iron_sheet',
        A: 'iter_rpg:abstruse_cloth',
        B: 'astral_calamity_extras:wrought_armor_plating'
    }
)
event.shaped(
    Item.of('minecraft:iron_boots'),
    [
        '   ',
        'A A',
        'B B'
    ],
    {
        A: 'create:iron_sheet',
        B: 'astral_calamity_extras:wrought_armor_plating'
    }
)
event.shaped(
    Item.of('minecraft:iron_helmet'),
    [
        'ABA',
        'C C',
        '   '
    ],
    {
        C: 'create:iron_sheet',
        A: 'iter_rpg:abstruse_cloth',
        B: 'astral_calamity_extras:wrought_armor_plating'
    }
)
event.shaped(
    Item.of('minecraft:iron_leggings'),
    [
        'ABA',
        'C C',
        'C C'
    ],
    {
        C: 'create:iron_sheet',
        B: 'iter_rpg:abstruse_cloth',
        A: 'astral_calamity_extras:wrought_armor_plating'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:bronze_chestplate'),
    [
        'A A',
        'ABA',
        'AAA'
    ],
    {
        B: 'minecraft:iron_chestplate',
        A: 'dungeons_and_combat:bronze_ingot'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:bronze_helmet'),
    [
        'ABA',
        'A A',
        '   '
    ],
    {
        B: 'minecraft:iron_helmet',
        A: 'dungeons_and_combat:bronze_ingot'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:bronze_leggings'),
    [
        'ABA',
        'A A',
        'A A'
    ],
    {
        B: 'minecraft:iron_leggings',
        A: 'dungeons_and_combat:bronze_ingot'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:bronze_boots'),
    [
        '   ',
        ' A ',
        'ABA'
    ],
    {
        B: 'minecraft:iron_boots',
        A: 'dungeons_and_combat:bronze_ingot'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:exiled_chestplate'),
    [
        'A A',
        'BCB',
        'BAB'
    ],
    {
        C: 'minecraft:leather_chestplate',
        B: 'mmt:zirconium_plate',
        A: 'dungeons_and_combat:ernos_fur'
    }
)
event.shaped(
    Item.of('dungeons_and_combat:exiled_helmet'),
    [
        'ABA',
        'ACA',
        '   '
    ],
    {
        C: 'minecraft:leather_helmet',
        A: 'mmt:zirconium_plate',
        B: 'dungeons_and_combat:ernos_fur'
    }
)
event.shaped(
    Item.of('composite_material:copper_helmet'),
    [
        'ABA',
        'A A',
        '   '
    ],
    {
        B: 'minecraft:leather_helmet',
        A: 'minecraft:copper_ingot'
    }
)
event.shaped(
    Item.of('composite_material:copper_chestplate'),
    [
        'A A',
        'ABA',
        'AAA'
    ],
    {
        B: 'minecraft:leather_chestplate',
        A: 'minecraft:copper_ingot'
    }
)
event.shaped(
    Item.of('composite_material:copper_leggings'),
    [
        'ABA',
        'A A',
        'A A'
    ],
    {
        B: 'minecraft:leather_leggings',
        A: 'minecraft:copper_ingot'
    }
)
event.shaped(
    Item.of('composite_material:copper_boots'),
    [
        '   ',
        'ABA',
        'A A'
    ],
    {
        B: 'minecraft:leather_boots',
        A: 'minecraft:copper_ingot'
    }
)
event.shaped(
    Item.of('alexscaves:hazmat_mask'),
    [
        '   ',
        'ABA',
        'ACA'
    ],
    {
        C: 'minecraft:leather_helmet',
        B: 'ancient_elements:lead_ingot',
        A: 'alexscaves:polymer_plate'
    }
)
event.shaped(
    Item.of('alexscaves:hazmat_chestplate'),
    [
        'ABA',
        'ACA',
        'ABA'
    ],
    {
        C: 'minecraft:leather_chestplate',
        B: 'ancient_elements:lead_ingot',
        A: 'alexscaves:polymer_plate'
    }
)
event.shaped(
    Item.of('alexscaves:hazmat_leggings'),
    [
        'ABA',
        'C C',
        'C C'
    ],
    {
        B: 'minecraft:leather_leggings',
        A: 'ancient_elements:lead_ingot',
        C: 'alexscaves:polymer_plate'
    }
)
event.shaped(
    Item.of('alexscaves:hazmat_boots'),
    [
        ' A ',
        'BCB',
        '   '
    ],
    {
        C: 'minecraft:leather_boots',
        A: 'ancient_elements:lead_ingot',
        B: 'alexscaves:polymer_plate'
    }
)
event.shaped(
    Item.of('minecraft:golden_helmet'),
    [
        '   ',
        'ABA',
        'A A'
    ],
    {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:leather_helmet'
    }
)
event.shaped(
    Item.of('minecraft:golden_chestplate'),
    [
        'A A',
        'ABA',
        'AAA'
    ],
    {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:leather_chestplate'
    }
)
event.shaped(
    Item.of('minecraft:golden_leggings'),
    [
        'ABA',
        'A A',
        'A A'
    ],
    {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:leather_leggings'
    }
)
event.shaped(
    Item.of('minecraft:golden_boots'),
    [
        '   ',
        'ABA',
        'A A'
    ],
    {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:leather_boots'
    }
)
event.shaped(
    Item.of('iter_rpg:damned_helmet'),
    [
        'ABA',
        'BCB',
        '   '
    ],
    {
        C: 'minecraft:leather_helmet',
        B: 'iter_rpg:hollow_visage',
        A: 'iter_rpg:abyssquartz_shard'
    }
)
event.shaped(
    Item.of('iter_rpg:damned_chestplate'),
    [
        'ABA',
        'ACA',
        'BAB'
    ],
    {
        C: 'minecraft:leather_chestplate',
        B: 'iter_rpg:abyssquartz_shard',
        A: 'iter_rpg:hollow_visage'
    }
)
event.shaped(
    Item.of('iter_rpg:damned_leggings'),
    [
        'AAA',
        'BCB',
        'B B'
    ],
    {
        C: 'minecraft:leather_leggings',
        B: 'iter_rpg:hollow_visage',
        A: 'iter_rpg:abyssquartz_shard'
    }
)
event.shaped(
    Item.of('iter_rpg:damned_boots'),
    [
        '   ',
        'ABA',
        'C C'
    ],
    {
        B: 'minecraft:leather_boots',
        A: 'iter_rpg:hollow_visage',
        C: 'iter_rpg:abyssquartz_shard'
    }
)
event.shaped(
    Item.of('ancient_elements:lead_helmet'),
    [
        '   ',
        'ABA',
        'A A'
    ],
    {
        B: 'minecraft:leather_helmet',
        A: 'ancient_elements:lead_ingot'
    }
)
event.shaped(
    Item.of('ancient_elements:lead_chestplate'),
    [
        'A A',
        'ABA',
        'AAA'
    ],
    {
        B: 'minecraft:leather_chestplate',
        A: 'ancient_elements:lead_ingot'
    }
)
event.shaped(
    Item.of('ancient_elements:lead_leggings'),
    [
        'ABA',
        'A A',
        'A A'
    ],
    {
        B: 'minecraft:leather_leggings',
        A: 'ancient_elements:lead_ingot'
    }
)
event.shaped(
    Item.of('ancient_elements:lead_boots'),
    [
        '   ',
        'ABA',
        'A A'
    ],
    {
        B: 'minecraft:leather_boots',
        A: 'ancient_elements:lead_ingot'
    }
)
    })