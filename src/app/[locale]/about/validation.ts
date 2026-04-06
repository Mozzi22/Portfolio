import { useTranslations } from 'next-intl'
import * as yup from 'yup'

export const contactValidation = (
  t: ReturnType<typeof useTranslations<'Validation'>>
) =>
  yup
    .object({
      name: yup
        .string()
        .required(t('isRequired', { field: t('name') }))
        .min(2, t('mustBeAtLeast', { field: t('name'), count: 2 })),
      email: yup
        .string()
        .required(t('isRequired', { field: t('email') }))
        .email(t('isInvalidEmail')),
      message: yup
        .string()
        .required(t('isRequired', { field: t('message') }))
        .min(10, t('mustBeAtLeast', { field: t('message'), count: 2 }))
    })
    .required()

export type ContactFormData = yup.InferType<
  ReturnType<typeof contactValidation>
>
