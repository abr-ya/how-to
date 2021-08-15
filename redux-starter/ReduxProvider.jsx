import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

const ReduxProvider = ({ children, initialState }) => {
  // не забываем поставить
  // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(reduxPromise)),
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

ReduxProvider.propTypes = {
  children: PropTypes.element.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initialState: PropTypes.any.isRequired,
};

export default ReduxProvider;
