# Cumbre II – online mode

    node online-server.js        # needs Node 18+, no npm install
    # open http://localhost:8080 in two tabs/devices -> Multijugador -> Online

- PORT=3000 node online-server.js   changes the port.
- To play over the internet, run it on any host that supports Node + WebSockets
  (Render, Railway, Fly.io, a VPS...) and share the URL, or tunnel your machine
  (e.g. cloudflared / ngrok) -> both players open the public URL.
- Game hosted separately from the server? Add ?ws=wss://your-server/ws to the game URL.
- On Websim the built-in WebsimSocket is still used automatically.

## Multijugador local 2-4 jugadores + mandos
- Menú → Multijugador → **Todos contra todos** (2 a 4 jugadores, con CPU opcional).
- **Mandos y jugadores** (también en Ajustes): asigna a cada jugador Teclado 1, Teclado 2, Mando 1-4, CPU o Libre.
  - Pulsa **A** en un mando para unirte al primer hueco libre.
  - ↑/↓ cambia el dispositivo del jugador seleccionado; si ya lo usa otro jugador, se intercambian.
  - Los puntos de colores muestran en vivo qué botones se pulsan.
- La asignación también se aplica a los modos de 2 jugadores (dos mandos a la vez ya funciona).
- Online sigue siendo 1 contra 1.

## Reglas (estilo Smash) y objetos
- En la selección de personaje: **R**, **Start** (mando) o el botón ⚙ de arriba a la derecha.
- Reglas: vidas, límite de tiempo, frecuencia de objetos, daño recibido, daño inicial, velocidad de juego, gravedad, smash final y qué objetos pueden aparecer (33 en total).
- Se guardan en el navegador. No se aplican a Historia, Supervivencia, Entrenamiento ni Online.
- Con límite de tiempo, gana quien tenga más vidas y, en empate, menos daño.

## Misiones (Solitario → Misiones)
- Retos especiales con historia propia, con diálogos y marca de **COMPLETADA ✔** (se guarda en el navegador).
- **Escapa de tu pasado**: te enfrentas a Fuego, Rayo y Roca tal y como eran en la v0.1, ladrillos redondeados con ojos.
  Si pierdes, repites el mismo combate. Las reglas personalizadas no se aplican en misiones.
- Ahora hay **10 misiones** (la lista se desplaza con W/S): Escapa de tu pasado, Tormenta perfecta, Paso helado, Corazón del volcán, Noche sin luna, Selva viva, Noche neón, Más allá del cielo, Guardianes del alba y Maratón de la Cumbre (6 duelos, una vida por duelo).
- Para añadir otra misión usa `mkM(id, icono, [nombre ES, EN], [desc ES, EN], foes, maps, [intro ES, EN], [[pre ES, pre EN, after ES, after EN], ...], [final ES, EN], {st, lv})` en `game.js`: una fila por rival, y traduce al inglés automáticamente. `st` = vidas por duelo (por defecto 3), `lv` = dificultad base de la IA (por defecto 1).

## Escudo y agarre (estilo Smash)
Dos botones nuevos en teclado, mando, táctil y online.

| | Escudo (mantener) | Agarre |
|---|---|---|
| Teclado 1 | **Q** | **E** |
| Teclado 2 | **O** | **P** |
| Mando | **LT / RT** (gatillos) | **B** o **LB** (RB sigue siendo el smash final) |
| Móvil | botón **ESCUDO** | botón **AGARRE** |

**Escudo**
- Mantén el botón: burbuja que absorbe golpes y proyectiles. Se encoge (y pasa de verde a rojo) a medida que recibe daño o pasa el tiempo; se recupera sola al soltar.
- Si se agota, **se rompe**: quedas aturdido ~2 s.
- **Escudo perfecto**: pulsa justo antes de que te golpeen y no gastas escudo ni retrocedes.
- Escudo + **←/→** = esquivar rodando · Escudo + **↓** = esquive en el sitio (ambos invulnerables un instante) · Escudo + **saltar** = salto desde el escudo · Escudo + **golpe** = agarre.
- En el aire, **escudo = esquive aéreo** (una vez por salto, puedes dirigirlo).
- El smash final no se puede bloquear.

**Agarre**
- Atraviesa el escudo, pero falla contra un esquive. Si fallas, quedas un instante vulnerable.
- Mientras sujetas: **golpe** = puñetazo (daño pequeño) · **←/→/↑/↓** (o agarre otra vez) = lanzar en esa dirección.
- El agarrado puede forcejear pulsando botones; cuanto más daño acumula, menos aguanta.
- La CPU también usa escudo y agarre (agarra a quien se escuda).

**Online**: el servidor reenvía las acciones nuevas (`h` = escudo, `g` = agarre). Si alojas tu propio servidor, actualiza `server.js` y `online-server.js`.

## Chromebook (alojar el servidor y jugar)
1. **Activa Linux**: Ajustes → Avanzado → Desarrolladores → *Entorno de desarrollo de Linux* → Activar (instala ~10 GB máx.; no disponible en algunos Chromebooks de colegio/empresa).
2. Descomprime el zip (arrastra la carpeta a *Archivos de Linux*) y abre la app **Terminal**:
       cd cumbre_ii_4p        # o el nombre de tu carpeta
       bash start-chromebook.sh
   La primera vez instala Node 18+ (pide tu contraseña de Linux). Después solo arranca el servidor.
3. **Jugar en el propio Chromebook**: abre Chrome en `http://localhost:8080` (o `http://penguin.linux.test:8080`) en dos pestañas → Multijugador → Online.
4. **Que otros se conecten (misma Wi-Fi)**: Ajustes → Avanzado → Desarrolladores → Linux → **Reenvío de puertos** → añade TCP `8080`. Los demás abren `http://IP-DEL-CHROMEBOOK:8080` (la IP está en Ajustes → Red → tu Wi-Fi; el servidor también la muestra al arrancar).
5. **Por internet**: instala `cloudflared` (o ngrok) en Linux y ejecuta `cloudflared tunnel --url http://localhost:8080`; comparte la URL `https://…` que te da. El juego usa `wss://` solo.
- Cambiar puerto: `PORT=3000 bash start-chromebook.sh` (y reenvía ese puerto).
- Teclado de Chromebook: no tiene Ñ en algunos idiomas; el Jugador 2 usa la tecla física `;` (Ñ en teclado español) y **O / P** para escudo y agarre. Con mando USB/Bluetooth todo funciona igual.
- Chromebook táctil: los botones en pantalla aparecen solos; si molestan al usar teclado, añade `?touch=0` a la URL.
- Si el Chromebook se duerme, el servidor se para: mantén la pantalla activa mientras jugáis.
