import styled from 'styled-components'

export const Grid = styled.div``

export const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`

Row.defaultProps = {
  flexDirection: 'row',
}

export const Col = styled.div`
  flex: ${(props) => props.size};
  margin: 10px 20px;
`

Col.defaultProps = {
  size: 1,
}
