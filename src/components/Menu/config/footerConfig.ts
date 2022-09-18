import { FooterLinkType } from '@lenoswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t(''),
    items: [
      // {
      //   label: t('Contact'),
      //   href: 'https://docs.lenoswap.com/contact-us',
      // },
      // {
      //   label: t('LENO token'),
      //   href: 'https://docs.lenoswap.com/tokenomics/leno',
      //   isHighlighted: true,        
      // },
    ],
  },
  {
    label: t(''),
    items: [
      // {
      //   label: t('Customer Support'),
      //   href: 'https://docs.lenoswap.com/contact-us/customer-support',
      // },
      // {
      //   label: t('Troubleshooting'),
      //   href: 'https://docs.lenoswap.com/help/troubleshooting',
      // },
    ],
  },
  {
    label: t(''),
    items: [
      // {
      //   label: 'Github',
      //   href: 'https://github.com/pancakeswap',
      // },
      // {
      //   label: t('Documentation'),
      //   href: 'https://docs.lenoswap.com',
      // },
    ],
  },
]
