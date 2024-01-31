function generateSVG(data){
    return `<svg width="100" height="100">
    <!-- Shape -->
    <rect width="100%" height="100%" fill="${data.shapeColor}" />
  
    <!-- Text -->
    <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="${data.textColor}" font-size="16" font-family="Arial">
      ${data.letters}
    </text>
  </svg>
  `;
}

module.exports = generateSVG;