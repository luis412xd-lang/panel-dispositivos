import type { Dispositivo } from '../types/Dispositivo';

interface TarjetaDispositivoProps {
  dispositivo: Dispositivo;
  onCambiarEstado: (id: number) => void;
}

const obtenerIcono = (nombre: string) => {
  if (nombre.toLowerCase().includes('proyector')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="14" height="10" rx="2" />
        <circle cx="9" cy="12" r="2.5" />
        <path d="M16 10l6-3v10l-6-3" />
      </svg>
    );
  }
  if (nombre.toLowerCase().includes('aire')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3z" />
    </svg>
  );
};

export const TarjetaDispositivo = ({ dispositivo, onCambiarEstado }: TarjetaDispositivoProps) => {
  const { id, nombre, ubicacion, estado, consumo } = dispositivo;

  return (
    <div
      className={`relative rounded-2xl p-5 shadow-md border transition-all ${
        estado ? 'bg-teal-50 border-teal-300' : 'bg-gray-100 border-gray-200'
      }`}
    >
      <span
        className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
          estado ? 'bg-green-500' : 'bg-gray-400'
        }`}
      ></span>

      <div className={`mb-2 ${estado ? 'text-teal-700' : 'text-gray-400'}`}>
        {obtenerIcono(nombre)}
      </div>

      <h3 className="text-[#0d2a5c] font-bold uppercase tracking-wide mb-2 text-sm">
        {nombre}
      </h3>

      <p className="text-sm text-gray-600">Ubicación: {ubicacion}</p>
      <p className="text-sm text-gray-600 mb-3">
        Consumo: <span className="font-semibold">{consumo} W</span>
      </p>

      <p className={`text-xs font-medium mb-4 ${estado ? 'text-green-700' : 'text-gray-500'}`}>
        ● {estado ? 'ENCENDIDO' : 'APAGADO'}
      </p>

      <button
        onClick={() => onCambiarEstado(id)}
        className={`w-full py-2 rounded-xl font-medium text-white transition-all ${
          estado ? 'bg-teal-600 hover:bg-teal-700' : 'bg-gray-500 hover:bg-gray-600'
        }`}
      >
        {estado ? 'APAGAR' : 'ENCENDER'}
      </button>
    </div>
  );
};