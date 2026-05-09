package com.tupynambalucas.mine.purpur.features.essentials.world

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.World
import org.bukkit.entity.Player

class WorldService {

    fun setSun(world: World) {
        world.setStorm(false)
        world.isThundering = false
    }

    fun setRain(world: World) {
        world.setStorm(true)
    }

    fun setDay(world: World) {
        world.time = 1000 // Standard Minecraft day time
    }

    fun setNight(world: World) {
        world.time = 13000 // Standard Minecraft night time
    }

    fun notifyWorld(world: World, message: Component) {
        world.players.forEach { player ->
            player.sendMessage(message)
            player.sendActionBar(message)
        }
    }
}
