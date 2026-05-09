FROM eclipse-temurin:25-jre-alpine

LABEL maintainer="Amigos Do Mine Team"

# Install necessary tools
RUN apk add --no-cache curl bash eudev-libs

# Create a non-root user to run the server
RUN addgroup -S minecraft && adduser -S minecraft -G minecraft

# Set the working directory
WORKDIR /data

# Default environment variables (can be overridden by .env or compose)
ENV MC_JAR_NAME=server.jar \
    MC_MIN_MEM=1G \
    MC_MAX_MEM=2G

# Expose the default Minecraft port
EXPOSE 25565

# Ensure the minecraft user owns the data directory
RUN chown -R minecraft:minecraft /data

# Switch to the non-root user
USER minecraft

# Use exec to ensure the java process receives signals (SIGTERM, etc.)
CMD ["sh", "-c", "exec java -Xms${MC_MIN_MEM} -Xmx${MC_MAX_MEM} -XX:+UseG1GC -jar ${MC_JAR_NAME} nogui"]