plugins {
    kotlin("jvm") version "2.3.0"
    id("com.gradleup.shadow") version "9.4.1"
}

group = "com.tupynambalucas.amigosdomine"
version = "1.0-SNAPSHOT"

sourceSets {
    main {
    }
}

repositories {
    mavenCentral()
    maven("https://repo.purpurmc.org/snapshots")
    maven("https://maven.elmakers.com/repository/")
    maven("https://repo.papermc.io/repository/maven-public/")
}

dependencies {
    compileOnly("org.purpurmc.purpur", "purpur-api", "1.21.1-R0.1-SNAPSHOT")
    // Magic API (Using local jar as requested)
    compileOnly(files("../../minecraft/server/plugins/Magic-10.11.1.jar"))

    compileOnly("org.apache.commons:commons-lang3:3.20.0")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
}

val targetJavaVersion = 21
kotlin {
    jvmToolchain(targetJavaVersion)
}

tasks.build {
    dependsOn("shadowJar")
}

tasks.withType<com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar> {
    destinationDirectory.set(file("./out"))
    mergeServiceFiles()
    archiveFileName.set("AmigosPlugin.jar")
}

tasks.processResources {
    val props = mapOf("version" to version)
    inputs.properties(props)
    filesMatching("paper-plugin.yml") {
        expand(props)
    }
}