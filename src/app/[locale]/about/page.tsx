'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import AboutMeSection from '@/app/[locale]/about/components/AboutMeSection'
import ExpertiseSection from '@/app/[locale]/about/components/ExpertiseSection'
import FormSection from '@/app/[locale]/about/components/FormSection'
import SubmittedFormSection from '@/app/[locale]/about/components/SubmittedFormSection'

const AboutPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const t = useTranslations('About')

  return (
    <div className="container mx-auto px-6 max-w-5xl space-y-6 py-6 md:space-y-24 md:py-12">
      <AboutMeSection />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <ExpertiseSection />

        <div className="bg-card p-10 rounded-3xl shadow-xl border border-light space-y-8">
          <h2 className="text-3xl font-bold">{t('getInTouch')}</h2>
          <p className="text-muted-foreground">{t('getInTouchDesc')}</p>

          {isSubmitted ? (
            <SubmittedFormSection setIsSubmitted={setIsSubmitted} />
          ) : (
            <FormSection setIsSubmitted={setIsSubmitted} />
          )}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
