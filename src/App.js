import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import { IconButton, ButtonGroup, Box } from '@mui/material';
import { Add, HorizontalRule, GpsFixed } from '@mui/icons-material';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    type: "dark",
    background: {
      paper: "#1a1a1a",
    },
    primary: {
      main: "#00aaff"
    },
    secondary: {
      main: "#FFFFFF",
      buy: "#1B5E20",
    },
    tertiary: {
      main: "#1B5E20",
    },
  },
  overrides: {
    MuiTabs: {
      root: {
        float: "left"
      }
    },
    MuiAlert: {
      icon: {
        display: "none"
      }
    }
  }
});

function App() {


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Box flex={"auto"}>
            <Box mt={5} pl={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
              <ButtonGroup
                orientation="vertical"
                variant='outlined'
                aria-label="vertical outlined button group"
              >
                <IconButton aria-label="delete" variant="outlined">
                  <Add />
                </IconButton>
                <IconButton aria-label="delete" >
                  <HorizontalRule />
                </IconButton>
              </ButtonGroup>
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
                sx={{ mt: 2 }}
              >
                <IconButton aria-label="delete" variant="outlined">
                  <GpsFixed />
                </IconButton>
              </ButtonGroup>
            </Box>
          </Box>
          <Box>
            <Picker
              onEmojiClick={() => { }}
              disableAutoFocus={true}
              skinTone={SKIN_TONE_MEDIUM_DARK}
              groupNames={{ smileys_people: 'PEOPLE' }}
              native
            />
          </Box>
        </Box>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
