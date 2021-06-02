import TableWrapper from "./TableWrapper";

export default function Ventas(props) {
  return (
    <>
    <div className="flex flex-row p-4">
      <div className="px-3 mb-3">
        <label htmlFor="team" className="tracking-wide text-black text-xs font-bold mb-2">Equipos</label>
        <div className="relative mb-3">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none" 
                  id="team"
                  name="team"
                  defaultValue="">
            <option value="" disabled>Selecciona</option>
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
                  defaultValue="">
            <option value="" disabled>Selecciona</option>
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
        </tbody>
      </table>
    </TableWrapper>
    </>
  );
}