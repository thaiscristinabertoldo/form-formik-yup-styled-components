import React, { memo } from 'react'

import styled from 'styled-components'

import theme from '../../theme/theme'

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`

const TitleStyled = styled.label`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.mediumGrey};
  text-align: center;
  margin-bottom: 20px;
`

const LabelStyled = styled.label`
  font-size: 16px;
  color: ${theme.colors.mediumGrey};
  text-align: justify;
  line-height: 1.5;
`

export const ModalContent = memo(() => {
  return (
    <ContainerStyled>
      <TitleStyled>Conta criada com sucesso!</TitleStyled>

      <LabelStyled>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s.
      </LabelStyled>
    </ContainerStyled>
  )
})
