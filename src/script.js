function component() {
  const element = document.createElement('div');


  element.innerHTML = 'HECK'

  return element;
}

document.body.appendChild(component());

console.log('HIIII');
