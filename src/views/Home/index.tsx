import React from 'react'
import styled from 'styled-components'
import { Flex } from '@lenoswap/uikit'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
// import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
// import PancakeSquadBanner from './components/Banners/PancakeSquadBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  return (
    <>
      <PageMeta />
{/* Swap your digital asset with DigiSwap */}
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
          ? '#1d1d22'
          : '#f6f8fa'
            // ? 'radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)'
            // : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <Flex
          pt={[account ? '220px' : '0', null, null, account ? '76px' : '0']}
          mt={[account ? '0' : '-16px', null, null, account ? '0' : '-48px']}
          pb="24px"
        >
          {/* <PancakeSquadBanner /> */}
        </Flex>
        <Hero />
      </StyledHeroSection>

{/* Huge community and combine with local */}
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
          ? '#27262c'
          : '#f6f8fa'
            // ? 'linear-gradient(180deg, #09070C 22%, #201335 100%)'
            // : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>

{/* Trade an asset, no need registration and easily */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        // background={theme.colors.background}
        background={
          theme.isDark
          ? '#1d1d22'
          : '#FFFFFF'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
        <InnerWedgeWrapper top fill={theme.isDark ? '#1d1d22' : '#FFFFFF'}>
          {/* <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}> */}
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData} />
      </PageSection>

{/* Earn passive income with crypto */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        // background={theme.colors.gradients.cardHeader}
        background={
          theme.isDark
          ? '#27262c'
          : '#f6f8fa'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
        <InnerWedgeWrapper width="150%" top fill={theme.isDark ? '#27262c' : '#f6f8fa'}>
          {/* <InnerWedgeWrapper width="150%" top fill={theme.colors.background}> */}
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...earnSectionData} />
        <FarmsPoolsRow />
      </PageSection>
{/* Win millions in prizes */}
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
          ? '#1d1d22'
          : '#FFFFFF'
            // ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
            // : 'linear-gradient(180deg, #6FB6F1 0%, #EAF2F6 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection> */}
{/* DIGIS makes our world go round */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
          ? '#1d1d22'
          : '#FFFFFF'
        }
        // background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData} />
        <CakeDataRow />
      </PageSection>

{/* Start in seconds */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
          ? '#1d1d22'
          : 'linear-gradient(180deg, #7645D9 0%, #5121B1 100%)'
        }
        // background="linear-gradient(180deg, #7645D9 0%, #5121B1 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
    </>
  )
}

export default Home
