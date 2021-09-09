import React from "react";

class Example2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    const { count } = this.state;
    document.title = `You clicked ${count} times`;
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = `You clicked ${count} times`;
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You clicked ${count} times</p>
        <button onClick={() => this.setState({count: count + 1})}>
          Click me 
        </button>
      </div>
    );
  }
}

export default Example2;
