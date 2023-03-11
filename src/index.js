import './index.css';



function component() {
  const element = document.createElement('div');

  element.innerHTML = 'testing boiler plate build';

  return element;
}

document.body.appendChild(component());