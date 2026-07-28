LootJS.modifiers(event => {
    event.addEntityLootModifier('mowziesmobs:ferrous_wroughtnaut').removeLoot('mowziesmobs:wrought_axe')
    .removeLoot('mowziesmobs:wrought_helmet');
    event.addEntityLootModifier('cataclysm:ignis').removeLoot('traveloptics:flames_of_eldritch')
    event.addEntityLootModifier('cataclysm:the_leviathan').removeLoot('traveloptics:abyssal_tidecaller')
    event.addEntityLootModifier('cataclysm:ender_guardian').removeLoot('traveloptics:voidstrike_reaper')
});