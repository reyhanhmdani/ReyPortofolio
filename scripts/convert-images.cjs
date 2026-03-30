const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const INPUT_DIR = path.join(__dirname, '..', 'public', 'image');
const OUTPUT_DIR = INPUT_DIR; // Output to same directory

const images = [
  'Porto1.png',
  'andreradityaguru.png',
  'porto-selfa.png',
];

async function convertImages() {
  console.log('🖼️  Starting image conversion...\n');

  for (const filename of images) {
    const inputPath = path.join(INPUT_DIR, filename);
    const baseName = path.parse(filename).name;

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${filename} - file not found`);
      continue;
    }

    const originalSize = fs.statSync(inputPath).size;
    console.log(`📁 ${filename} (Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB)`);

    // Convert to WebP (quality 80 - good balance of quality/size)
    const webpPath = path.join(OUTPUT_DIR, `${baseName}.webp`);
    await sharp(inputPath)
      .webp({ quality: 82, effort: 6 })
      .toFile(webpPath);
    const webpSize = fs.statSync(webpPath).size;
    const webpSaving = ((1 - webpSize / originalSize) * 100).toFixed(1);
    console.log(`   ✅ WebP: ${(webpSize / 1024).toFixed(0)} KB (${webpSaving}% smaller)`);

    // Convert to AVIF (quality 65 - AVIF is more efficient so lower quality still looks great)
    const avifPath = path.join(OUTPUT_DIR, `${baseName}.avif`);
    await sharp(inputPath)
      .avif({ quality: 65, effort: 6 })
      .toFile(avifPath);
    const avifSize = fs.statSync(avifPath).size;
    const avifSaving = ((1 - avifSize / originalSize) * 100).toFixed(1);
    console.log(`   ✅ AVIF: ${(avifSize / 1024).toFixed(0)} KB (${avifSaving}% smaller)`);

    console.log('');
  }

  console.log('🎉 All conversions complete!');
}

convertImages().catch(console.error);
