// svgGenerator.js
const fs = require('fs');

class SvgGenerator {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    generate() {
        const shapeClass = require('./shapes')[this.shape];
        const selectedShape = new shapeClass();
        selectedShape.setColor(this.shapeColor);

        const svgContent = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${selectedShape.render()}
                <text x="10" y="40" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;

        return svgContent;
    }
}

module.exports = SvgGenerator;
