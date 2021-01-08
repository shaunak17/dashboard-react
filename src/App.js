import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ViewManager from './app/ViewManager';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <ViewManager />
      </SnackbarProvider>
    </div>
  );
}

export default App;
