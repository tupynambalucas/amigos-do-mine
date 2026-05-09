package com.tupynambalucas.mine.purpur.features.essentials.gamemode

import org.bukkit.GameMode
import org.bukkit.entity.Player

class GameModeService {

    /**
     * Maps an input string to a GameMode.
     * Supports:
     * 0 -> SURVIVAL
     * 1 -> CREATIVE
     * 2 -> SPECTATOR
     * (Optional) 3 -> ADVENTURE
     */
    fun parseGameMode(input: String): GameMode? {
        return when (input) {
            "0", "survival", "s" -> GameMode.SURVIVAL
            "1", "creative", "c" -> GameMode.CREATIVE
            "2", "spectator", "sp" -> GameMode.SPECTATOR
            "3", "adventure", "a" -> GameMode.ADVENTURE
            else -> null
        }
    }

    /**
     * Changes a player's gamemode.
     */
    fun setGameMode(player: Player, mode: GameMode) {
        player.gameMode = mode
    }
}
