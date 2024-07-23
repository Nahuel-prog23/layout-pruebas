import React from 'react';
import { Box, Container, Toolbar, Typography } from '@mui/material';
import Tabla from './Tabla';
export default function Principal (drawerWidth) {
    
        return (
            <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
            <Toolbar />
            <Container>
            <Typography paragraph>
                <Tabla />
            </Typography>
            </Container>
            </Box>
        );
}                    