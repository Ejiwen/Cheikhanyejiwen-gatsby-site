/** @jsx jsx */
// import React from "react"
import { jsx, Box, Grid, Text, Container } from "theme-ui"
import LeftSide from "../pages/LeftSide"
import "../styles/style.css"

const Layout = ({ children }) => {
  return (
    <Grid gap={0} columns={["20% 80%"]}>
      <Box className="sideBar" bg="background.0" p={2} sx={{ height: "100vh" }}>
        <LeftSide />
      </Box>
      <Box p={2} bg="background.1">
        <Container>
          <Text variant="posts"> {children} </Text>
        </Container>
      </Box>
    </Grid>
  )
}

export default Layout
