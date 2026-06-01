# Lavalink Render Setup

Configuration actuelle conseillée : **Nyx uniquement**.

## Nodes actifs

```txt
Nyx SG1 : sg1-nodelink.nyxbot.app:3000 secure=false
Nyx SG2 : sg2-nodelink.nyxbot.app:3000 secure=false
Password : nyxbot.app/support
```

## Important

Ruthless 80 a été retiré car il retournait :

```txt
Unexpected server response: 530
Disconnect reason: 1006
```

AeroX/Ajie a aussi été retiré pour éviter les erreurs de certificat SSL ou de déconnexion.

Sur Render, tu peux laisser les variables LAVALINK_HOST/PORT/PASSWORD/SECURE vides : le fichier `config.js` utilise directement Nyx SG1 et Nyx SG2.
