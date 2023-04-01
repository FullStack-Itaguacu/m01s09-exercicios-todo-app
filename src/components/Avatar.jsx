import React from "react";

export const Avatar = (props) => {
  return <img src={props.src} className="img-thumbnail" alt={props.alt} />;
};

/*
export class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        src={this.props.src}
        className="img-thumbnail"
        alt={this.props.alt}
      />
    );
  }
}
*/
