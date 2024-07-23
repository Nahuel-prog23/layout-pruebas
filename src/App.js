import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, CssBaseline, Box, Container } from '@mui/material';
import AppBarra from './Component/AppBarra';
import Navegador from './Component/Navegador';
import Principal from './Component/Principal';

const drawerWidth = 240;

const App = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* AppBarra */}
      <AppBarra />
      {/* Navegador */}  
      <Navegador />
      {/* Principal */}
      <Principal drawerWidth={drawerWidth}/>       

    </Box>
  );
};

export default App;
