import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'
import AppBar from 'pages/appBar'
import MediaControlCard from 'pages/mediaControl'
import RecipeReviewCard from 'pages/complexCard'
import ComplexGrid from 'pages/complexGrid'
import SpeedDial from 'pages/speedDial'
import ScrollableTabs from 'pages/scrollableTabs'
// import PaginationLink from 'pages/routedPagination'
import BottomNavigation from 'pages/bottomNav'
import SpacingGrid from 'pages/grid'

const HomePage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'home' })}>
      <AppBar />
      <ScrollableTabs />
      <MediaControlCard />
      {/* <PaginationLink /> */}
      <ComplexGrid />
      <SpacingGrid />
      <RecipeReviewCard />
      <SpeedDial />
      <BottomNavigation />
    </Page>
  )
}
export default HomePage
