import React from "react";

export const Bio = ({ children }) => {
  return (
    <div>
      <h3>Bio</h3>
      {children}
    </div>
  );
};

/**
export class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Bio</h3>
        {this.props.children}
      </div>
    );
  }
}
 */
