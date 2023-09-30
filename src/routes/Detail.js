import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location } = this.props;
    if (location.state === undefined) {
    }
  }
  render() {
    return <span>hello</span>;
  }
}
export default Detail;
