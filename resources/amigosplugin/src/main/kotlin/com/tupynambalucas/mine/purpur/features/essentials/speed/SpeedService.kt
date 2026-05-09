package com.tupynambalucas.mine.purpur.features.essentials.speed

import org.bukkit.entity.Player

class SpeedService {

    /**
     * Sets the player's speed.
     * If the player is flying, sets fly speed.
     * Otherwise, sets walk speed.
     * 
     * @param player The player to modify
     * @param speedValue The speed value (1-10 range typically, mapped to 0.1-1.0)
     */
    fun setSpeed(player: Player, speedValue: Float) {
        // Map 1.0-10.0 to 0.1-1.0. Default walk is 0.2 (2), default fly is 0.1 (1).
        // A value of 10 would be 1.0 (max).
        val internalSpeed = (speedValue / 10.0f).coerceIn(-1.0f, 1.0f)

        if (player.isFlying) {
            player.flySpeed = internalSpeed
        } else {
            player.walkSpeed = internalSpeed
        }
    }
}
