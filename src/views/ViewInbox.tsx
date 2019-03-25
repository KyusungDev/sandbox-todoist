import React, { Component } from 'react';
import styled from 'styled-components';
import Todo from '../components/Todo';

const TitleWrapper = styled.div`
  font-size: 1.2em;
  padding-left: 3px;
  padding-bottom: 20px;
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

class ViewInbox extends Component {
  render() {
    return (
      <PanelWrapper>
        <TitleWrapper>관리함</TitleWrapper>
        <Todo
          title={''}
          date={new Date()}
          active={false}
          onClickAdd={(e: React.MouseEvent<HTMLElement>) => console.log('add')}
        />
      </PanelWrapper>
    );
  }
}

export default ViewInbox;
