import React from 'react';
import { IconButton, Box, AppBar, Toolbar, Button, Badge } from '@mui/material';
import {Tv, MoreTime, Done, ContactSupport, CloudDownload, Print } from '@mui/icons-material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

function Footor() {

    return (
        <AppBar position="fixed" color="default" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Badge badgeContent={4} color="error" sx={{ mr: 2 }} >
                    <ContactSupport />
                </Badge>
                <IconButton color="primary" aria-label="open drawer">
                    <MoreTime />
                </IconButton>
                <IconButton color="primary" aria-label="open drawer">
                    <Tv />
                </IconButton>
                <IconButton color="primary" aria-label="open drawer">
                    <Done />
                </IconButton>
                <Button
                    id="demo-customized-button"
                    variant='outlined'
                    color="primary"
                    endIcon={<KeyboardArrowDown />}
                >
                    Share
                </Button>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton color="primary">
                    <CloudDownload />
                </IconButton>
                <IconButton color="primary">
                    <Print />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Footor;
