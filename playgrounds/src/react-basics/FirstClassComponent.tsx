import React from "react";

interface FirstClassComponentProps {
  firstProp: string;
}

export class FirstClassComponent extends React.Component<FirstClassComponentProps> {
  constructor(props: FirstClassComponentProps) {
    super(props);

    this.state = {
      firstProp: "test",
    };
  }

  render() {
    return <div>Class Component with props: {this.props.firstProp}</div>;
  }
}
