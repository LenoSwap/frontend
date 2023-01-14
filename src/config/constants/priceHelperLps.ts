import tokens from './tokens'
import { SerializedFarmConfig } from './types'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absence of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: null,
    lpSymbol: 'LENO-BUSD LP',
    lpAddresses: {
      97: '0xC43D244E5C3B8c888b4827Cb6d6f1fd06B66Db3B',
      56: '0x32d07619e424Fd347A1141072CCD2FE0e94aF8ED',
    },
    token: tokens.leno,
    quoteToken: tokens.busd,
  },
]

export default priceHelperLps
