import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  setIsSubmitted: Dispatch<SetStateAction<boolean>>
}

const SubmittedFormSection = ({ setIsSubmitted }: Props) => {
  const t = useTranslations('About')

  const handleSendAnotherMessage = () => setIsSubmitted(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-12 space-y-4 text-center"
    >
      <CheckCircle2 size={64} className="text-green-500" />
      <h3 className="text-2xl font-bold text-green-600">{t('messageSent')}</h3>
      <p className="text-slate-600 text-sm">{t('messageSentDesc')}</p>
      <button
        onClick={handleSendAnotherMessage}
        className="text-sm font-bold text-primary underline underline-offset-4"
      >
        {t('sendAnotherMessage')}
      </button>
    </motion.div>
  )
}

export default SubmittedFormSection
