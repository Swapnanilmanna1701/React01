const mainContainer = document.querySelector('#root');
 const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
       
    },
    children: 'Click me to go to Google'
 }

customRender(reactElement, mainContainer) ;

function customRender(reactElement, Container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    Container.appendChild(domElement);
}
