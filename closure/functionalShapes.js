"use strict";

const rectangle = (height, width) => {
  return (method) => {
    switch (method) {
      case "getWidth":
        return () => width;
      case "getHeight":
        return () => height; //TODO
      case "getArea":
        return () => height * width; //TODO
      case "setWidth":
        return (newWidth) => rectangle(height, newWidth);
      case "setHeight":
        return (newHeight) => rectangle(newHeight, width); //TODO
      case "toString":
        return () =>
          new Array(height + 1).join(new Array(width + 1).join("X ") + "\n");
      default:
        return (...args) => `unknown method "${method}"`;
    }
  };
};

const square = (side) => {
  return (method) => {
    if (
      method === "setSize" ||
      method === "setWidth" ||
      method === "setHeight"
    ) {
      return (newSize) => square(newSize); // TODO
    } else if (method === "getArea") {
      return () => side * side; //TODO
    } else if (method === "getWidth" || method === "getHeight") {
      return () => side;
    } else if (method === "toString") {
      return () =>
        new Array(side + 1).join(new Array(side + 1).join("X ") + "\n");
    } else {
      return (...args) => `unknown method "${method}"`;
    }
  };
};

module.exports = { rectangle, square };
