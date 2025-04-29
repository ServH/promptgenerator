export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Generador de Prompts para Desarrollo con IA</h1>
      <p className="mb-6">Crea prompts personalizados para potenciar tus desarrollos web con IA.</p>
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Comenzar Ahora</button>
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">Ver Ejemplos</button>
      </div>
    </div>
  );
}
