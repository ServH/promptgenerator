export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { selections, language = 'es' } = req.body;
    
    // En el futuro: Cargamos instrucciones desde archivos JSON locales
    // const relevantInstructions = await loadInstructionsFromJSON(
    //   selections.technologies, 
    //   selections.appType,
    //   language
    // );
    
    // En el futuro: Generamos el prompt con nuestra función interna
    // const prompt = generatePrompt(selections, relevantInstructions, language);
    
    // Por ahora, devolvemos un mock:
    const prompt = `# Desarrollo con ${selections.technologies?.join(', ') || 'las tecnologías seleccionadas'}

## Objetivo
Implementar ${selections.objective || 'la aplicación solicitada'} siguiendo las mejores prácticas.

## Instrucciones
Utiliza patrones de diseño modernos y asegúrate de seguir las guías de estilo.

## Formato
Proporciona el código con explicaciones claras.`;
    
    return res.status(200).json({ prompt });
  } catch (error) {
    return res.status(500).json({ 
      message: 'Error generating prompt', 
      error: error.message 
    });
  }
}