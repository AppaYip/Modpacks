ServerEvents.recipes(event => {
    event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        " DBH ",
        "AEFGA",
        "JKILM",
        "ANOPA",
        " CQC "
    ],
    key: {
        A: { item: "celestisynth:celestial_netherite_ingot" },
        B: { item: "kubejs:quantum_alloy" },
        C: { item: "celestisynth:celestial_netherite_ingot" },
        D: { item: "cataclysm_spellbooks:murasama_blade" },
        E: { item: "hazennstuff:legionnaire_warlock_axe" },
        F: { item: "traveloptics:galenic_polarizer" },
        G: { item: "celestisynth:frostbound" },
        H: { item: "traveloptics:trident_of_the_eternal_maelstrom" },
        I: { item: "smc:excalibur" },
        J: { item: "lethality:defiled_greatsword" },
        K: { item: "brutality:deathsaw" },
        L: { item: "brutality:event_horizon" },
        M: { item: "hazennstuff:the_devourer" },
        N: { item: "lethality:devils_devastation"},
        O: { item: "lethality:starlight"},
        P: { item: "traveloptics:the_obliterator"},
        Q: { item: "traveloptics:voidstrike_reaper"}
    },
    result: {
        item: "zenith:zenith"
    }
})
event.custom({
    type: "create:haunting",
    "ingredients": [
        {
            item: "terramity:profanum", amount: 1
        },
    ],
    results: [
        {
            item: "kubejs:polarum", amount: 1
        }
    ]
})
event.custom({
    type: "create:pressing",
    "ingredients": [
        {
            item: "mmt:cobalt_ingot", amount: 1
        },
    ],
    results: [
        {
            item: "mmt:cobalt_plate", amount: 1
        }
    ]
})
event.custom({
    "type": "alexscaves_torpedoes:shadow_casting",
    "ingredients": [
        {
            item: "valoria:cobalt_ingot"
        }
    ],
    "output": {
            "item": "mmt:cobalt_ingot",
            "count": 1
      }
})
event.custom({
    type: "create:milling",
    "ingredients": [
        {
            "item": "minecraft:sculk_catalyst"
        }
    ],
    "processingTime": 50,
    "results": [
        {
            "item": "deeperdarker:soul_dust"
        }
    ]
})


event.custom({
"type": "create:sequenced_assembly",
  "ingredient": {
    "item": "deeperdarker:sculk_bone"
  },
  "loops": 1,
  "results": [
    {
      "item": "composite_material:warden_hand"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "deeperdarker:sculk_bone"
        },
        [
          {
            "item": "terramity:warden_soul"
          }
        ]
      ],
      "results": [
        {
          "item": "kubejs:warden_bone"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:warden_bone"
        },
        [
          {
            "item": "deeperdarker:soul_dust"
          }
        ]
      ],
      "results": [
        {
          "item": "kubejs:warden_bone"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:warden_bone"
        }
      ],
      "results": [
        {
          "item": "composite_material:warden_hand"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:warden_bone"
  }
})

event.remove({output: 'irons_spellbooks:scroll_forge' })
    event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        "AABAA",
        " CDC ",
        " CEC ",
        " CDC ",
        "FFGFF"
    ],
    key: {
        A: { item: "minecraft:polished_deepslate" },
        B: { item: "minecraft:reinforced_deepslate" },
        C: { item: "terramity:cosmilite_ingot" },
        D: { item: "ancient_elements:meteorite_ingot" },
        E: { item: "aquamirae:rune_of_the_storm" },
        F: { item: "iter_rpg:polished_grimstone" },
        G: { item: "minecraft:crying_obsidian"}
    },
    result: {
        item: 'irons_spellbooks:scroll_forge'
    }
})
})