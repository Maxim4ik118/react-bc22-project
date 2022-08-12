import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { GeneralCard } from 'components';

import s from './GeneralCardList.module.css';

class GeneralCardList extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };
  }

  // ({ list = [], openDropMenu })
  render() {
    console.log(this.state);
    return (
      <div className={s.generalCardWrapper}>
        {this.props.list.length > 0 &&
          this.props.list.map(({ text }) => {
            return (
              <GeneralCard
                key={text}
                text={text}
                openDropMenu={this.props.openDropMenu}
              />
            );
          })}
      </div>
    );
  }
}

GeneralCardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  openDropMenu: PropTypes.func.isRequired,
};

export default GeneralCardList;
