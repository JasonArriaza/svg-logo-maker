class Shape {
  constructor() {
      this.color = "";
  }

  setColor(color) {
      this.color = color;
  }

  render() {
      // Implement render method in child classes
  }
}

class Circle extends Shape {
  render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,10 250,190 50,190" fill="${this.color}" />`;  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;  }
}

module.exports = { Circle, Triangle, Square };


// function generateSVG(data){
//     return `<svg width="100" height="100">
//     <!-- Shape -->
//     <rect width="100%" height="100%" fill="${data.shapeColor}" />
  
//     <!-- Text -->
//     <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="${data.textColor}" font-size="16" font-family="Arial">
//       ${data.letters}
//     </text>
//   </svg>
//   `;
// }

// module.exports = generateSVG;