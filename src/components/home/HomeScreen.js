import React from 'react'
import { Box, Container, Grid } from '@mui/material';
import { FooterScreen } from '../footer/FooterScreen'
import { HeaderScreen } from '../header/HeaderScreen';

import simson from '../../images/imagen.png'

export const HomeScreen = () => {
  return (
    <main>
        <HeaderScreen />
          <Container sx={{ p: 2 }}>
            <Box sx={{ p: 4, color: "text.secondary" }}>   
              <Grid  container sx={{ spacing: 2 }}>
                <Grid item xs={ 4 }>
                <img src={simson} height="200" />
                </Grid>
                <Grid item sx={{ textAlign: "center" }}>
                  grid 2
                </Grid>

              </Grid>
              <Grid  container sx={{ spacing: 2 }}>
                <Grid item xs={ 4 }>
                  <h1>About <span className="secondaryText">me</span></h1>
                </Grid>
                <Grid item>
                  grid 2
                </Grid>

              </Grid>
            </Box>
          </Container>
        <FooterScreen />
    </main>
  )
}
