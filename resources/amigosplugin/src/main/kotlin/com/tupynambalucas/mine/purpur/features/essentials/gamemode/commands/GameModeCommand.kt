package com.tupynambalucas.mine.purpur.features.essentials.gamemode.commands

import com.tupynambalucas.mine.purpur.features.essentials.gamemode.GameModeService
import io.papermc.paper.command.brigadier.BasicCommand
import io.papermc.paper.command.brigadier.CommandSourceStack
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.entity.Player

class GameModeCommand(private val gameModeService: GameModeService) : BasicCommand {

    override fun execute(stack: CommandSourceStack, args: Array<out String>) {
        val sender = stack.sender

        if (args.isEmpty()) {
            sender.sendMessage(Component.text("Uso correto: /gm <0|1|2> [jogador]").color(NamedTextColor.RED))
            return
        }

        val mode = gameModeService.parseGameMode(args[0])
        if (mode == null) {
            sender.sendMessage(Component.text("Modo de jogo inválido! Use 0, 1 ou 2.").color(NamedTextColor.RED))
            return
        }

        // Target logic
        val target: Player? = if (args.size > 1) {
            Bukkit.getPlayer(args[1])
        } else {
            if (sender is Player) sender else null
        }

        if (target == null) {
            sender.sendMessage(Component.text("Jogador não encontrado.").color(NamedTextColor.RED))
            return
        }

        // Permission check
        val perm = if (target == sender) "amigos.gamemode" else "amigos.admin.gamemode.others"
        if (!sender.hasPermission(perm)) {
            sender.sendMessage(Component.text("Você não tem permissão para isso.").color(NamedTextColor.RED))
            return
        }

        gameModeService.setGameMode(target, mode)

        val modeName = when (mode) {
            org.bukkit.GameMode.SURVIVAL -> "Sobrevivência"
            org.bukkit.GameMode.CREATIVE -> "Criativo"
            org.bukkit.GameMode.SPECTATOR -> "Espectador"
            org.bukkit.GameMode.ADVENTURE -> "Aventura"
        }

        val message = Component.text("Modo de jogo de ")
            .append(Component.text(target.name).color(NamedTextColor.YELLOW))
            .append(Component.text(" definido para "))
            .append(Component.text(modeName).color(NamedTextColor.YELLOW))
            .append(Component.text("!"))
            .color(NamedTextColor.GREEN)

        // Notify sender
        sender.sendMessage(message)
        
        // Notify target if different from sender
        if (target != sender) {
            target.sendMessage(message)
            target.sendActionBar(message)
        } else {
            target.sendActionBar(message)
        }
    }

    override fun suggest(stack: CommandSourceStack, args: Array<out String>): Collection<String> {
        return when (args.size) {
            0, 1 -> listOf("0", "1", "2")
            2 -> Bukkit.getOnlinePlayers().map { it.name }.filter { it.startsWith(args[1], ignoreCase = true) }
            else -> emptyList()
        }
    }
}
