
const iniciarSidebar=()=>{


  var phoenixIsRTL = window.config.config.phoenixIsRTL;
  if (phoenixIsRTL) {
    var linkDefault = document.getElementById('style-default');
    var userLinkDefault = document.getElementById('user-style-default');
    linkDefault.setAttribute('disabled', true);
    userLinkDefault.setAttribute('disabled', true);
    document.querySelector('html').setAttribute('dir', 'rtl');
  } else {
    var linkRTL = document.getElementById('style-rtl');
    var userLinkRTL = document.getElementById('user-style-rtl');
    linkRTL.setAttribute('disabled', true);
    userLinkRTL.setAttribute('disabled', true);
  }

  var navbarTopShape = window.config.config.phoenixNavbarTopShape;
  var navbarPosition = window.config.config.phoenixNavbarPosition;
  var body = document.querySelector('body');
  var navbarDefault = document.querySelector('#navbarDefault');
  var navbarTop = document.querySelector('#navbarTop');
  var topNavSlim = document.querySelector('#topNavSlim');
  var navbarTopSlim = document.querySelector('#navbarTopSlim');
  var navbarCombo = document.querySelector('#navbarCombo');
  var navbarComboSlim = document.querySelector('#navbarComboSlim');

  var documentElement = document.documentElement;
  var navbarVertical = document.querySelector('.navbar-vertical');

  if (navbarTopShape === 'slim' && navbarPosition === 'vertical') {
    navbarDefault.remove();
    navbarTop.remove();
    navbarTopSlim.remove();
    navbarCombo.remove();
    navbarComboSlim.remove();
    topNavSlim.style.display = 'block';
    navbarVertical.style.display = 'inline-block';
    body.classList.add('nav-slim');
  } else if (navbarTopShape === 'slim' && navbarPosition === 'horizontal') {
    navbarDefault.remove();
    navbarVertical.remove();
    navbarTop.remove();
    topNavSlim.remove();
    navbarCombo.remove();
    navbarComboSlim.remove();
    navbarTopSlim.removeAttribute('style');
    body.classList.add('nav-slim');
  } else if (navbarTopShape === 'slim' && navbarPosition === 'combo') {
    navbarDefault.remove();
    //- navbarVertical.remove();
    navbarTop.remove();
    topNavSlim.remove();
    navbarCombo.remove();
    navbarTopSlim.remove();
    navbarComboSlim.removeAttribute('style');
    navbarVertical.removeAttribute('style');
    body.classList.add('nav-slim');
  } else if (navbarTopShape === 'default' && navbarPosition === 'horizontal') {
    navbarDefault.remove();
    topNavSlim.remove();
    navbarVertical.remove();
    navbarTopSlim.remove();
    navbarCombo.remove();
    navbarComboSlim.remove();
    navbarTop.removeAttribute('style');
    documentElement.classList.add('navbar-horizontal');
  } else if (navbarTopShape === 'default' && navbarPosition === 'combo') {
    topNavSlim.remove();
    navbarTop.remove();
    navbarTopSlim.remove();
    navbarDefault.remove();
    navbarComboSlim.remove();
    navbarCombo.removeAttribute('style');
    navbarVertical.removeAttribute('style');
    documentElement.classList.add('navbar-combo')

  } else {
    topNavSlim?.remove();
    navbarTop?.remove();
    navbarTopSlim?.remove();
    navbarCombo?.remove();
    navbarComboSlim?.remove();
    navbarDefault?.removeAttribute('style');
    navbarVertical?.removeAttribute('style');
  }

}
iniciarSidebar()
