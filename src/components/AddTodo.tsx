import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import oc from 'open-color';
import moment from 'moment';
import SvgIcon from 'react-icons-kit';
import { ic_add } from 'react-icons-kit/md/ic_add';
import { Input, DatePicker, Button } from 'antd';
import 'antd/dist/antd.css';

const InputGroup = Input.Group;
const Wrapper = styled.div`
  width: 520px;
`;

const AddTodoText = styled.span`
  padding-left: 3px;
  color: ${oc.gray[5]};
  transition: color 0.3s ease;

  &:hover {
    color: ${oc.gray[8]};
    text-decoration: underline;
    transition: color 0.3s ease;
  }
`;

interface AddTodoProps {
  date: string;
  onClickAdd(event: React.MouseEvent<HTMLElement>): any;
}

class AddTodo extends React.Component<AddTodoProps> {
  public state = {
    enable: false,
  };

  constructor(props: AddTodoProps) {
    super(props);
  }

  public handleClickAdd = (event: React.MouseEvent<HTMLElement>) => {
    if (this.props.onClickAdd) {
      this.props.onClickAdd(event);
    }

    this.setState({ enable: true });
  };

  public handleClickCancel = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ enable: false });
  };

  // public componentWillReceiveProps(nextProps) {
  //   if ('active' in nextProps) {
  //     this.setState({ enable: !!nextProps.active });
  //   }
  // }

  public render() {
    const { date } = this.props;
    const { enable } = this.state;

    return enable ? (
      <Wrapper>
        <InputGroup>
          <Input style={{ width: '75%' }} placeholder="작업 추가" />
          <DatePicker style={{ width: '25%' }} defaultValue={moment(date)} />
        </InputGroup>
        <div style={{ marginBottom: '5px' }} />
        <Button type="primary" size="small" onClick={this.handleClickCancel}>
          작업 추가
        </Button>
        <span style={{ marginLeft: '5px' }} />
        <Button size="small" onClick={this.handleClickCancel}>
          취소
        </Button>
      </Wrapper>
    ) : (
      <AddTodoText onClick={this.handleClickAdd}>
        <SvgIcon size={13} icon={ic_add} /> 작업 추가
      </AddTodoText>
    );
  }
}

export default AddTodo;

// import moment from 'moment';
// import { DatePicker } from 'antd';

// const { MonthPicker, RangePicker } = DatePicker;

// function range(start, end) {
//   const result = [];
//   for (let i = start; i < end; i++) {
//     result.push(i);
//   }
//   return result;
// }

// function disabledDate(current) {
//   // Can not select days before today and today
//   return current && current < moment().endOf('day');
// }
