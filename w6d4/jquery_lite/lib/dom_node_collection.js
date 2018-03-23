class DOMNodeCollection  {
  constructor(nodes) {
    this.nodes = nodes;

  }

  on(eventType, cb) {
    for (let i = 0; i < this.nodes.length; i++) {
      let node = this.nodes[i];
      node.addEventListener(eventType, cb);
      node.attr(eventType, cb);
    }
  }

  off(eventType) {
    for (let i = 0; i < this.nodes.length; i++) {
      let node = this.nodes[i];
      let value = node[eventType];
      if (value) {
        node.removeEventListener(eventType, value);
      }
    }
  }

  attr(key, value) {
    if (typeof value === "string") {
      this.nodes.forEach((node) => {
        node.setAttribute(key, value);
      });
    } else {
      return this.nodes[0].getElementsByTagName(`${key}`);
    }
  }

  empty() {
    for (let i = 0; i < this.nodes.length; i++) {
      let node = this.nodes[i];
      node.innerHTML = "";
    }
  }

  append(element) {
    // IF "element" is a DOMNodeCollection
    // Add html of each item in 'element' to innerHTML of ever element in our nodes array
    // Iterate over nodes array, add elements to innerHTML of our node element
    if (element instanceof DOMNodeCollection) {
      for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].innerHTML.append(this.html(element));
      }
    } else {
      for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].innerHTML.append(element);
      }
    }
  }

  children() {
    this.nodes.forEach((node) => {
      new DOMNodeCollection(node.children);
    });
  }

  parent() {
    this.nodes.forEach((node) => {
      new DOMNodeCollection(node.parentNode);
    });
  }

  find(selector) {
    this.nodes.forEach((node) => {
      new DOMNodeCollection(node.querySelectorAll(selector));
    });
  }

  addClass(newClass) {
    this.nodes.forEach((node) => {
      node.classList.add(newClass);
    });
  }

  addClass(oldClass) {
    this.nodes.forEach((node) => {
      node.classList.remove(oldClass);
    });
  }

  html(element) {
    if (typeof element === "string") {
      for (let i = 0; i < this.nodes.length; i++) {
        let node = this.nodes[i];
        node.innerHTML = element;
      }
    } else if (this.nodes.length > 0) {
      return this.nodes[0].innerHTML;
    }
  }

  remove() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].parentNode.removeChild(this.nodes[i]);
    }
  }

}

module.exports = DOMNodeCollection
