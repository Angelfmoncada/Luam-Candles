import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img 
                src="/Luam-Candles/images/Logo Luan candles.png" 
                alt="Luam Candles" 
                className="h-12 w-auto"
              />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Luam Candles</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Velas Artesanales de Calidad Premium
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Descubre nuestra colección de velas hechas a mano con los mejores materiales y fragancias únicas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ejemplo de productos */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/Luam-Candles/images/1-rosa-lavanda.png" 
                alt="Rosa Lavanda" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rosa Lavanda</h3>
                <p className="text-gray-600">Vela aromática con esencia de rosa y lavanda</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/Luam-Candles/images/2-espiritu-corcel.png" 
                alt="Espíritu Corcel" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Espíritu Corcel</h3>
                <p className="text-gray-600">Vela con fragancia única y envolvente</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/Luam-Candles/images/3-sol-flor.png" 
                alt="Sol Flor" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sol Flor</h3>
                <p className="text-gray-600">Vela inspirada en la calidez del sol</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Luam Candles. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App