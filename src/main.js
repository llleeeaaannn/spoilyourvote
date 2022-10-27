import './style.css';

export default class Main {

  constructor() {
    this.value = 'HECK';
  }

  start() {
    this.addListeners();
  }

  addListeners() {
    this.menuToggleListener();
  }

  menuToggleListener() {
    const logo = document.getElementById('logo-container');
    const menuBars = document.querySelectorAll('.menu-bar');
    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.getElementById('menu-container');
    const mainContainer = document.getElementById('main-container');
    menuToggle.addEventListener('click', () => {
      menuBars.forEach(bar => bar.classList.toggle('menu-selected'));
      menuContainer.classList.toggle('show-menu');
      mainContainer.classList.add('show-menu');
      logo.classList.toggle('show-menu');
    });
  }

}
