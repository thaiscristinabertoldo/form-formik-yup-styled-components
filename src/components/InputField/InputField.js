import React, { memo } from 'react'

import styled from 'styled-components'

import { ErrorMessage } from 'formik'

import theme from '../../theme/theme'

const DivStyled = styled.div`
  position: relative;
  border: none;
`

const InputStyled = styled.input`
  font-size: 16px;
  display: block;
  width: 100%;
  padding: 5px;
  border: none;
  border-bottom: solid 1px ${theme.colors.mediumGrey};
  color: ${theme.colors.darkGrey};
  &:focus {
    outline: none;
  }
`

const LabelStyled = styled.label`
  color: ${theme.colors.darkGrey};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  padding: 5px;
  top: ${(props) => (props.value !== '' ? '-20px' : '5px')};
  ${InputStyled}:focus ~ & {
    top: -20px;
    font-size: 14px;
    color: ${theme.colors.mediumGrey};
  }
`

const ErrorMessageStyled = styled.div`
  padding: 5px;
  color: ${theme.colors.red};
  font-size: 14px;
`

const LabelRequiredStyled = styled.label`
  color: ${theme.colors.red};
`

export const InputField = memo(({ field, label, required = false, ...props }) => {
  return (
    <>
      <DivStyled>
        <InputStyled type="text" {...field} {...props} />

        <LabelStyled value={field.value}>
          {label}
          {required && <LabelRequiredStyled>*</LabelRequiredStyled>}
        </LabelStyled>
      </DivStyled>
      <ErrorMessage name={field.name} component={ErrorMessageStyled} />
    </>
  )
})
