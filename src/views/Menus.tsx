import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Icon } from 'react-icons-kit';
import { ic_archive, ic_today, ic_view_week } from 'react-icons-kit/md';
import { NavLink } from 'react-router-dom';

const MenuWrapper = styled.div`
  width: 300px;
  height: 100%;
  padding-top: 30px;
  background-color: ${oc.gray[0]};
`;

const MenuItem = styled(NavLink)`
  width: 100%;
  height: 45px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  color: ${oc.gray[7]};

  &:hover {
    color: ${oc.gray[9]};
    background-color: #fff;
  }

  &.active {
    background-color: #fff;
    color: ${oc.gray[9]};
    font-weight: bold;
    text-decoration: none;
  }

  & > span > .icon {
    position: relative;
    top: -2px;
  }
`;

const MenuComponent = () => (
  <MenuWrapper>
    <MenuItem to="/inbox">
      <span>
        <Icon className="icon" icon={ic_archive} size="24" />
        <span style={{ marginLeft: 10 }}>관리함</span>
      </span>
    </MenuItem>
    <MenuItem to="/today">
      <span>
        <Icon className="icon" icon={ic_today} size="24" />
        <span style={{ marginLeft: 10 }}>오늘</span>
      </span>
    </MenuItem>
    <MenuItem to="/nextweek">
      <span>
        <Icon className="icon" icon={ic_view_week} size="24" />
        <span style={{ marginLeft: 10 }}>다음 7일</span>
      </span>
    </MenuItem>
  </MenuWrapper>
);

export default MenuComponent;
