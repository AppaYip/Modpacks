ItemEvents.modification(event => {
  event.modify('ancient_elements:aeonite_helmet', item => {
    item.armorProtection = 11;
    item.armorToughness = 7;
    item.armorKnockbackResistance = 1;
  });
  event.modify('ancient_elements:aeonite_chestplate', item => {
    item.armorProtection = 16;
    item.armorToughness = 7;
    item.armorKnockbackResistance = 1;
  });
  event.modify('ancient_elements:aeonite_leggings', item => {
    item.armorProtection = 13;
    item.armorToughness = 7;
    item.armorKnockbackResistance = 1;
  });
  event.modify('ancient_elements:aeonite_boots', item => {
    item.armorProtection = 10;
    item.armorToughness = 7;
    item.armorKnockbackResistance = 1;
  });
})