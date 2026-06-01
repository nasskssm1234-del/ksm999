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

  // Lavalink v4 multi-node.
  // Important : les anciennes variables Render LAVALINK_HOST/PORT/PASSWORD/SECURE
  // sont volontairement ignorées ici pour éviter que Render force encore un ancien node HS.
  // Node principal conseillé : Nyx, puis Ruthless en secours.
  lavalink: {
    nodes: [
      {
        name: "Nyx SG1",
        identifier: "Nyx SG1",
        host: "sg1-nodelink.nyxbot.app",
        port: 3000,
        password: "nyxbot.app/support",
        secure: false
      },
      {
        name: "Nyx SG2",
        identifier: "Nyx SG2",
        host: "sg2-nodelink.nyxbot.app",
        port: 3000,
        password: "nyxbot.app/support",
        secure: false
      },
      {
        name: "Ruthless 80",
        identifier: "Ruthless 80",
        host: "pnode.ruthless.qzz.io",
        port: 80,
        password: "senna",
        secure: false
      },
      {
        name: "AeroX Ajie 80 fallback",
        identifier: "AeroX Ajie 80 fallback",
        host: "lava-v4.ajieblogs.eu.org",
        port: 80,
        password: "https://dsc.gg/ajidevserver",
        secure: false
      }
    ]
  }
};
