package com.tupynambalucas.mine.purpur.features.essentials

import com.tupynambalucas.mine.purpur.AmigosPlugin
import com.tupynambalucas.mine.purpur.features.essentials.spawn.commands.SetSpawnCommand
import com.tupynambalucas.mine.purpur.features.essentials.spawn.commands.SpawnCommand
import com.tupynambalucas.mine.purpur.features.essentials.spawn.SpawnService
import com.tupynambalucas.mine.purpur.features.essentials.speed.SpeedService
import com.tupynambalucas.mine.purpur.features.essentials.speed.commands.SpeedCommand
import com.tupynambalucas.mine.purpur.features.essentials.gamemode.GameModeService
import com.tupynambalucas.mine.purpur.features.essentials.gamemode.commands.GameModeCommand
import com.tupynambalucas.mine.purpur.features.essentials.world.WorldService
import com.tupynambalucas.mine.purpur.features.essentials.world.commands.*
import io.papermc.paper.command.brigadier.Commands

object EssentialsFeature {
    fun registerCommands(plugin: AmigosPlugin, commands: Commands) {
        // Dependency Injection
        val spawnService = SpawnService(plugin)
        val speedService = SpeedService()
        val gameModeService = GameModeService()
        val worldService = WorldService()

        // Register Commands with dependencies injected
        commands.register("setspawn", SetSpawnCommand(spawnService))
        commands.register("spawn", SpawnCommand(spawnService))
        commands.register("speed", SpeedCommand(speedService))
        commands.register("gm", GameModeCommand(gameModeService))

        commands.register("sun", SunCommand(worldService))
        commands.register("rain", RainCommand(worldService))
        commands.register("day", DayCommand(worldService))
        commands.register("night", NightCommand(worldService))
    }
}
