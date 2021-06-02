import Container from '../components/Container'
import Ventas from '../components/Ventas'

export default function Home({equipos, usuarios}) {
  return (
    <Container>
      <Ventas equipos={equipos} usuarios={usuarios}/>
    </Container>
  )
}
export async function getServerSideProps() {
  const responseEquipos = await fetch('http://127.0.0.1:8000/catalogo/equipos');
  const equipos = await responseEquipos.json();
  const responseUsuarios = await fetch('http://127.0.0.1:8000/catalogo/usuarios');
  const usuarios = await responseUsuarios.json();
  return {
    props: {
      equipos,
      usuarios
    }
  }
}