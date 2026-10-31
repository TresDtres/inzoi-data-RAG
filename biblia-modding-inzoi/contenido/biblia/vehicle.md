# Vehicle

Vehicle es el proyecto **mas estructurado** del ModKit: un vehiculo se describe en seis bloques (general, apariencia, animaciones, slots, objetos, bounds y audio), y v0.11 añadio un asistente con jerarquia de partes y mejor UX de seleccion/edicion.

## Estructura del proyecto

1. **General**: identidad del vehiculo (nombre, tipo, plantilla base).
2. **Appearance**: mallas de carroceria, materiales y variantes de color.
3. **Animation**: animaciones de entrada/salida, conduccion y eventos (los AnimNotify `EnterVehicle` / `ExitVehicle` / `ChangeVehiclePartState` viven aqui).
4. **Slots**: puntos de anclaje de piezas y accesorios.
5. **Objects**: objetos interactuables dentro del vehiculo.
6. **Bounds & Audio**: volumenes de colision y sonido del motor.

## Flujo recomendado (copiar y reemplazar)

1. Crea el proyecto Vehicle o parte de una **plantilla** (`modkit_create_vehicle_template` monta la estructura completa).
2. Reemplaza las mallas de carroceria por tus FBX (apariencia).
3. Ajusta slots y bounds a las dimensiones de tu modelo: bounds mal ajustados = camara clavada o colisiones invisibles.
4. Anima entrada/salida copiando los tiempos de un vehiculo vanilla del mismo tipo.
5. Compila y prueba en vivo montando el vehiculo en la partida.

## Reglas practicas

- La **jerarquia de partes** del asistente (v0.11) es la referencia: no muevas piezas fuera de su nivel.
- Los objetos que el Zoi puede usar dentro (asiento, radio) heredan interaccion del objeto vanilla equivalente.
- El audio por estado (marcha, ralentí) se asigna por bloques de estado, igual que Object Sound.

## Con MCP (WF-15: editar un vehiculo)

```
python tools/mcp_client.py modkit modkit_create_project '{"name": "MiCoche", "type": "VEHICLE"}'
python tools/mcp_client.py modkit modkit_set_vehicle_slot_data '{...}'
python tools/mcp_client.py modkit modkit_set_vehicle_seat_anim '{...}'
python tools/mcp_client.py modkit modkit_set_vehicle_owned_object '{...}'
```

Las herramientas `modkit_set_vehicle_*` (nuevas en la actualizacion del ModKit de octubre) editan slots, animaciones de asiento y objetos del vehiculo sin recompilar todo.
