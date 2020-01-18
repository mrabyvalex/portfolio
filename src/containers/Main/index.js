import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { rootActions } from '../../store';
import { AppLayoutHOC } from '../../hocs';
import { ImageUpload } from '../../compounds';

const Main = ({ location, ...otherprops }) => {
  console.log(otherprops);
  return (
    <div>
      <h2>
        Main
        {JSON.stringify(location)}
      </h2>
      <ImageUpload />
    </div>
  );
};

const mapDispatchToProps = rootActions;
const mapStateToProps = (state) => ({ ...state });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect, AppLayoutHOC)(Main);
