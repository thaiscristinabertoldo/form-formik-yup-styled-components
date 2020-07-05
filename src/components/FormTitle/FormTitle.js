import React, { memo } from 'react'

import styled from 'styled-components'

import theme from '../../theme/theme'

const H1Styled = styled.h1`
  color: ${theme.colors.mediumGrey};
  text-align: center;
  margin-bottom: 50px;
`

export const FormTitle = memo(({ title }) => {
  return <H1Styled>{title}</H1Styled>
})
