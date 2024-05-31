import contato from '../../assets/images/contato.png'
import { Acoes, CampoCadastro, Card } from './styles'

import iconeEditar from '../../assets/images/editar.svg'
import iconeRemover from '../../assets/images/remover.svg'
import iconeCancelar from '../../assets/images/cancelar.png'
import iconeConfirmar from '../../assets/images/confirmar.png'
import { useEffect, useState } from 'react'
import { editar, remover } from '../../store/reducers/contatos'
import { useDispatch } from 'react-redux'

type Props = {
  id: number
  nomeOriginal: string
  emailOriginal: string
  celularOriginal: string
}

const Contato = ({
  id,
  nomeOriginal,
  emailOriginal,
  celularOriginal
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [celular, setCelular] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (celularOriginal.length > 0) {
      setCelular(celularOriginal)
    }
  }, [nomeOriginal, emailOriginal, celularOriginal])

  function cancelarEdicao() {
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setCelular(celularOriginal)
    setEstaEditando(false)
  }

  function salvarEdicao() {
    dispatch(editar({ id, nome, email, celular }))
    setEstaEditando(false)
  }

  return (
    <Card>
      <CampoCadastro disabled value={id}></CampoCadastro>
      <div>
        <img src={contato} alt="" />
        <CampoCadastro
          disabled={!estaEditando}
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        ></CampoCadastro>
      </div>
      <CampoCadastro
        disabled={!estaEditando}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></CampoCadastro>
      <CampoCadastro
        disabled={!estaEditando}
        onChange={(e) => setCelular(e.target.value)}
        value={celular}
      ></CampoCadastro>
      <Acoes>
        {estaEditando ? (
          <>
            <button>
              <img
                src={iconeConfirmar}
                onClick={salvarEdicao}
                alt="Clique aqui para salvar o contato"
              />
            </button>
            <button onClick={cancelarEdicao}>
              <img
                src={iconeCancelar}
                alt="Clique aqui para canclear a edição do contato"
              />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setEstaEditando(true)}>
              <img src={iconeEditar} alt="Clique aqui para editar o contato" />
            </button>
            <button>
              <img
                src={iconeRemover}
                onClick={() => dispatch(remover(id))}
                alt="Clique aqui para remover o contato"
              />
            </button>
          </>
        )}
      </Acoes>
    </Card>
  )
}
export default Contato
