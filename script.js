console.log("SBA 0.3")


const emailInput = document.getElementById('email');

form = document.querySelector('form');


const newParagraph = document.createElement('p');
const paragraphText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sem lacus, iaculis sit amet consequat in, tincidunt eu mi. Etiam gravida rhoncus arcu in venenatis. Phasellus tempus magna libero, eu');
newParagraph.appendChild(paragraphText);


const template = document.getElementById('Template');
const fragment = new DocumentFragment();
const templateContent = template.content.cloneNode(true);
fragment.appendChild(templateContent);
const targetElement = document.getElementById('target');
targetElement.appendChild(fragment);


