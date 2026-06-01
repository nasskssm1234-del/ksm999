// config.js
module.exports = {
  token: process.env.DISCORD_TOKEN,
  prefix: "!",
  enablePrefix: true,
  supportServer: "https://discord.gg/9MVAPpfs8D",

  activity: {
    name: "/help",
    type: "LISTENING" // PLAYING, LISTENING, WATCHING, STREAMING, COMPETING
  },

  express: {
    enabled: true,
    // Sur Render/Replit/autres hébergeurs, PORT est souvent imposé.
    // 3000 en local évite les soucis de permission liés au port 443.
    port: Number(process.env.PORT || 3000)
  },

  emojis: {
    play: "▶️",
    pause: "⏸️",
    stop: "⏹️",
    skip: "⏭️",
    queue: "📜",
    music: "🎵",
    loop: "🔁",
    shuffle: "🔀",
    volume: "🔊",
    success: "✅",
    error: "❌",
    info: "ℹ️"
  },

  aliases: {
    play: ['p'],
    pause: ['pa'],
    resume: ['r', 'res'],
    skip: ['s', 'next'],
    stop: ['st', 'leave', 'disconnect'],
    volume: ['v', 'vol'],
    queue: ['q'],
    nowplaying: ['np', 'current'],
    shuffle: ['sh', 'mix'],
    loop: ['l', 'repeat'],
    remove: ['rm', 'delete'],
    move: ['mv'],
    clearqueue: ['cq', 'clear'],
    '247': ['24/7', 'stay'],
    stats: ['status', 'info'],
    ping: ['latency'],
    invite: ['inv'],
    support: ['server'],
    help: ['h', 'commands', 'cmd']
  },

  // Lavalink node.
  // Important Render note: environment variables override these values.
  // If Render still shows lavalinkv4.serenetia.com in logs, delete/update
  // LAVALINK_HOST, LAVALINK_PORT, LAVALINK_PASSWORD and LAVALINK_SECURE on Render.
  lavalink: {
    nodes: [
      {
        name: "AeroX Ajie 443",
        identifier: "AeroX Ajie 443",
        host: process.env.LAVALINK_HOST || "lava-v4.ajieblogs.eu.org",
        port: Number(process.env.LAVALINK_PORT || 443),
        password: process.env.LAVALINK_PASSWORD || "https://dsc.gg/ajidevserver",
        secure: String(process.env.LAVALINK_SECURE || "true").toLowerCase() === "true"
      }
    ]
  }
};
