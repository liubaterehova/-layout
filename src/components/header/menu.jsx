import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './header.scss';
import menuforphone from '../png/menuAdaptive.png'; // TODO:

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
      <div className="div-for-button-menu">
        <button type="button" className="button-for-show-menu" onClick={toggleModal}>
          <img src={menuforphone} alt="menu" className="menu-img" />
        </button>
      </div>
      <div className={classNames({
        'menu-in-big-screen': !isModalShow,
        'show-menu': isModalShow,
      })}
      >
        <div className="point-menu active-tab-menu">Home</div>
        {/* TODO: Why do you use this ? */}
        <div className={classNames({
          'stick-for-phone-screen': isModalShow,
        })}
        >|
        </div>
        <div>About</div>
        <div className={classNames({
          'stick-for-phone-screen': isModalShow,
        })}
        >|
        </div>
        <div>Services</div>
        <div className={classNames({
          'stick-for-phone-screen': isModalShow,
        })}
        >|
        </div>
        <div>Portfolio</div>
        <div className={classNames({
          'stick-for-phone-screen': isModalShow,
        })}
        >|
        </div>
        <div>Contract</div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isModalShow: PropTypes.node.isRequired,
};
