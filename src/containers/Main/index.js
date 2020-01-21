import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { rootActions } from '../../store';
import { ImageUpload, Toastr, AppLayout } from '../../molecules';
import { PButton } from '../../atoms';

const Main = ({ location, openToastr, fetchHeaderData, ...otherprops }) => {
  console.log(otherprops);
  useEffect(() => {
    fetchHeaderData();
  }, []);
  return (
    <div>
      <h2>
        Main
        {JSON.stringify(location)}
      </h2>
      <ImageUpload />
      <PButton onClick={() => openToastr()}>Open Toastr</PButton>
    </div>
  );
};

const mapDispatchToProps = rootActions;
const mapStateToProps = (state) => ({ ...state });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect, AppLayout, Toastr)(Main);
