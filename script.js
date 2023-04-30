let current_time = document.getElementById("current_time");
let current_date = document.getElementById("current_date");
let cc = document.getElementsByClassName("Homepage")[0];
function gofull(){
if (cc.requestFullscreen) {
    cc.requestFullscreen();
  }}

current_time.innerHTML = new Date().getHours() +":" + new Date().getMinutes();
// current_date.innerHTML = new Date().getDate() +" " + (new Date().getMonth()+01);


// Get the image element from the DOM
const img = document.getElementById("cover-image");
// Get the image element from the DOM

// Create a canvas element and set its dimensions to match the image
const canvas = document.createElement('canvas');
canvas.width = img.width;
canvas.height = img.height;

// Get the 2D context of the canvas
const ctx = canvas.getContext('2d');

// Draw the image onto the canvas
ctx.drawImage(img, 0, 0, img.width, img.height);

// Get the pixel data from the canvas
const pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

// Loop through the pixel data and count the occurrences of each color
const colorCount = {};

for (let i = 0; i < pixelData.length; i += 4) {
  const r = pixelData[i];
  const g = pixelData[i + 1];
  const b = pixelData[i + 2];
  const key = `${r},${g},${b}`;

  if (colorCount[key]) {
    colorCount[key] += 1;
  } else {
    colorCount[key] = 1;
  }
}

// Find the color with the highest count
let maxCount = 0;
let mostFrequentColor = '';

for (const key in colorCount) {
  if (colorCount[key] > maxCount) {
    maxCount = colorCount[key];
    mostFrequentColor = key;
  }
}

// Convert the most frequent color to an RGB string
const [r, g, b] = mostFrequentColor.split(',');
const avgColor = `rgb(${r}, ${g}, ${b})`;

// Log the most frequent color to the console
console.log(avgColor);


// Log the average color to the console
console.log(avgColor);
let music_widget = document.getElementsByClassName("music-widget")[0];
// music_widget.style.backgroundColor = avgColor;


let music_controller = ()=>{

};

