import { useState } from "react";
import TableWrapper from "./TableWrapper";

export default function Ventas(props) {
  const [team, setTeam] = useState("0");
  const [user, setUser] = useState("0");
  const [sales, setSales] = useState([]);

  const handleTeamChange = (event) => {
    setUser("0");
    setSales([]);
    setTeam(event.target.value);
    requestSales(event.target.value, 'equipo');
  }

  const handleUserChange = (event) => {
    setTeam("0");
    setSales([]);
    setUser(event.target.value);
    requestSales(event.target.value, 'usuario');
  }

  const requestSales = async (id, user_type) => {
    const res = await fetch(
      `http://localhost:8000/ventas/${user_type}/${parseInt(id)}`
    );
    const result = await res.json();
    if (result && result.length > 0) {
      setSales(result);
    }
  }

  return (
    <>
    <div className="flex flex-row p-4">
      <div className="px-3 mb-3">
        <label htmlFor="team" className="tracking-wide text-black text-xs font-bold mb-2">Equipos</label>
        <div className="relative mb-3">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none" 
                  id="team"
                  name="team"
                  value={team}
                  onChange={handleTeamChange}>
            <option value="0" disabled>Selecciona</option>
            {
              props.equipos.map(equipo => (
                <option key={`team-${equipo.id}`} value={`${equipo.id}`}>{equipo.nombre}</option>    
              ))
            }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div className="px-3 mb-3">
        <label htmlFor="team" className="tracking-wide text-black text-xs font-bold mb-2">Usuarios</label>
        <div className="relative mb-3">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none" 
                  id="team"
                  name="team"
                  value={user}
                  onChange={handleUserChange}>
            <option value="0" disabled>Selecciona</option>
            {
              props.usuarios.map(usuario => (
                <option key={`team-${usuario.id}`} value={`${usuario.id}`}>{usuario.nombre}</option>    
              ))
            }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
    </div>
    <TableWrapper>
      <table className="min-w-full divide-y divide-blueGray-400">
        <thead className="bg-blueGray-100">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blueGray-800 uppercase tracking-wider">
              ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blueGray-800 uppercase tracking-wider">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blueGray-800 uppercase tracking-wider">
              Cliente
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blueGray-800 uppercase tracking-wider">
              Monto
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blueGray-800 uppercase tracking-wider">
              Equipo
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blueGray-800 uppercase tracking-wider">
              Usuario
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-blueGray-200">
          {
            sales ?
            sales.map(sale => (
              <tr key={`${sale.id}`}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blueGray-900">{sale.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blueGray-900">{sale.fecha}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blueGray-900">{sale.cliente_nombre}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blueGray-900">{sale.monto}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blueGray-900">{sale.equipo_nombre}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blueGray-900">{sale.usuario_nombre}</div>
                </td>
              </tr>
            )) : null
          }
        </tbody>
      </table>
    </TableWrapper>
    </>
  );
}