const colorInput = document.getElementById('color-input');
const colorPreview = document.getElementById('color-preview');
const hexValueText = document.getElementById('color-hex-value');
const pageMain = document.querySelector('main');

function updateColors() {
  const newColor = colorInput.value;
  colorPreview.style.backgroundColor = newColor;
  hexValueText.textContent = newColor;
  pageMain.style.backgroundColor = newColor;
}

colorInput.addEventListener('input', updateColors);
