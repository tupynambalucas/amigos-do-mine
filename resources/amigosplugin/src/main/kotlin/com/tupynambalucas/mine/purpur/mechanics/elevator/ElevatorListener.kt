package com.tupynambalucas.mine.purpur.mechanics.elevator

import com.destroystokyo.paper.event.player.PlayerJumpEvent
import com.tupynambalucas.mine.purpur.AmigosPlugin
import net.kyori.adventure.sound.Sound
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.Sound.ENTITY_IRON_GOLEM_HURT
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerToggleSneakEvent

class ElevatorListener(private val plugin: AmigosPlugin) : Listener {

    private val elevatorBlock: Material by lazy {
        Material.valueOf(plugin.config.getString("mechanics.elevator.block-type", "IRON_BLOCK")!!)
    }

    private val maxDistance: Int by lazy {
        plugin.config.getInt("mechanics.elevator.max-distance", 100)
    }

    @EventHandler
    fun onPlayerJump(event: PlayerJumpEvent) {
        val player = event.player
        val blockBelow = player.location.block.getRelative(0, -1, 0)
        
        if (blockBelow.type == elevatorBlock) {
            tryTeleport(player, true)
        }
    }

    @EventHandler
    fun onPlayerSneak(event: PlayerToggleSneakEvent) {
        val player = event.player
        // Only trigger on start of sneaking
        if (event.isSneaking) {
            val blockBelow = player.location.block.getRelative(0, -1, 0)
            if (blockBelow.type == elevatorBlock) {
                tryTeleport(player, false)
            }
        }
    }

    private fun tryTeleport(player: Player, up: Boolean) {
        val startLoc = player.location
        val direction = if (up) 1 else -1
        
        // When going down, skip the elevator block we are currently standing on (Y-1)
        val minOffset = if (up) 1 else 2

        for (yOffset in minOffset..maxDistance) {
            val checkY = startLoc.blockY + (yOffset * direction)
            
            // Boundary checks for Minecraft world height
            if (checkY < player.world.minHeight || checkY > player.world.maxHeight) break

            val targetBlock = player.world.getBlockAt(startLoc.blockX, checkY, startLoc.blockZ)
            
            if (targetBlock.type == elevatorBlock) {
                val dest = targetBlock.location.add(0.5, 1.0, 0.5)
                dest.yaw = startLoc.yaw
                dest.pitch = startLoc.pitch

                // Check if destination is safe (2 blocks of air/non-solid)
                if (isSafeLocation(dest)) {
                    player.teleport(dest)
                    player.playSound(Sound.sound(ENTITY_IRON_GOLEM_HURT, Sound.Source.PLAYER, 1.0f, 2.0f))
                    break
                }
            }
        }
    }

    private fun isSafeLocation(loc: Location): Boolean {
        val footBlock = loc.block
        val headBlock = loc.clone().add(0.0, 1.0, 0.0).block
        return !footBlock.type.isSolid && !headBlock.type.isSolid
    }
}
