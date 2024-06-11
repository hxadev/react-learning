import  PropTypes  from "prop-types"
import { CounterApp } from './CounterApp';

const usuario = {
    nombre: 'Alfonso',
    edad: 30,
    posicion: 'Arquero'
}

const getSalary = (posocion:string):number|undefined => {
    if(posocion === 'Arquero'){
      return 1000
    }else if(posocion === 'Defensa'){
      return 2000
    }else if(posocion === 'Mediocampista'){
      return 3000
    }else if(posocion === 'Delantero'){
      return 4000
    }
  }

interface props{
  title?:string
  subtitle?:string
}

export const FirstApp = ({title, subtitle}:props) => {

  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>Soy {usuario.nombre}</p>
      <p>Tengo {usuario.edad} anios</p>
      <p>Soy un  {usuario.posicion}</p>
      <p>Mi salario es ${getSalary(usuario.posicion)}</p>
      <div>
        <CounterApp value={2}/>
      </div>
    </>
  )
}

// Proptypes permite indicar reglas para las properties del componente
FirstApp.propTypes={
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.object
}

// defaultProps permite establecer valores por defecto para las properties
// del componente
FirstApp.defaultProps = {
  title: 'No hay titulo'
}