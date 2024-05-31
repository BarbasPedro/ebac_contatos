import { Aside, Busca } from './styles'
import busca from '../../assets/images/pesquisar.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { FormEvent, useState } from 'react'
import { cadastrar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [celular, setCelular] = useState('')

  const { termoBusca } = useSelector((state: RootReducer) => state.filtro)

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()

    const contatoNovo = new Contato(0, nome, email, celular)
    dispatch(cadastrar(contatoNovo))

    setNome('')
    setEmail('')
    setCelular('')
  }

  return (
    <Aside>
      <Busca>
        <img src={busca} alt="Clique aqui para procurar um contato" />
        <input
          type="text"
          placeholder="Buscar"
          value={termoBusca}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
      </Busca>
      <form onSubmit={cadastrarContato}>
        <h2>Cadastrar</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Celular"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </Aside>
  )
}

export default BarraLateral
