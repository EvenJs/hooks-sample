import React from "react";
class Sample1 extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <p> you clicked {count} times </p>
        <button onClick={() => this.setState({count: count + 1})}>
          Click me 
        </button>
      </div>
    )
  }
} 

export default Sample1;
