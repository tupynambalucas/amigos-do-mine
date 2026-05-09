package com.tupynambalucas.mine.purpur.features.essentials.world.commands

import com.tupynambalucas.mine.purpur.features.essentials.world.WorldService
import io.papermc.paper.command.brigadier.BasicCommand
import io.papermc.paper.command.brigadier.CommandSourceStack
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.entity.Player

abstract class WorldCommand(protected val worldService: WorldService, private val permission: String) : BasicCommand {
    override fun execute(stack: CommandSourceStack, args: Array<out String>) {
        val sender = stack.sender
        val world = if (sender is Player) sender.world else org.bukkit.Bukkit.getWorlds()[0]

        if (!sender.hasPermission(permission)) {
            sender.sendMessage(Component.text("Você não tem permissão para usar este comando.").color(NamedTextColor.RED))
            return
        }

        applyChange(world)
        val message = getSuccessMessage()
        worldService.notifyWorld(world, message)
    }

    abstract fun applyChange(world: org.bukkit.World)
    abstract fun getSuccessMessage(): Component
}

class SunCommand(worldService: WorldService) : WorldCommand(worldService, "amigos.world.sun") {
    override fun applyChange(world: org.bukkit.World) = worldService.setSun(world)
    override fun getSuccessMessage() = Component.text("O tempo foi definido como limpo!").color(NamedTextColor.YELLOW)
}

class RainCommand(worldService: WorldService) : WorldCommand(worldService, "amigos.world.rain") {
    override fun applyChange(world: org.bukkit.World) = worldService.setRain(world)
    override fun getSuccessMessage() = Component.text("O tempo foi definido como chuvoso!").color(NamedTextColor.BLUE)
}

class DayCommand(worldService: WorldService) : WorldCommand(worldService, "amigos.world.day") {
    override fun applyChange(world: org.bukkit.World) = worldService.setDay(world)
    override fun getSuccessMessage() = Component.text("O tempo foi definido para o dia!").color(NamedTextColor.GOLD)
}

class NightCommand(worldService: WorldService) : WorldCommand(worldService, "amigos.world.night") {
    override fun applyChange(world: org.bukkit.World) = worldService.setNight(world)
    override fun getSuccessMessage() = Component.text("O tempo foi definido para a noite!").color(NamedTextColor.DARK_PURPLE)
}
