const generateBtn = document.getElementById('generate-btn');
const paletteContainer = document.getElementById('palette-container');

// This function calls the API to get the colors
async function fetchPalette() {
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);

  const apiUrl = `https://www.thecolorapi.com/scheme?hex=${randomHex}&mode=analogic&count=5`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayPalette(data.colors);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    paletteContainer.innerHTML = `<p>Sorry, could not fetch a palette. Please try again.</p>`;
  }
}

// This function displays the colors on the page
function displayPalette(colors) {
  // Clear any old colors
  paletteContainer.innerHTML = '';

  colors.forEach((color) => {
    const colorColumn = document.createElement('div');
    colorColumn.classList.add('color-column');
    colorColumn.style.backgroundColor = color.hex.value;
    colorColumn.textContent = color.hex.value;
    paletteContainer.appendChild(colorColumn);
  });
}

generateBtn.addEventListener('click', fetchPalette);

fetchPalette();
