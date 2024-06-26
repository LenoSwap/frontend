import { Currency, ETHER, Token } from '@lenoswap/sdk'
// import { BinanceIcon } from '@lenoswap/uikit'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import getTokenLogoURL from '../../utils/getTokenLogoURL'
import Logo from './Logo'

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`
const StyledBnbLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`
export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    // if (currency instanceof Token) {
    //   if (currency instanceof WrappedTokenInfo) {
    //     return [...uriLocations, getTokenLogoURL(currency.address)]
    //   }
    //   return [getTokenLogoURL(currency.address)]
    // }
    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, `/images/tokens/${currency?.symbol ?? 'token'}.png`, getTokenLogoURL(currency.address)]
      }

      return [`/images/tokens/${currency?.symbol ?? 'token'}.png`, getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    // return <BinanceIcon width={size} style={style} />
    return <StyledBnbLogo src="/images/tokens/BNB.png" size={size} style={style} />
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
