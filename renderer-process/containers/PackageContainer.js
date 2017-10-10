'use strict';

import {remote, ipcRenderer} from 'electron';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';

import {showMessageBox} from '../../utils';
import PackageDetails from '../components/package/PackageDetails';

const PackageContainer = (props) => {
  return (
    <div className="package-container">
      <PackageDetails
        active={props.active}
        setActive={props.actions.setActive}
        toggleMainLoader={props.actions.toggleMainLoader}
      />
    </div>
  )

}
function mapStateToProps(state) {
  return {
    active: state.active
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PackageContainer);
