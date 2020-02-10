import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import qs from 'qs';
import { rootActions } from '../../store';
import { ImageUpload, Toastr, AppLayout } from '../../molecules';
import { PButton } from '../../atoms';
import Edit from '../Edit';

const Main = (props) => {
  const { location, openToastr, fetchHeaderData, ...otherprops } = props;
  useEffect(() => {
    fetchHeaderData();
  }, []);
  const urlQuery = qs.parse(`${window.location.search || ''}`.replace(/\?/g, ''));
  switch (true) {
    case typeof urlQuery.edit !== 'undefined':
      return <Edit {...props} />;
    default:
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
  }
};

const mapDispatchToProps = rootActions;
const mapStateToProps = (state) => ({ ...state });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect, AppLayout, Toastr)(Main);
