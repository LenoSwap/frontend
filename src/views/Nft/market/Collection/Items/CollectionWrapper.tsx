import React from 'react'
import { Box } from '@lenoswap/uikit'
import isEmpty from 'lodash/isEmpty'
import { Collection } from 'state/nftMarket/types'
import { useGetNftFilters } from 'state/nftMarket/hooks'
import Container from 'components/Layout/Container'
import Filters from './Filters'
import CollectionNfts from './CollectionNfts'
import FilteredCollectionNfts from './FilteredCollectionNfts'

interface CollectionWrapperProps {
  collection: Collection
}

const CollectionWrapper: React.FC<CollectionWrapperProps> = ({ collection }) => {
  const nftFilters = useGetNftFilters()

  return (
    <Box py="32px">
      <Container px={[0, null, '24px']}>
        <Filters collection={collection} />
      </Container>
      <Container>
        {isEmpty(nftFilters) ? (
          <CollectionNfts collection={collection} />
        ) : (
          <FilteredCollectionNfts collection={collection} />
        )}
      </Container>
    </Box>
  )
}

export default CollectionWrapper
