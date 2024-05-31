import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  fontColor: '#A7A7A7',
  white: '#fff'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    list-style: none;
  }

  body {
    background-color: #000;
    padding: 8px;
  }
`

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;

  section {
    display: block;
    width: 100%;
  }
`
