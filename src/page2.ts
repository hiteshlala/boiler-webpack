import './page2.css';
const  { anotherElement } = require('./indexele.js');
const arrow = require('./indexarrow.js');
import { anotherElement as second } from './indexmjs.mjs';

const el = anotherElement() as HTMLDivElement;
document.body.appendChild(el);

const el2 = arrow.anotherElement() as HTMLDivElement;
document.body.appendChild(el2);

const el3 = second() as HTMLDivElement;
document.body.appendChild(el3);
