import React, { memo } from 'react'

import styled from 'styled-components'

import theme from '../../theme/theme'

const ButtonStyled = styled.button`
  padding: 10px;
  border: 1px solid ${(prop) => (prop.disabled ? theme.colors.lightGrey : theme.colors.primary)};
  background-color: ${(prop) => (prop.disabled ? theme.colors.lightGrey : theme.colors.primary)};
  border-radius: 5px;
  color: ${theme.colors.white};
  font-weight: bold;
  font-size: 16px;
  box-shadow: 2px 2px 10px ${theme.colors.lightGrey};
  cursor: ${(prop) => (prop.disabled ? 'default' : 'pointer')};
  min-width: 130px;
  &:focus {
    outline: none;
  }
`

export const Button = memo(({ text, prefix, ...props }) => {
  return (
    <ButtonStyled type="submit" {...props}>
      {prefix} {text}
    </ButtonStyled>
  )
})
