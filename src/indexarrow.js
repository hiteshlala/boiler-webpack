

const anotherElement = () => {
  const element = document.createElement('div');
  element.innerHTML = `
    <p> Arrow Function File</p>
  `;
  console.log('Arrow function got called');
  return element;
}

module.exports = {
  anotherElement
};