# Instrucciones de Continuidad - v5

Este documento sirve como guía para mantener la continuidad en el desarrollo del proyecto de generación de prompts. Contiene el estado actual del proyecto y las tareas pendientes.

## Estado Actual del Proyecto

Estamos desarrollando la base de conocimiento para el generador de prompts, específicamente trabajando en el dominio "DevOps". Hasta ahora hemos completado:

1. **Dominio "general"** - Mejores prácticas generales de desarrollo, con todas sus categorías
2. **Dominio "frontend"** - Desarrollo frontend con todas sus categorías
3. **Dominio "backend"** - Desarrollo backend con todas sus categorías
4. **Dominio "devops"** con las siguientes categorías:
   - continuous_integration.json
   - continuous_deployment.json
   - infrastructure.json
   - monitoring.json
   - scalability.json (en desarrollo)

## Normativas Importantes

1. **Límite de instrucciones por archivo**: Cada archivo JSON debe contener entre 100-150 instrucciones como máximo para mantener un tamaño manejable.

2. **Estructura de archivos**: Se debe mantener la estructura jerárquica definida en `knowledge-base-structure.md`.

3. **Idiomas**: Todas las instrucciones deben estar en español e inglés.

4. **Categorización**: Si una categoría contiene demasiadas instrucciones, debe dividirse en subcategorías lógicas y crear archivos separados.

5. **Estructura de las instrucciones**: Cada instrucción debe seguir rigurosamente la estructura definida con todos los campos requeridos (id, title, description, text, importance, category, subcategory, tags, source, compatibility, examples, relatedInstructions).

6. **Ejemplos**: Incluir al menos un ejemplo práctico y relevante para cada instrucción.

7. **IDs**: Los IDs deben seguir el formato establecido con prefijos específicos para cada categoría.

8. **Relaciones**: Mantener referencias adecuadas entre instrucciones relacionadas.

9. **Consistencia**: Mantener un estilo consistente en todas las instrucciones y categorías.

10. **Autonomía en la refactorización**: Si en dos interacciones no es posible completar un JSON, se debe proceder autónomamente a refactorizar o segmentar el archivo para mantener la integridad y coherencia de los datos.

## Tarea Actual

- Continuar con el desarrollo del archivo `public/db/devops/scalability.json`, que incluye instrucciones relacionadas con la escalabilidad de sistemas.
- Una vez completado, seguir con la categoría "disaster_recovery" del dominio "devops".

## Próximos Pasos

1. Completar el dominio "devops" con las siguientes categorías pendientes:
   - scalability.json (en curso)
   - disaster_recovery.json
   - configuration_management.json
   - networking.json
   - security.json

2. Comenzar con el dominio "database" una vez completado el dominio "devops".

## Recursos y Referencias

- El archivo `knowledge-base-structure.md` contiene la estructura detallada de la base de conocimiento.
- El repositorio system-prompts-and-models-of-ai-tools sirve como referencia para instrucciones.

## Notas Adicionales

- Priorizar la calidad y utilidad práctica de las instrucciones sobre la cantidad.
- Asegurarse de que las instrucciones sean aplicables en entornos reales de desarrollo.
- Mantener actualizadas las referencias entre instrucciones relacionadas.
