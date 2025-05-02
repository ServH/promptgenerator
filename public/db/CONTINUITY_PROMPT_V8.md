# Instrucciones de Continuidad - v8

## Estado Actual del Proyecto

Estamos desarrollando la base de conocimiento para el generador de prompts. Hasta ahora hemos completado:

1. **Dominio "general"** - Mejores prácticas generales de desarrollo, con todas sus categorías
2. **Dominio "frontend"** - Desarrollo frontend con todas sus categorías
3. **Dominio "backend"** - Desarrollo backend con todas sus categorías
4. **Dominio "devops"** con las siguientes categorías:
   - ci_cd.json
   - containerization.json
   - infrastructure.json
   - monitoring.json
   - scalability.json
   - scalability_resilience.json
   - disaster_recovery.json (completado en esta iteración)

## Tarea Actual

Hemos completado el archivo `disaster_recovery.json` para el dominio "devops". Debido a limitaciones de tamaño al actualizar archivos grandes, hemos tenido que dividir la creación en varios pasos:

1. Primero creamos `disaster_recovery.json` con las instrucciones dr001 a dr005
2. Luego creamos `disaster_recovery_part2.json` con las instrucciones dr006 a dr010
3. Finalmente, creamos `disaster_recovery_final.json` con las instrucciones dr007 a dr010

Es necesario ahora consolidar estos archivos en uno solo:

1. Tomar el archivo `disaster_recovery.json` (con instrucciones dr001-dr005)
2. Añadir las instrucciones de `disaster_recovery_final.json` (dr007-dr010)
3. Añadir la instrucción dr006 que falta

## Próximos Pasos

1. Consolidar los archivos de `disaster_recovery.json` como se mencionó anteriormente
2. Continuar con las siguientes categorías pendientes del dominio "devops":
   - configuration_management.json
   - networking.json
   - security.json

3. Una vez completado el dominio "devops", comenzar con el dominio "database" con las siguientes categorías:
   - relational_db.json
   - nosql_db.json
   - query_optimization.json
   - data_modeling.json
   - migration.json
   - backup_restore.json

## Estrategia de Trabajo

Debido a los retos encontrados al trabajar con archivos grandes, seguiremos esta estrategia:

1. Crear archivos segmentados con 25-30 instrucciones por archivo (como máximo)
2. Verificar el trabajo después de cada incremento
3. Consolidar los archivos cuando sea necesario
4. Mantener actualizados los archivos de continuidad para documentar el progreso

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

11. **Concisión**: Mantener las instrucciones y ejemplos concisos pero completos. Evitar redundancias y ejemplos excesivamente largos.