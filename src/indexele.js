

function anotherElement() {
  const element = document.createElement('div');
  element.innerHTML = `
    <p> Javascript File</p>
  `;
  return element;
}

module.exports = {
  anotherElement
};