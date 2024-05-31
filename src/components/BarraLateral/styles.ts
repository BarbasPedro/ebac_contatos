import styled from 'styled-components'
import { colors } from '../../styles'

export const Aside = styled.aside`
  display: block;
  max-height: 100%;
  height: 100%;
  max-width: 270px;
  width: 100%;
  color: ${colors.fontColor};
  margin-right: 8px;

  div,
  form {
    padding: 8px 12px;
    background-color: #242424;
    border-radius: 8px;
  }

  input {
    background-color: #242424;
    border: none;
    color: ${colors.white};
    height: 40px;

    &::placeholder {
      color: ${colors.fontColor};
      font-weight: 700;
    }
  }

  button {
    border: none;
    width: 100%;
    border-radius: 24px;
    background-color: transparent;
    color: ${colors.white};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #000;
      color: ${colors.white};
    }
  }
`

export const Busca = styled.div`
  display: flex;
  margin-bottom: 8px;

  img {
    height: 40px;
    width: 40px;
  }
`

export const Cadastro = styled.div``
