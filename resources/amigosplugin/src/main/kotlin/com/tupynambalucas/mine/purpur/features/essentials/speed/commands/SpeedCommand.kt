package com.tupynambalucas.mine.purpur.features.essentials.speed.commands

import com.tupynambalucas.mine.purpur.features.essentials.speed.SpeedService
import io.papermc.paper.command.brigadier.BasicCommand
import io.papermc.paper.command.brigadier.CommandSourceStack
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.entity.Player

class SpeedCommand(private val speedService: SpeedService) : BasicCommand {
    override fun execute(stack: CommandSourceStack, args: Array<out String>) {
        val sender = stack.sender
        if (sender !is Player) {
            sender.sendMessage(Component.text("Apenas jogadores podem usar este comando.").color(NamedTextColor.RED))
            return
        }

        if (!sender.hasPermission("amigos.speed")) {
            sender.sendMessage(Component.text("Você não tem permissão para usar o comando de velocidade.").color(NamedTextColor.RED))
            return
        }

        if (args.isEmpty()) {
            sender.sendMessage(Component.text("Uso correto: /speed <numero>").color(NamedTextColor.RED))
            return
        }

        val speedValue = args[0].toFloatOrNull()
        if (speedValue == null) {
            sender.sendMessage(Component.text("Por favor, insira um número válido para a velocidade.").color(NamedTextColor.RED))
            return
        }

        speedService.setSpeed(sender, speedValue)
        
        val mode = if (sender.isFlying) "voando" else "andando"
        val message = Component.text("Velocidade ")
            .append(Component.text(mode).color(NamedTextColor.YELLOW))
            .append(Component.text(" definida para "))
            .append(Component.text(speedValue.toString()).color(NamedTextColor.YELLOW))
            .append(Component.text("!"))
            .color(NamedTextColor.GREEN)

        sender.sendMessage(message)
        sender.sendActionBar(message)
    }

    override fun suggest(stack: CommandSourceStack, args: Array<out String>): Collection<String> {
        if (args.size <= 1) {
            return listOf("1", "2", "3", "4", "5", "10")
        }
        return emptyList()
    }
}
