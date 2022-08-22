import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { GeneralCard } from 'components';

import s from './GeneralCardList.module.css';

class GeneralCardList extends Component {
  // ({ list = [], openDropMenu })
  render() {
    console.log(this.state);
    return (
      <div className={s.generalCardWrapper}>
        {this.props.list.length > 0 &&
          this.props.list.map(({ text, relation }) => {
            return (
              <GeneralCard
                key={text}
                text={text}
                id={text}
                relation={relation}
                onEditCard={this.props.onEditCard}
                onDeleteCard={this.props.onDeleteCard}
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
