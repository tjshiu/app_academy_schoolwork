const DOMNodeCollection = require('./dom_node_collection.js');

// identify nodes in the page
// Window.prototype.$l = function (selector) {
//   return Array.from(Document.querySelectorAll(selector));
// };
let queue = [];

window.$l = function (element) {

  if (typeof element === "function") {
    console.log(queue.push(element));
  } else {
    const htmlEl =  Array.from(document.querySelectorAll(element));
    return new DOMNodeCollection(htmlEl);
  }
};

window.$l(() => console.log("test"));
document.addEventListener("DOMContentLoaded", () => {
  console.log("test2");
  queue.forEach((el) => el());
});
