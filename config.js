// config.js
module.exports = {
  token: process.env.DISCORD_TOKEN,
  prefix: "!",
  enablePrefix: true,
  supportServer: "https://discord.gg/KuaShP4bPz",

  activity: {
    name: "Ksm V2",
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
  // Version propre : uniquement les nodes Nyx qui se connectent correctement.
  // Ruthless et AeroX/Ajie sont supprimés car ils provoquaient des erreurs 530 / 1006.
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
      }
    ]
  }
};
