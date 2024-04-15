import React, { Component } from "react";
import Shimmer from "react-shimmer-effect";
import injectSheet from "react-jss";
 
const StyleSheet = {
  container: {
    border: "0px solid rgba(255, 255, 255, 1)",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, .1)",
    borderRadius: "4px",
    backgroundColor: "white",
    display: "flex",
    padding: "16px",
    width: "200px"
  },
  circle: {
    height: "56px",
    width: "56px",
    borderRadius: "50%"
  },
  line: {
    width: "96px",
    height: "8px",
    alignSelf: "center",
    marginLeft: "16px",
    borderRadius: "8px"
  }
};
class SampleShimmer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Shimmer>
          <div className={classes.circle} />
          <div className={classes.line} />
        </Shimmer>
      </div>
    );
  }
}
 
export default injectSheet(StyleSheet)(SampleShimmer);