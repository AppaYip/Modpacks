EntityEvents.spawned(event => {
  const e = event.entity

  // Check for IGNIS
  if (e.type == 'cataclysm:ignis') {
    // Prevent multiple triggers
    if (!e.persistentData.getBoolean('announced')) {
      e.persistentData.putBoolean('announced', true)

      // Big title
      event.server.runCommandSilent(
        `title @a title {"text":"Rapture of Fire","color":"#FF6200","bold":true}`
      )

      // Subtitle
      event.server.runCommandSilent(
        `title @a subtitle {"text":"Ignis","color":"#FFAE00"}`
      )

      // Timing (fade in, stay, fade out)
      event.server.runCommandSilent(`title @a times 10 60 20`)
    }
  }

  // Check for LEVIATHAN
  if (e.type == 'cataclysm:the_leviathan') {
    // Prevent multiple triggers
    if (!e.persistentData.getBoolean('announced')) {
      e.persistentData.putBoolean('announced', true)

      // Big title
      event.server.runCommandSilent(
        `title @a title {"text":"Scourge of the Abyss","color":"#6600ff","bold":true}`
      )

      // Subtitle
      event.server.runCommandSilent(
        `title @a subtitle {"text":"The Leviathan","color":"#0D0024"}`
      )

      // Timing (fade in, stay, fade out)
      event.server.runCommandSilent(`title @a times 10 60 20`)
    }
  }

  // Check for IRON COLOSSUS
  if (e.type == 'armageddon_mod:the_iron_colossus') {
    // Prevent multiple triggers
    if (!e.persistentData.getBoolean('announced')) {
      e.persistentData.putBoolean('announced', true)

      // Big title
      event.server.runCommandSilent(
        `title @a title {"text":"Elite Golem","color":"#adc2c2","bold":true}`
      )

      // Subtitle
      event.server.runCommandSilent(
        `title @a subtitle {"text":"The Iron Colossus","color":"#b5b5b5"}`
      )

      // Timing (fade in, stay, fade out)
      event.server.runCommandSilent(`title @a times 10 60 20`)
    }
  }

  // Check for HARBINGER
  if (e.type == 'cataclysm:the_harbinger') {
    // Prevent multiple triggers
    if (!e.persistentData.getBoolean('announced')) {
      e.persistentData.putBoolean('announced', true)

      // Big title
      event.server.runCommandSilent(
        `title @a title {"text":"First Prototype","color":"#D60000"}`
      )

      // Subtitle
      event.server.runCommandSilent(
        `title @a subtitle {"text":"The Harbinger","color":"#453434"}`
      )

      // Timing (fade in, stay, fade out)
      event.server.runCommandSilent(`title @a times 10 60 20`)
    }
  }
})