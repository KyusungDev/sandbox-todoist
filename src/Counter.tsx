import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';

export interface CounterProps {
  startNumber: number;
}

interface CounterState {
  number: number;
}

// export default class Counter extends React.Component<CounterProps> {
//   public state = {
//     number: 0,
//   };

//   constructor(props: CounterProps) {
//     super(props);
//     this.state.number = props.startNumber;
//   }

//   public handleClick = () => {
//     this.setState({
//       number: this.state.number + 1,
//     });
//   };

//   public render() {
//     return (
//       <div>
//         <h1>{this.state.number}</h1>
//         <Button onClick={e => this.handleClick()} />
//       </div>
//     );
//   }
// }

const Counter: React.FC<CounterProps> = ({ startNumber }) => {
  const [value, setValue] = useState<number>(startNumber);

  return (
    <div>
      <h1>{value}</h1>
      <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => setValue(value + 1)}
      />
    </div>
  );
};

export default Counter;

function useInput(defaultValue: string) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
}

// interface ShowNameProps {
//   name: string;
// }

// const ShowName: React.FunctionComponent<ShowNameProps> = ({ name }) => (
//   <div>{name}</div>
// );

// export default ShowName;
