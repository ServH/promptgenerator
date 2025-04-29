# Base de Conocimiento

Esta carpeta contiene la base de conocimiento estructurada para la generación de prompts personalizados.

## Estructura

- `/general_dev.json` - Instrucciones de desarrollo general
- `/frontend_dev.json` - Instrucciones frontend
- `/backend_dev.json` - Instrucciones backend
- `/security.json` - Instrucciones de seguridad
- `/design_principles.json` - Principios de diseño
- `/frameworks/` - Instrucciones específicas por framework
  - `react.json`
  - `next_js.json`
  - `node.json`
  - etc.
- `/templates/` - Plantillas de prompts completos

## Formato de las Instrucciones

Cada instrucción sigue esta estructura:

```json
{
  "id": "string",
  "title": {
    "es": "string",
    "en": "string"
  },
  "description": {
    "es": "string",
    "en": "string"
  },
  "text": {
    "es": "string",
    "en": "string"
  },
  "importance": "high|medium|low",
  "category": "string",
  "subcategory": "string",
  "tags": ["string"],
  "source": {
    "agentType": "string",
    "repository": "string",
    "context": "string"
  },
  "compatibility": {
    "frameworks": ["string"],
    "languages": ["string"],
    "environments": ["string"]
  },
  "examples": [{
    "context": {
      "es": "string",
      "en": "string"
    },
    "code": "string"
  }],
  "relatedInstructions": ["string"]
}
```

## Fuente

La información extraída proviene del repositorio [system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/), que contiene instrucciones y prompts de diversos agentes de IA de desarrollo como Devin, v0, Cursor, etc.