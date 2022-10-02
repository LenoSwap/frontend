import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Secure and hustle -free Digital asset trading services.',
  bodyText: 'LenoSwap is one of the growing crypto exchanges in the world. You can buy and sell crypto currencies quickly and easily.',
  reverse: true,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: '#',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'LENO', alt: 'LENO token' },
      // { src: 'GLOBE', alt: 'Globe' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn a Growing & Passive Rewards.',
  bodyText: 'Enables you for smooth trading experience for all your assets.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: '#',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      // { src: 'pie', alt: 'Pie chart' },
      // { src: 'stonks', alt: 'Stocks chart' },
      // { src: 'folder', alt: 'Folder with leno token' },
      { src: 'EARN', alt: 'earn' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'LENO makes Your asset Growing.',
  bodyText:
    'LENO token is, at the heart of the exchanges ecosystem. User will just have to Staking, Farming and Liquidizing for multiplying assets.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    text: 'Buy LENO',
    external: false,
  },
  secondaryButton: {
    to: '#',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/leno/',
    attributes: [
      // { src: 'bottom-right', alt: 'Small 3d pancake' },
      // { src: 'top-right', alt: 'Small 3d pancake' },
      { src: 'Trade', alt: 'LENO token' },
      // { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
