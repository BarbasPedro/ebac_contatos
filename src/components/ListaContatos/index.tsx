import { useSelector } from 'react-redux'
import Contato from '../Contato'
import { Lista, ListaHeader } from './styles'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termoBusca } = useSelector((state: RootReducer) => state.filtro)

  const filtroContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termoBusca.toLowerCase()) >= 0
    )
  }

  return (
    <Lista>
      <ListaHeader>
        <p>#</p>
        <p>Nome</p>
        <p>Email</p>
        <p>Celular</p>
        <p>Ações</p>
      </ListaHeader>
      {filtroContatos().map((contato) => (
        <li key={contato.id}>
          <Contato
            id={contato.id}
            nomeOriginal={contato.nome}
            emailOriginal={contato.email}
            celularOriginal={contato.celular}
          />
        </li>
      ))}
    </Lista>
  )
}

export default ListaContatos
