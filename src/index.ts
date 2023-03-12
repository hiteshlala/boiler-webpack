import './index.css';
const  { anotherElement } = require('./indexele.js');
const arrow = require('./indexarrow.js');

function component(): HTMLDivElement {
  const element: HTMLDivElement = document.createElement('div');
  element.innerHTML = `
    <p>Boiler plate build tool.</p>
    <p>Type Script File</p>
  `;
  return element;
}

document.body.appendChild(component());

const el = anotherElement() as HTMLDivElement;
document.body.appendChild(el);

const el2 = arrow.anotherElement() as HTMLDivElement;
document.body.appendChild(el2);
