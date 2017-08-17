/**
 * @fileoverview Entry point. Perform initialization tasks here.
 */
import React from 'react';
import { render } from 'react-dom';
import App from './app';

require('./style/app.scss');

render(<App />, document.getElementById('app'));