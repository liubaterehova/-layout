import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './header.scss';

const menu = [{
  key: 0,
  title: 'Home',
},
{
  key: 1,
  title: 'About',
},
{
  key: 2,
  title: 'Services',
},
{
  key: 3,
  title: 'Portfolio',
},
{
  key: 4,
  title: 'Contract',
}];

const listMenu = menu.map(({ key, title }, index) => {
  if (index === 0) {
    return (<div className="active-tab-menu" key={key}>{title}</div>);
  }

  return (<div key={key}>{title}</div>);
});

export const Menu = ({ isModalShow, toggleModal }) => {
  const body = document.getElementsByTagName('body')[0];

  useEffect(() => {
    if (isModalShow) return body.classList.add('no-scroll');

    return body.classList.remove('no-scroll');
  }, [body.classList, isModalShow]);

  return (
    <div className={classNames('menu', {
      'menu-with-overlay': isModalShow,
    })}
    >

      <button type="button" className="button-show-menu" onClick={toggleModal}>
        <div className="div-button-menu" />
      </button>
      <div className={classNames({
        'menu-in-big-screen': !isModalShow,
        'show-menu': isModalShow,
      })}
      >
        {listMenu}
      </div>
    </div>
  );
};

Menu.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isModalShow: PropTypes.bool.isRequired,
};
