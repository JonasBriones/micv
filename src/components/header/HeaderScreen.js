import { Box, Container } from '@mui/material'
import React from 'react'

export const HeaderScreen = () => {
  return (
    <header>
        <Container>
            <Box sx={{ p: 4, color: "text.secondary" }}>   
                Menu
            </Box>
        </Container>
       
    </header>
  )
}
