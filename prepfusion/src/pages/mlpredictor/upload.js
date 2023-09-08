const sharp = require('sharp');
const Tesseract = require('tesseract.js');

async function selectText(imagePath) {
  try {
    // Read and preprocess the image using sharp
    const imageBuffer = await sharp(imagePath)
      .grayscale()
      .threshold(128) // Adjust the threshold as needed
      .toBuffer();

    // Recognize the text in the preprocessed image using Tesseract.js
    const { data: { text } } = await Tesseract.recognize(imageBuffer, 'eng');

    return text;
  } catch (error) {
    throw error;
  }
}

async function main() {
  const imagePath = 'image.png';

  try {
    const extractedText = await selectText(imagePath);
    console.log(extractedText);
  } catch (error) {
    console.error('Error:', error);
  }
}

if (require.main === module) {
  main();
}
