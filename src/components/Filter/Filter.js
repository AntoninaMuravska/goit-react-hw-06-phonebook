import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../redux/contacts/contacts-actions';

import s from './Filter.module.css';

const Filter = ({ filter, changeFilter }) => {
  return (
    <label className={s.label}>
      <span className={s.span}>Find contacts by name</span>
      <input
        type="text"
        className={s.input}
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.protoType = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};
