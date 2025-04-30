# Base de Conocimiento para Generador de Prompts

## Estructura Modular

Esta base de conocimiento sigue una estructura modular con archivos JSON limitados a un máximo de 100-150 líneas para facilitar el mantenimiento y la extensibilidad.

## Organización Jerárquica

1. **Dominios Principales**
   - `general/` - Desarrollo General
   - `frontend/` - Desarrollo Frontend
   - `backend/` - Desarrollo Backend
   - `devops/` - DevOps y Operaciones
   - `security/` - Seguridad
   - `data/` - Gestión de Datos
   - `design/` - Diseño y UX/UI
   - `methodology/` - Metodologías de Desarrollo

2. **Categorías**
   Cada dominio se divide en categorías específicas (ej: `frontend/components/`, `security/authentication/`).

3. **Instrucciones**
   Cada archivo JSON contiene instrucciones relacionadas, sin exceder 150 líneas.

4. **Relaciones**
   Las relaciones entre instrucciones se mantienen a través de referencias por ID.

## Convenciones de Nombres

- Archivos JSON: `categoria_subcategoria.json` (usando snake_case)
- IDs de instrucciones: prefijo de dominio + número (ej: `gen001`, `fe002`)
- Referencias: mediante el campo `relatedInstructions`

## Normas de Implementación

1. Máximo 150 líneas por archivo JSON
2. Estructura bilingüe (español/inglés) en todos los textos de usuario
3. Metadatos completos para facilitar búsqueda y filtrado
4. Evitar duplicación mediante referencias
5. Mantener consistencia terminológica
