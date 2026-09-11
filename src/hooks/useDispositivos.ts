import { useState } from 'react';
import type { Dispositivo } from '../types/Dispositivo';

const dispositivosIniciales: Dispositivo[] = [
  { id: 1, nombre: 'Proyector', ubicacion: 'Zona frontal', estado: true, consumo: 250 },
  { id: 2, nombre: 'Aire acondicionado', ubicacion: 'Pared lateral', estado: false, consumo: 800 },
  { id: 3, nombre: 'Sistema de iluminación', ubicacion: 'Techo', estado: true, consumo: 200 },
];

export const useDispositivos = () => {
  const [dispositivos, setDispositivos] = useState<Dispositivo[]>(dispositivosIniciales);

  const cambiarEstado = (id: number) => {
    setDispositivos(prev =>
      prev.map(d => (d.id === id ? { ...d, estado: !d.estado } : d))
    );
  };

  const encenderTodos = () => {
    setDispositivos(prev => prev.map(d => ({ ...d, estado: true })));
  };

  const apagarTodos = () => {
    setDispositivos(prev => prev.map(d => ({ ...d, estado: false })));
  };

  const dispositivosEncendidos = dispositivos.filter(d => d.estado).length;

  const consumoTotal = dispositivos
    .filter(d => d.estado)
    .reduce((total, d) => total + d.consumo, 0);

  return {
    dispositivos,
    dispositivosEncendidos,
    consumoTotal,
    cambiarEstado,
    encenderTodos,
    apagarTodos,
  };
};