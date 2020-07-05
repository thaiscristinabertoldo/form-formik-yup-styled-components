import React, { memo, useCallback, useMemo, useState } from 'react'

import { Formik, Field, Form } from 'formik'

import * as Yup from 'yup'

import { faAddressBook, faIdBadge, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

import { InputField } from '../../components/InputField'
import { FormTitle } from '../../components/FormTitle'
import { Button } from '../../components/Button'
import { Grid, Row, Col } from '../../components/Grid'
import { FormLegend } from '../../components/FormLegend'
import { Modal } from '../../components/Modal'
import { Loading } from '../../components/Loading'
import { ModalContent } from './ModalContent'

const Cadastro = memo(() => {
  const [modalOpen, setModalOpen] = useState(false)
  console.log('modal', modalOpen)

  const initialValues = useMemo(() => {
    return {
      nome: '',
      profissao: 'Programador',
      endereco: {
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        complemento: '',
      },
      email: '',
      senha: '',
      senhaConfirmacao: '',
    }
  }, [])

  const validationSchema = useMemo(() => {
    return Yup.object({
      profissao: Yup.string().required('Informe sua profissão'),
      nome: Yup.string().required('Informe seu nome'),
      email: Yup.string().email('E-mail inválido').required('Informe seu e-mail'),
      endereco: Yup.object({
        cidade: Yup.string().required('Informe sua cidade'),
        bairro: Yup.string().required('Informe seu bairro'),
        rua: Yup.string().required('Informe sua rua'),
      }),
      senha: Yup.string().required('Informe uma senha').min(8, 'A senha deve ter no mínimo 8 caracteres'),
      senhaConfirmacao: Yup.string()
        .required('Informe a confirmação da senha')
        .min(8, 'A confirmação da senha deve ter no mínimo 8 caracteres')
        .oneOf([Yup.ref('senha'), null], 'As senhas não correspondem'),
    })
  }, [])

  const handleSubmit = useCallback((values, formik) => {
    console.log('values', values)
    setTimeout(() => {
      formik.setSubmitting(false)
      setModalOpen(true)
    }, 1000)
  }, [])

  return (
    <>
      <FormTitle title="Cadastre-se" />

      <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
        {({ isSubmitting, isValid }) => (
          <Form noValidate>
            <Grid>
              <Row>
                <Col size={1}>
                  <FormLegend icon={faIdBadge} title="Identificação" subtitle="Dados de identificação" />
                </Col>
              </Row>

              <Row>
                <Col size={1}>
                  <Field name="nome" label="Nome" disabled={isSubmitting} component={InputField} required />
                </Col>

                <Col size={1}>
                  <Field name="profissao" label="Profissão" disabled={isSubmitting} component={InputField} required />
                </Col>
              </Row>

              <Row>
                <Col size={1}>
                  <FormLegend icon={faAddressBook} title="Endereço" subtitle="Dados de endereço" />
                </Col>
              </Row>

              <Row>
                <Col size={1}>
                  <Field
                    name="endereco.cidade"
                    label="Cidade"
                    disabled={isSubmitting}
                    component={InputField}
                    required
                  />
                </Col>

                <Col size={1}>
                  <Field
                    name="endereco.bairro"
                    label="Bairro"
                    disabled={isSubmitting}
                    component={InputField}
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col size={10}>
                  <Field name="endereco.rua" label="Rua" disabled={isSubmitting} component={InputField} required />
                </Col>

                <Col size={2}>
                  <Field name="endereco.numero" label="Número" disabled={isSubmitting} component={InputField} />
                </Col>
              </Row>

              <Row>
                <Col size={1}>
                  <Field
                    name="endereco.complemento"
                    label="Complemento"
                    disabled={isSubmitting}
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row>
                <Col size={1}>
                  <FormLegend icon={faClipboardCheck} title="Acesso" subtitle="Dados de acesso" />
                </Col>
              </Row>

              <Row>
                <Col size={1}>
                  <Field name="email" label="E-mail" disabled={isSubmitting} component={InputField} required />
                </Col>

                <Col size={1}>
                  <Field
                    name="senha"
                    type="password"
                    label="Senha"
                    disabled={isSubmitting}
                    component={InputField}
                    required
                  />
                </Col>

                <Col size={1}>
                  <Field
                    name="senhaConfirmacao"
                    type="password"
                    label="Confirmação da senha"
                    disabled={isSubmitting}
                    component={InputField}
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col size={1}>
                  <Button
                    prefix={isSubmitting ? <Loading size="1x" /> : null}
                    disabled={isSubmitting || !isValid}
                    isSubmitting={isSubmitting}
                    text="Enviar"
                  />
                </Col>
              </Row>
            </Grid>
          </Form>
        )}
      </Formik>

      {modalOpen && (
        <Modal title="Conta criada com sucesso" id="modal" isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <ModalContent />
        </Modal>
      )}
    </>
  )
})
export default Cadastro
