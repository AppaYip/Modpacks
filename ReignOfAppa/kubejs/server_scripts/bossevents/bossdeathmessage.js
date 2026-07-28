// Listen to the entity death event
EntityEvents.death(event => {
    // 1. Get the dying entity
    const entity = event.entity;
        // 2. Filter for a specific entity type (e.g., Zombies)
    // Remove this "if" statement if you want the command to run for ALL entities
    if (entity.type !== 'cataclysm:harbinger') return;

    // 3. Define the command you want to run
    // You can use standard execute syntax here
    `tellraw @a [{"text":"A new technological material is now in your hands. You can now fuse certain weapons together.","bold":true,"color":"#D92727"}]`;

    // 4. Run the command silently from the server
    event.server.runCommandSilent(commandToRun);

        if (entity.type !== 'mowziesmobs:ferrous_wroughtnaut') return;

    // 3. Define the command you want to run
    // You can use standard execute syntax here
    `tellraw @a [{"text":"A new plating material is available from the wroughtnaut's armor. You can now craft Tier 1 Armor sets.","bold":true,"color":"#919191"}]`;

    // 4. Run the command silently from the server
    event.server.runCommandSilent(commandToRun);
    
            if (entity.type !== 'cataclysm:harbinger') return;

    // 3. Define the command you want to run
    // You can use standard execute syntax here
    `tellraw @a [{"text":"A new plating material is available from the wroughtnaut's armor. You can now craft Tier 1 Armor sets.","bold":true,"color":"#919191"}]`;

    // 4. Run the command silently from the server
    event.server.runCommandSilent(commandToRun);
});
