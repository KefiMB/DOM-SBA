console.log("SBA 0.3")

cosnt heading = document.querySelector('h1');


const newParagraph = document.createElement('p');
const paragraphText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sem lacus, iaculis sit amet consequat in, tincidunt eu mi. Etiam gravida rhoncus arcu in venenatis. Phasellus tempus magna libero, eu');
newParagraph.appendChild(paragraphText);
console.log(newParagraph)


const template = document.getElementById('Template');
const fragment = new DocumentFragment();
const templateContent = template.content.cloneNode(true);
fragment.appendChild(templateContent);
const labelElement = document.getElementById('label');
labelElement.appendChild(templateContent);
console.log(Template)

const button = document.getElementById('button')
button.addEventListener('click', () => {
    paragraph.innerText = 'Click me please!';
});
console.log(innerText)

const buttonEl = doccument.getElementById("button");
console.log(buttonEl);
subMenuEl.style.height = "100%";
console.log(button)

button.addEventListener("click", buttonEl);

function buttonEl() {
  alert ("Welcome To Louvre Luxury Hair!");
}
