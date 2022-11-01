import './style.css';
import { slogans } from './variables'
import FallingMan from './images/falling-man.jpg';
import Protest from './images/protest.jpg';
import ObeyPoster from './images/obey-poster.jpg';
import TiananmenSquare from './images/tiananmen-square.jpg';

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

  parallaxScrolling() {
    const rellax = new Rellax('.rellax');
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
    const protestImage = new Image();
    const obeyPosterImage = new Image();
    const tiananmenSquareImage = new Image();
    fallingManImage.src = FallingMan;
    protestImage.src = Protest;
    obeyPosterImage.src = ObeyPoster;
    tiananmenSquareImage.src = TiananmenSquare;
    fallingManImage.classList.add('rellax');
    protestImage.classList.add('rellax');
    obeyPosterImage.classList.add('rellax');
    tiananmenSquareImage.classList.add('rellax');
    fallingManImage.dataset.rellaxSpeed = '2';
    protestImage.dataset.rellaxSpeed = '0.5';
    obeyPosterImage.dataset.rellaxSpeed = '-2';
    tiananmenSquareImage.dataset.rellaxSpeed = '1';
    imageContainer.append(obeyPosterImage, fallingManImage, protestImage, tiananmenSquareImage);
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
