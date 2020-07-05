import React, { memo } from 'react'

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import theme from '../../theme/theme'

const FormLegendStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
`

const IconStyled = styled.div`
  margin-right: 10px;
  opacity: 0.4;
`

const LegendGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const LabelTitleStyled = styled.label`
  font-weight: bold;
  color: ${theme.colors.mediumGrey};
  font-size: 18px;
`

const LabelSubTitleStyled = styled.label`
  color: ${theme.colors.mediumGrey};
  font-size: 12px;
`

export const FormLegend = memo(({ icon, title, subtitle }) => {
  return (
    <FormLegendStyled>
      <IconStyled>
        <FontAwesomeIcon icon={icon} size="2x" swapOpacity />
      </IconStyled>

      <LegendGroupStyled>
        <LabelTitleStyled>{title}</LabelTitleStyled>
        <LabelSubTitleStyled>{subtitle}</LabelSubTitleStyled>
      </LegendGroupStyled>
    </FormLegendStyled>
  )
})
