import { useDispositivos } from '../hooks/useDispositivos';
import { TarjetaDispositivo } from './TarjetaDispositivo';

export const PanelDispositivos = () => {
  const {
    dispositivos,
    dispositivosEncendidos,
    consumoTotal,
    cambiarEstado,
    encenderTodos,
    apagarTodos,
  } = useDispositivos();

  return (
    <div className="min-h-screen bg-[#f0f4f8] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-6">
          <h1 className="text-[#0d2a5c] text-2xl font-bold uppercase tracking-wide">
            Panel de Dispositivos Inteligentes
          </h1>
          <p className="text-gray-500 text-sm">Aula inteligente — Laboratorio 301</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Dispositivos encendidos</p>
              <p className="text-2xl font-bold text-green-600">
                {dispositivosEncendidos} de {dispositivos.length}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Consumo total activo</p>
              <p className="text-2xl font-bold text-orange-500">{consumoTotal} W</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {dispositivos.map(dispositivo => (
            <TarjetaDispositivo
              key={dispositivo.id}
              dispositivo={dispositivo}
              onCambiarEstado={cambiarEstado}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={encenderTodos}
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-xl shadow-sm transition-all"
          >
            ⏻ ENCENDER TODOS
          </button>
          <button
            onClick={apagarTodos}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-xl shadow-sm transition-all"
          >
            ⏻ APAGAR TODOS
          </button>
        </div>
      </div>
    </div>
  );
};