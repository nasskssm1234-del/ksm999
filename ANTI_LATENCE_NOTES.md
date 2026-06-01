# Version anti-latence prudente

Modifications faites sans changer la structure du bot :

1. Recherche YouTube plus directe
- Passage de `ytmsearch` à `ytsearch`.
- Objectif : réduire le temps de recherche pour les titres classiques.

2. Cache de recherche 5 minutes
- Si quelqu'un rejoue la même musique ou la même recherche, le bot réutilise le résultat récent.
- Objectif : éviter des recherches Lavalink/YouTube répétées.

3. Feedback plus rapide pour `!play`
- Le bot répond plus vite avec un message de chargement pendant la recherche.

4. Sécurité de démarrage lecture
- Si la lecture ne part pas directement, le bot retente légèrement après 750 ms.

5. Volume conservé à 35 %
- Les corrections volume précédentes sont gardées.

Limite importante :
Si la latence vient du node Lavalink public ou de Render, aucun fichier JavaScript ne peut la supprimer à 100 %.
Pour une vraie stabilité 9/10, il faut un Lavalink privé ou premium avec LavaSrc.
