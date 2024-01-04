const root = document.getElementById("root");
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  childern: "Click on the link to visit the page",
};
let reactRender = (reactElement, root) => {
  const elem = document.createElement(reactElement.type);
  elem.innerHTML = reactElement.childern;
  for (let prop in reactElement.props) {
    elem.setAttribute(prop, prop.href);
  }
  root.appendChild(elem);
};
reactRender(reactElement, root);
