# Instrucciones de Continuidad - v7

## Estado Actual del Proyecto

Estamos desarrollando la base de conocimiento para el generador de prompts, específicamente los archivos JSON para el dominio "devops". Hasta ahora hemos:

1. Completado el dominio "general" - Mejores prácticas generales de desarrollo
2. Completado el dominio "frontend" - Desarrollo frontend con todas sus categorías
3. Completado el dominio "backend" - Desarrollo backend con todas sus categorías
4. Trabajando en el dominio "devops" con las siguientes categorías completadas:
   - ci_cd.json
   - containerization.json
   - infrastructure.json
   - monitoring.json
   - scalability.json
   - scalability_resilience.json

## Trabajo Actual

Actualmente estamos creando el archivo `disaster_recovery.json` para el dominio "devops". Debido a limitaciones al trabajar con archivos grandes, hemos dividido el trabajo en dos archivos:

1. `disaster_recovery.json` - Contiene las instrucciones dr001 a dr005
2. `disaster_recovery_part2.json` - Contiene las instrucciones dr006 a dr010

## Próximos Pasos

1. Combinar los dos archivos `disaster_recovery.json` y `disaster_recovery_part2.json` en uno solo
2. Continuar con las siguientes categorías pendientes del dominio "devops":
   - configuration_management.json
   - networking.json
   - security.json

3. Una vez completado el dominio "devops", comenzar con el dominio "database" con las categorías:
   - relational_db.json
   - nosql_db.json
   - query_optimization.json
   - data_modeling.json
   - migration.json
   - backup_restore.json

## Estrategia de Trabajo

Para evitar problemas con archivos grandes y la limitación al actualizar archivos extensos, vamos a:

1. Trabajar en incrementos más pequeños (25-30 instrucciones por archivo)
2. Combinar los archivos cuando sea necesario para mantener la estructura
3. Verificar la integridad de los archivos después de cada actualización
4. Crear archivos de continuidad actualizados para mantener el seguimiento del progreso

## Normativas importantes

1. **Límite de instrucciones por archivo**: Cada archivo JSON debe contener entre 100-150 instrucciones como máximo para mantener un tamaño manejable.

2. **Estructura de archivos**: Se debe mantener la estructura jerárquica definida en `knowledge-base-structure.md`.

3. **Idiomas**: Todas las instrucciones deben estar en español e inglés.

4. **Categorización**: Si una categoría contiene demasiadas instrucciones, debe dividirse en subcategorías lógicas y crear archivos separados.

5. **Estructura de las instrucciones**: Cada instrucción debe seguir rigurosamente la estructura definida con todos los campos requeridos.

6. **Ejemplos**: Incluir al menos un ejemplo práctico y relevante para cada instrucción.

7. **IDs**: Los IDs deben seguir el formato establecido con prefijos específicos para cada categoría.

8. **Relaciones**: Mantener referencias adecuadas entre instrucciones relacionadas.

9. **Consistencia**: Mantener un estilo consistente en todas las instrucciones y categorías.

10. **Autonomía en la refactorización**: Si en dos interacciones no es posible completar un JSON, se debe proceder autónomamente a refactorizar o segmentar el archivo para mantener la integridad y coherencia de los datos.