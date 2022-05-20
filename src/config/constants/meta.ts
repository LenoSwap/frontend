import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'QuickSwap',
  description:
    'The most popular AMM on BSC by user count! Earn QUICK through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by QuickSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://quickswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/quick-squad')) {
    basePath = '/quick-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('QuickSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('QuickSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('QuickSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('QuickSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('QuickSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('QuickSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('QuickSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('QuickSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('QuickSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('QuickSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('QuickSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('QuickSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('QuickSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('QuickSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('QuickSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('QuickSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('QuickSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('QuickSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('QuickSwap Info & Analytics')}`,
        description: 'View statistics for QuickSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('QuickSwap Info & Analytics')}`,
        description: 'View statistics for QuickSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('QuickSwap Info & Analytics')}`,
        description: 'View statistics for QuickSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('QuickSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('QuickSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('QuickSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('QuickSwap')}`,
      }
    default:
      return null
  }
}
