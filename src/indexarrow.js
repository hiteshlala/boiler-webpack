

const anotherElement = () => {
  const element = document.createElement('div');
  element.innerHTML = `
    <p> Arrow Function File</p>
  `;
  return element;
}

module.exports = {
  anotherElement
};