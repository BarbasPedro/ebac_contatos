import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      celular: '51 9 4567-8901',
      email: 'carlos@santos.pt',
      nome: 'Carlos Santos'
    },
    {
      id: 2,
      celular: '21 9 8765-4321',
      email: 'ana@silva.pt',
      nome: 'Ana Silva'
    },
    {
      id: 3,
      celular: '31 9 2345-6789',
      email: 'joao@oliveira.pt',
      nome: 'João Oliveira'
    },
    {
      id: 4,
      celular: '41 9 3456-7890',
      email: 'maria@pereira.pt',
      nome: 'Maria Pereira'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (contatdo) => contatdo.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoExistente) {
        alert('Contato já cadastrado')
      } else {
        const contatoNovo = { ...action.payload, id: state.itens.length + 1 }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
