/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Blog from 'containers/Blog/Loadable';
import AddBlog from 'containers/Blog/AddBlog';
import EditBlog from 'containers/Blog/EditBlog';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

import PrivateRoute from './PrivateRoute';

const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        {/* Route Blog*/}
        <PrivateRoute path="/blogs" component={Blog} />
        <PrivateRoute path="/blogs/add-blog" component={AddBlog} />
        <PrivateRoute
          path="/blogs/edit-blog/:id"
          render={({ match }) => <EditBlog match={match} />}
        />
        {/* Route Blog*/}

        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
