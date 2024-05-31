import { Cabecalho } from './styles'
import icone from '../../assets/images/contatos.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
const Header = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Cabecalho>
      <img src={icone} alt="" />
      <div>
        <h1>Lista de Contatos</h1>
        <p>{itens.length} Contatos</p>
      </div>
    </Cabecalho>
  )
}

export default Header
