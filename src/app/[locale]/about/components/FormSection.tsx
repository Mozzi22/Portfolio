import { yupResolver } from '@hookform/resolvers/yup'
import { Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

import {
  type ContactFormData,
  contactValidation
} from '@/app/[locale]/about/validation'

type Props = {
  setIsSubmitted: Dispatch<SetStateAction<boolean>>
}

const FormSection = ({ setIsSubmitted }: Props) => {
  const t = useTranslations('About')
  const tValidation = useTranslations('Validation')

  const schema = contactValidation(tValidation)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (!response.ok) {
        setError('root', {
          message: result.error ?? t('somethingWendWrong')
        })
        return
      }

      setIsSubmitted(true)
      reset()
    } catch (err: unknown) {
      console.error('[send] network error:', err)
      setError('root', {
        message: t('networkError')
      })
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-5 py-4 bg-slate-50 border ${
      hasError ? 'border-red-500' : 'border-slate-200'
    } rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all`

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-wider text-slate-500">
          {tValidation('name')}
        </label>
        <input
          {...register('name')}
          placeholder={t('yourName')}
          className={inputClass(!!errors.name)}
        />
        {errors.name && (
          <p className="text-xs text-red-500 font-bold">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-wider text-slate-500">
          {tValidation('email')}
        </label>
        <input
          {...register('email')}
          placeholder="email@example.com"
          className={inputClass(!!errors.email)}
        />
        {errors.email && (
          <p className="text-xs text-red-500 font-bold">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-wider text-slate-500">
          {tValidation('message')}
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder={t('messageDesc')}
          className={`${inputClass(!!errors.message)} resize-none`}
        />
        {errors.message && (
          <p className="text-xs text-red-500 font-bold">
            {errors.message.message}
          </p>
        )}
      </div>

      {errors.root && (
        <p className="text-sm text-red-500 font-bold bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {errors.root.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full cursor-pointer flex items-center justify-center space-x-3 py-5 bg-primary text-white font-extrabold rounded-xl shadow-lg hover:shadow-primary/40 transition-all hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        <span>{t(isSubmitting ? 'sending' : 'sendMessage')}</span>
        <Send
          size={18}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>
    </form>
  )
}

export default FormSection
