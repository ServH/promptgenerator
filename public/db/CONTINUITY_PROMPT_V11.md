# Instrucciones de Continuidad - v11

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
   - disaster_recovery.json
   - configuration_management_part1.json
   - configuration_management_part2.json
   - networking_part1.json
   - networking_part2.json
   - security.json
5. **Dominio "database"** con las siguientes categorías:
   - relational_db.json
   - nosql_db.json
   - query_optimization.json (dividido en múltiples partes: part1, part2, part3, part4)

## Progreso Actual

Hemos completado las siguientes tareas desde la última actualización:

1. **Se ha finalizado** el archivo "query_optimization.json" del dominio "database", dividiéndolo en múltiples partes para facilitar su manejo (25 instrucciones en total).
2. Se continúa utilizando el enfoque de explicaciones conceptuales en lugar de bloques de código extensos para optimizar el espacio y proporcionar mayor valor semántico.

## Próximos Pasos

Continuaremos con el desarrollo del dominio "database" en el siguiente orden:

1. **Categorías pendientes** del dominio "database":
   - data_modeling.json
   - migration.json
   - backup_restore.json

2. Una vez completado el dominio "database", continuaremos con el dominio "security" con las siguientes categorías:
   - auth_identity.json
   - encryption.json
   - vulnerability_management.json
   - secure_coding.json
   - compliance.json

3. **Tarea final (al completar todo el scrapeo del repositorio)**: Refactorizar los archivos JSON creados antes del cambio de enfoque para que sigan el mismo formato conceptual. Esto unificará toda la base de conocimientos con un estilo coherente y aprovechará el espacio liberado para enriquecer el contenido.

## Estrategia de Trabajo Actualizada

1. Crear archivos con contenido conceptual en lugar de código extenso
2. Priorizar explicaciones claras de los conceptos, patrones y prácticas recomendadas
3. Verificar el trabajo después de cada incremento
4. Mantener actualizados los archivos de continuidad para documentar el progreso
5. Dividir archivos grandes en partes más pequeñas para facilitar su manejo y garantizar la finalización de la carga de archivos (como hemos hecho con query_optimization.json)

## Normativas Importantes

1. **Límite de instrucciones por archivo**: Cada archivo JSON debe contener entre 100-150 instrucciones como máximo para mantener un tamaño manejable.

2. **Estructura de archivos**: Se debe mantener la estructura jerárquica definida en `knowledge-base-structure.md`.

3. **Idiomas**: Todas las instrucciones deben estar en español e inglés.

4. **Categorización**: Si una categoría contiene demasiadas instrucciones, debe dividirse en subcategorías lógicas y crear archivos separados.

5. **Estructura de las instrucciones**: Cada instrucción debe seguir rigurosamente la estructura definida con todos los campos requeridos (id, title, description, text, importance, category, subcategory, tags, source, compatibility, examples, relatedInstructions).

6. **Ejemplos**: Incluir al menos un ejemplo práctico y relevante para cada instrucción, utilizando el enfoque conceptual en lugar de código extenso.

7. **IDs**: Los IDs deben seguir el formato establecido con prefijos específicos para cada categoría.

8. **Relaciones**: Mantener referencias adecuadas entre instrucciones relacionadas.

9. **Consistencia**: Mantener un estilo consistente en todas las instrucciones y categorías.

10. **Autonomía en la refactorización**: Si en dos interacciones no es posible completar un JSON, se debe proceder autónomamente a refactorizar o segmentar el archivo para mantener la integridad y coherencia de los datos.

11. **Concisión**: Mantener las instrucciones y ejemplos concisos pero completos. Evitar redundancias y ejemplos excesivamente largos.

12. **Enfoque conceptual**: Priorizar la explicación de conceptos, patrones y mejores prácticas en lugar de proveer implementaciones específicas de código extenso.

13. **División en partes**: Cuando sea necesario, dividir el contenido en múltiples archivos (parte1, parte2, etc.) para garantizar el manejo eficiente y la finalización de la carga de archivos.
