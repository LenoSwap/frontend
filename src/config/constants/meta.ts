import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'LenoSwap',
  description:
    'The most popular AMM on BSC by user count! Earn LENO through yield farming or win it in the Lottery, then stake it in Sweet Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by LenoSwap), NFTs, and more, on a platform you can trust.',
  image: '/images/hero.png',
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
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('LenoSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('LenoSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('LenoSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('LenoSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('LenoSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('LenoSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('LenoSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('LenoSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('LenoSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('LenoSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('LenoSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('LenoSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('LenoSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('LenoSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('LenoSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('LenoSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('LenoSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('LenoSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('LenoSwap Info & Analytics')}`,
        description: 'View statistics for LenoSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('LenoSwap Info & Analytics')}`,
        description: 'View statistics for LenoSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('LenoSwap Info & Analytics')}`,
        description: 'View statistics for LenoSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('LenoSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('LenoSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('LenoSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('LenoSwap')}`,
      }
    default:
      return null
  }
}
