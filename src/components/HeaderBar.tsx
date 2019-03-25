import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
// import { Input, Button } from 'semantic-ui-react';
// import SvgIcon from 'react-icons-kit';
// import { ic_add } from 'react-icons-kit/md/ic_add';
// import { ic_playlist_add_check } from 'react-icons-kit/md/ic_playlist_add_check';
import { Input, Button, Icon, Popover } from 'antd';
// import AddTodo from './AddTodo';
import moment from 'moment';

// const SearchBar = styled(Input.Search)`
//   top: -1px;
//   color: ${oc.gray[6]};

//   & > input {
//     border: none;
//     background-color: ${oc.gray[8]};
//   }
//   & > input:hover {
//     background-color: ${oc.gray[7]};
//   }
//   & > input:focus {
//     background-color: ${oc.gray[2]};y
//   }
// `;

// const MainIcon = styled(SvgIcon)`
//   color: ${oc.gray[1]};

//   &:hover {
//     cursor: pointer;
//   }
// `;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${oc.gray[8]};
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SidebarWrapper = styled.div`
  width: 250px;
`;

const ViewWrapper = styled.div`
  width: 550px;
`;

const AddIconWrapper = styled.div`
  padding-left: 10px;
  width: 50px;
`;

interface HeaderBarProps {}

const HeaderBar: React.FunctionComponent<HeaderBarProps> = props => {
  return (
    <Wrapper>
      <InnerWrapper>
        <SidebarWrapper>sidebar</SidebarWrapper>
        <ViewWrapper>searchbar</ViewWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default HeaderBar;

// class TitleBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { visibleAddTodo: false };
//   }

//   handleClickAddTodo = e => {
//     this.setState({ visibleAddTodo: true });
//   };

//   render() {
//     // const { visibleAddTodo } = this.state;
//     // const addTodoContent = (
//     //   <AddTodo date={moment().format('YYYY-MM-DD')} enable={true} />
//     // );

//     return (
//       <Wrapper>
//         <InnerWrapper>
//           <SidebarWrapper>sidebar</SidebarWrapper>
//           <ViewWrapper>searchbar</ViewWrapper>
//           <AddIconWrapper>
//             {/* <Popover
//               content={addTodoContent}
//               title="빠른 추가"
//               trigger="click"
//             // visible={visibleAddTodo}
//             >
//               <MainIcon
//                 size={35}
//                 icon={ic_add}
//                 onClick={this.handleClickAddTodo}
//               />
//             </Popover> */}
//           </AddIconWrapper>
//         </InnerWrapper>
//       </Wrapper>
//     );
//   }
// }
