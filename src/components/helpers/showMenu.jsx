export const changeVisibility = () => {
  if (visibleMenu === 'menu-in-big-screen') {
    changeVisibleMenu('show-menu');
    hideStick('stick-for-phone-screen');
    changeMenuFromMobileToDestop('menu-layout');
    changeScroll('no-scroll');
  } else {
    changeVisibleMenu('menu-in-big-screen');
    changeMenuFromMobileToDestop('');
    hideStick('');
    changeScroll('');
  }
};

