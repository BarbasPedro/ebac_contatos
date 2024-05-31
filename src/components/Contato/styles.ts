import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  padding: 0 16px;
  display: grid;
  grid-template-columns: 5% 30% 30% 30% 5%;
  color: ${colors.fontColor};
  align-items: center;

    div {
      display: flex;
      align-items: center;

      img {
        margin: 12px 12px 12px 0;
      }
    }
  }
`

export const Acoes = styled.div`
  button {
    background-color: transparent;
    border: none;

    img {
      width: 20px;
    }
  }
`

export const CampoCadastro = styled.textarea`
  background-color: transparent;
  border: none;
  color: ${colors.white};
  resize: none;
  height: 24px;
`
