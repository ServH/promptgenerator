# Prompt de Continuidad V4 para Proyecto PromptGenerator

## Resumen de Estructura Actual

Estamos desarrollando un generador de prompts para IA, construido con una base de conocimiento modular en formato JSON. La estructura se organiza de la siguiente manera:

```
public/db/
├── index.json              # Índice principal con metadata y estructura de dominios
├── general/               # Dominio: Desarrollo General (COMPLETADO)
│   ├── code_quality_1.json   # Instrucciones de calidad de código (parte 1)
│   ├── code_quality_2.json   # Instrucciones de calidad de código (parte 2)
│   ├── architecture.json     # Instrucciones de arquitectura de software
│   ├── testing.json         # Instrucciones de testing
│   ├── documentation.json    # Instrucciones de documentación
│   ├── performance.json      # Instrucciones de rendimiento
│   └── dependencies.json    # Instrucciones de gestión de dependencias
├── frontend/              # Dominio: Desarrollo Frontend (COMPLETADO)
│   ├── components.json      # Instrucciones para componentes frontend
│   ├── state_management.json # Instrucciones para gestión de estado
│   ├── responsive_design.json # Instrucciones para diseño responsive
│   └── accessibility.json   # Instrucciones para accesibilidad web
├── security/              # Dominio: Seguridad (COMPLETADO)
│   ├── input_validation.json # Instrucciones para validación de entrada
│   ├── authentication.json   # Instrucciones para autenticación
│   ├── authorization.json    # Instrucciones para autorización
│   ├── data_protection.json  # Instrucciones para protección de datos
│   └── vulnerabilities.json  # Instrucciones para manejo de vulnerabilidades
├── backend/               # Dominio: Desarrollo Backend (COMPLETADO)
│   ├── api_design.json      # Instrucciones para diseño de API
│   ├── authentication.json   # Instrucciones para autenticación backend
│   ├── database.json        # Instrucciones para manejo de bases de datos
│   ├── error_handling.json  # Instrucciones para manejo de errores
│   ├── performance.json     # Instrucciones para optimización de rendimiento
│   ├── file_processing.json # Instrucciones para procesamiento de archivos
│   └── caching.json         # Instrucciones para implementación de caché
├── devops/                # Dominio: DevOps (EN PROGRESO)
│   ├── ci_cd.json           # Instrucciones para Integración y Despliegue Continuos
│   ├── containerization.json # Instrucciones para contenedorización (Docker, Kubernetes)
│   ├── infrastructure.json  # Instrucciones para Infraestructura como Código (pendiente)
│   ├── monitoring.json      # Instrucciones para monitoreo (pendiente)
│   └── scalability.json     # Instrucciones para escalabilidad (pendiente)
├── data/                  # Dominio: Gestión de Datos (pendiente)
├── design/                # Dominio: Diseño (pendiente)
└── methodology/           # Dominio: Metodología (pendiente)
```

## Normas de Implementación

1. **Archivos Compactos**: Cada archivo JSON debe tener entre 100-150 líneas para facilitar su mantenimiento.
2. **Estructura Consistente**: Todos los archivos siguen el mismo formato JSON con campos estándar.
3. **Instrucciones Bilingües**: Todas las instrucciones deben tener versiones en español e inglés.
4. **IDs Únicos**: Cada instrucción tiene un ID único con prefijo por dominio (ej: "gen001", "fe001", "sec001", "back001", "devops001").
5. **Referencias Cruzadas**: Las instrucciones relacionadas se vinculan mediante el campo "relatedInstructions".

## Fuente de Conocimiento

La información proviene principalmente del repositorio `https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/` que contiene prompts y herramientas de diversos asistentes IA (Devin, v0, Cursor, VSCode Agent, etc.). Estamos extrayendo y reorganizando este conocimiento para crear nuestro generador de prompts.

## Progreso Actual

- **Completado (~70%)**:
  - Estructura base y organización de directorios ✅
  - Dominio "general" con todas sus categorías ✅
  - Dominio "frontend" con todas sus categorías ✅
  - Dominio "security" con todas sus categorías ✅
  - Dominio "backend" con todas sus categorías ✅
  - Dominio "devops" con algunas categorías iniciales ✅
    - ci_cd.json ✅
    - containerization.json ✅

- **En Progreso (~5%)**:
  - Dominio "devops" con las categorías restantes:
    - infrastructure.json
    - monitoring.json
    - scalability.json

- **Pendiente (~25%)**:
  - Implementar dominio "data" con las siguientes categorías:
    - database_design.json
    - queries.json
    - data_processing.json
    - storage.json
    - migrations.json 
  - Implementar dominio "design" con las siguientes categorías:
    - ui_principles.json
    - ux_guidelines.json
    - accessibility.json
    - branding.json
    - visual_hierarchy.json
  - Implementar dominio "methodology" con las siguientes categorías:
    - agile.json
    - project_planning.json
    - collaboration.json
    - code_reviews.json
    - documentation.json

## Próximos Pasos Recomendados

1. Completar el dominio "devops" con las categorías faltantes, siguiendo este orden:
   - infrastructure.json (IaC, Cloud)
   - monitoring.json (Observabilidad, Monitoreo)
   - scalability.json (Escalabilidad, Servicios)

2. Continuar con el dominio "data" después de completar "devops"

3. Seguir con los dominios "design" y "methodology" respectivamente

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

Tu tarea es continuar el desarrollo de la base de conocimiento siguiendo la estructura y normas establecidas. Hemos completado los dominios "general", "frontend", "security" y "backend", y hemos avanzado con el dominio "devops".

Enfócate ahora en completar el dominio "devops" con las categorías restantes (infrastructure.json, monitoring.json, scalability.json), siguiendo el mismo patrón de calidad y estructura que hemos establecido.

Recuerda mantener los archivos en un tamaño manejable (100-150 líneas) para facilitar su mantenimiento. Si es necesario, divide los temas en múltiples archivos.

La base de conocimiento debe ser completa, bilingüe y modular, siempre manteniendo la consistencia en el formato y estilo con los archivos ya existentes.

Al abordar nuevos archivos o categorías, presta especial atención a las referencias cruzadas para asegurar que las instrucciones estén bien conectadas entre sí.
