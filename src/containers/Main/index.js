import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { rootActions } from "../../store";

const Main = ({ location, ...otherprops }) => {
  console.log(otherprops);
  return (
    <h2>
      Main
      {JSON.stringify(location)}
    </h2>
  );
};

const mapDispatchToProps = rootActions;
const mapStateToProps = (state) => ({ ...state });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(Main);
