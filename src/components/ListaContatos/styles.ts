import styled from 'styled-components'
import { colors } from '../../styles'

export const Lista = styled.div`
  height: 100%;
  background: rgb(36, 36, 36);
  background: linear-gradient(
    0deg,
    rgba(36, 36, 36, 1) 69%,
    rgba(59, 0, 136, 1) 100%
  );
  padding: 0 16px;
`

export const ListaHeader = styled.div`
  display: grid;
  grid-template-columns: 5% 30% 30% 30% 5%;
  border-bottom: 1px solid ${colors.white};
  padding: 48px 16px 0;
  color: ${colors.fontColor};
`
