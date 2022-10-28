import './style.css';
import { slogans } from './variables'
import FallingMan from './falling-man.jpg';
import PeoplePower from './people-power.jpg';

export default class Main {

  constructor() {
    this.value = 'HECK';
  }

  start() {
    this.createUI();
    this.addListeners();
  }

  createUI() {
    this.randomSlogan();
    this.loadImages();
  }

  addListeners() {
    this.menuToggleListener();
  }

  randomSlogan() {
    const sloganContainer = document.getElementById('slogan-container');
    const index = Math.floor(Math.random() * slogans.length);
    const slogan = slogans[index];
    sloganContainer.textContent = slogan;
  }

  loadImages() {
    const imageContainer = document.getElementById('image-container');
    const fallingManImage = new Image();
    const peoplePowerImage = new Image();
    fallingManImage.src = FallingMan;
    peoplePowerImage.src = PeoplePower;
    imageContainer.append(fallingManImage, peoplePowerImage);
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
