import React from 'react';
import { connect } from 'react-redux';

import css from './Title.less'

const Title = ({ title }) => <h1 class={ css.component  }>{title}</h1>

export default connect(
  state => ({ title: state.title })
)(Title);