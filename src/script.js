import './style.css';
import Main from './main.js';
import Rellax from 'rellax'

const rellax = new Rellax('.rellax', { horizontal:true });

const main = new Main();
main.start();
