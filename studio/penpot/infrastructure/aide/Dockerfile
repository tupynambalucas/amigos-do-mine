FROM node:22-slim

# Instala pnpm e dependências do sistema para o Sharp (usado pelo Penpot MCP)
RUN npm install -g pnpm && \
    apt-get update && apt-get install -y libvips-dev && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# O comando npx @penpot/mcp baixa o código e o compila. 
CMD ["npx", "-y", "@penpot/mcp@2.14.1"]
