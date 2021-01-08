import React from 'react';
import { Box, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    loaderContainer: {
        display: 'flex',
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 150
    },
    loaderBg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.grey[400],
        opacity: 0.2
    }
}));

function Loader({ horizontal = false, showProgress = true }) {
    const classes = useStyles();
    return (
        <div className={classes.loaderContainer}>
            <Box m="auto">
                <Box
                    display="flex"
                    flexDirection={horizontal ? 'row' : 'column'}
                    textAlign="center"
                    alignItems="center"
                >
                    {showProgress && (
                        <Box m="20px">
                            <CircularProgress thickness={5} size={horizontal ? 20 : 40} />
                        </Box>
                    )}
                </Box>
            </Box>
            <div className={classes.loaderBg} />
        </div>
    );
}

export default Loader;
