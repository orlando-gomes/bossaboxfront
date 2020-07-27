import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function RouteWrapper(props) {
  const signedIn = useSelector((state) => state.auth.signedIn);
  const { component: Component, isPrivate = false, isSign, ...rest } = props;

  if (!signedIn && isPrivate) {
    return <Redirect to="/vuttrsignin" />;
  }

  if (signedIn && isSign) {
    return <Redirect to="/vuttrmainpage" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  component: PropTypes.func.isRequired,
  isPrivate: PropTypes.bool,
  isSign: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isSign: false,
};
