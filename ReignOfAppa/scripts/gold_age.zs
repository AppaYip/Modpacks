import mods.itemstages.ItemStages;

// 1. Lock standard items directly
ItemStages.restrict(<item:minecraft:gold_ingot>, "gold_age");
ItemStages.restrict(<item:minecraft:raw_gold>, "gold_age");

// 2. Lock the entire tag directly (No loops or conversions needed!)
ItemStages.restrict(<tag:items:minecraft:piglin_loved>, "gold_age");
