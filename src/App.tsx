import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import HeaderBar from './components/HeaderBar';
import Menus from './views/Menus';
import ViewInbox from './views/ViewInbox';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
`;

const ViewWrapper = styled.div`
  height: calc(100vh - 40px);
  width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const PanelWrapper = styled.div`
  width: 600px;
  height: 100%;
  padding: 40px;
  background-color: #fff;
  border-left: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
  overflow: auto;
`;

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <HeaderWrapper>
        <HeaderBar />
      </HeaderWrapper>

      <ViewWrapper>
        <BrowserRouter>
          <Menus />
          <Switch>
            <Route
              exact
              path={`/`}
              render={() => <ViewInbox>inbox</ViewInbox>}
            />
            <Route
              path={`/inbox`}
              render={() => <ViewInbox>inbox!</ViewInbox>}
            />
            <Route
              path={`/today`}
              render={() => <PanelWrapper>today!</PanelWrapper>}
            />
            <Route
              path={`/nextweek`}
              render={() => <PanelWrapper>next week!</PanelWrapper>}
            />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </ViewWrapper>
      {/* <Wrapper>Halo!</Wrapper> */}
    </div>
  );
};

export default App;
