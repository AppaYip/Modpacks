ItemEvents.modification(event => {
  // First weapon
  // Second weapon
  event.modify('traveloptics:flames_of_eldritch', item => {
    item.attackDamage = 12
    item.fireResistant = true
  })

  // Third weapon
  event.modify('mcdw:sword_mechanized_sawblade', item => {
    item.attackDamage = 11
    item.fireResistant = true
  })

    event.modify('armageddon_mod:the_north_star', item => {
    item.attackDamage = 20
    item.fireResistant = true
  })
  event.modify('traveloptics:flames_of_eldritch', item => {
    item.attackDamage = 23
    item.fireResistant = true
  })
  event.modify('hazennstuff:ice_pike', item => {
    item.attackDamage = 18
  })
    event.modify('hazennstuff:the_devourer', item => {
    item.attackDamage = 18
  })
  event.modify('traveloptics:the_obliterator', item => {
    item.attackDamage = 20
  })
    event.modify('hazennstuff:legionnaire_warlock_axe', item => {
    item.attackDamage = 15
  })
})