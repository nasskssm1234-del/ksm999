# Lavalink Render fix

Node par défaut configuré :

```txt
host: lava-v4.ajieblogs.eu.org
port: 443
password: https://dsc.gg/ajidevserver
secure: true
```

Sur Render, vérifie surtout les Environment Variables.
Si les logs affichent encore `lavalinkv4.serenetia.com`, c’est que Render garde une ancienne variable.

À mettre dans Render > Environment :

```txt
LAVALINK_HOST=lava-v4.ajieblogs.eu.org
LAVALINK_PORT=443
LAVALINK_PASSWORD=https://dsc.gg/ajidevserver
LAVALINK_SECURE=true
```

Puis fais Manual Deploy > Clear build cache and deploy.
