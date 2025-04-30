# Prompt de Continuidad para Proyecto PromptGenerator

## Resumen de Estructura

Estamos desarrollando un generador de prompts para IA, construido con una base de conocimiento modular en formato JSON. La estructura se organiza de la siguiente manera:

```
public/db/
├── index.json              # Índice principal con metadata y estructura de dominios
├── general/               # Dominio: Desarrollo General
│   ├── code_quality_1.json   # Instrucciones de calidad de código (parte 1)
│   ├── code_quality_2.json   # Instrucciones de calidad de código (parte 2)
│   ├── architecture.json     # Instrucciones de arquitectura de software
│   ├── testing.json         # Instrucciones de testing
│   ├── documentation.json    # Instrucciones de documentación
│   ├── performance.json      # Instrucciones de rendimiento
│   └── dependencies.json    # Instrucciones de gestión de dependencias
├── frontend/              # Dominio: Desarrollo Frontend
│   ├── components.json      # Instrucciones para componentes frontend
│   ├── state_management.json # Instrucciones para gestión de estado
│   ├── responsive_design.json # Instrucciones para diseño responsive
│   └── accessibility.json   # Instrucciones para accesibilidad web
├── security/               # Dominio: Seguridad
│   └── input_validation.json # Instrucciones para validación de entrada
├── backend/               # Dominio: Desarrollo Backend (pendiente)
├── devops/                # Dominio: DevOps (pendiente)
├── data/                  # Dominio: Gestión de Datos (pendiente)
├── design/                # Dominio: Diseño (pendiente)
└── methodology/           # Dominio: Metodología (pendiente)
```

## Normas de Implementación

1. **Archivos Compactos**: Cada archivo JSON debe tener entre 100-150 líneas para facilitar su mantenimiento.
2. **Estructura Consistente**: Todos los archivos siguen el mismo formato JSON con campos estándar.
3. **Instrucciones Bilingües**: Todas las instrucciones deben tener versiones en español e inglés.
4. **IDs Únicos**: Cada instrucción tiene un ID único con prefijo por dominio (ej: "gen001", "fe001", "sec001").
5. **Referencias Cruzadas**: Las instrucciones relacionadas se vinculan mediante el campo "relatedInstructions".

## Fuente de Conocimiento

La información proviene principalmente del repositorio "`https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/`" que contiene prompts y herramientas de diversos asistentes IA (Devin, v0, Cursor, VSCode Agent, etc.). Estamos extrayendo y reorganizando este conocimiento para crear nuestro generador de prompts.

## Progreso Actual

- **Completado (25%)**:
  - Estructura base y organización de directorios ✅
  - Dominio "general" con todas sus categorías ✅
  - Dominio "frontend" con todas sus categorías ✅
  - Inicio del dominio "security" ✅

- **Pendiente (75%)**:
  - Completar dominio "security" con categorías adicionales
  - Implementar dominio "backend" y sus categorías
  - Implementar dominios: "devops", "data", "design", "methodology"
  - Migrar y reorganizar contenido relevante de los JSON originales

## Próximos Pasos Recomendados

1. Completar las categorías adicionales para el dominio "security"
2. Implementar el dominio "backend" con las siguientes categorías recomendadas:
   - api_design.json
   - data_access.json
   - authentication.json
   - error_handling.json
   - performance.json
3. Continuar con los dominios restantes

## Formato de Instrucciones

Cada instrucción debe seguir esta estructura:

```json
{
  "id": "dominio000",
  "title": {
    "es": "Título en español",
    "en": "Title in English"
  },
  "description": {
    "es": "Breve descripción en español",
    "en": "Brief description in English"
  },
  "text": {
    "es": "Texto completo de la instrucción en español...",
    "en": "Full instruction text in English..."
  },
  "importance": "high|medium|low",
  "category": "categoría_principal",
  "subcategory": "subcategoría",
  "tags": ["tag1", "tag2"],
  "source": {
    "agentType": "nombre_del_agente",
    "repository": "Ruta/en/repositorio",
    "context": "Sección o contexto"
  },
  "compatibility": {
    "frameworks": ["framework1", "framework2"],
    "languages": ["language1", "language2"],
    "environments": ["environment1", "environment2"]
  },
  "examples": [{
    "context": {
      "es": "Contexto del ejemplo en español",
      "en": "Example context in English"
    },
    "code": "// Código de ejemplo\n"
  }],
  "relatedInstructions": ["id_de_instrucción_relacionada1", "id2"]
}
```

## Nota para el Continuador

Tu tarea es continuar el desarrollo de la base de conocimiento siguiendo la estructura y normas establecidas. Enfócate primero en completar el dominio de seguridad, luego el de backend, y después continúa con los dominios restantes en el orden sugerido. Extrae conocimiento valioso del repositorio fuente, reorganízalo según nuestra estructura, y asegúrate de mantener la coherencia en formato y estilo con los archivos ya existentes.

La base de conocimiento debe ser completa, bilingüe y modular, manteniendo siempre los archivos por debajo de 150 líneas para facilitar su mantenimiento.