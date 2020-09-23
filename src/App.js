import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageHome from './components/PageHome';
import PageThread from './components/PageThread';
import PageNotFound from './components/PageNotFound';

const App =()=> {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={'/'} >
            <PageHome />
          </Route>
          <Route exact path={'/threads/:threadId'} >
            <PageThread />
          </Route>
          <Route exact path={'*'} >
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
