import React from 'react'
import { Box, Container, Grid } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';


export const FooterScreen = () => {
  return (
    <footer>
      <Container>
        <Box sx={{ p: 4, textAlign: "center", color: "text.secondary" }}>
          <Grid container justifyContent= "center">
            <CopyrightIcon/>1977 - 2022 Jonathan Briones | All Rights Reserved
          </Grid>
        </Box>
      </Container>
    </footer>
  )
}
