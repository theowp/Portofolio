// Script to generate PWA icons
// Run this script manually if you need PNG icons:
// 1. Install sharp: npm install sharp --save-dev
// 2. Run: node scripts/generate-icons.js

const fs = require('fs');
const path = require('path');

// Create a simple colored PNG icon using raw bytes
function createSimplePNG(size) {
  // PNG header
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  
  // IHDR chunk
  const width = size;
  const height = size;
  const bitDepth = 8;
  const colorType = 2; // RGB
  const compression = 0;
  const filter = 0;
  const interlace = 0;
  
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(bitDepth, 8);
  ihdrData.writeUInt8(colorType, 9);
  ihdrData.writeUInt8(compression, 10);
  ihdrData.writeUInt8(filter, 11);
  ihdrData.writeUInt8(interlace, 12);
  
  const ihdrChunk = createChunk('IHDR', ihdrData);
  
  // IDAT chunk - simple gradient from blue to purple
  const rawData = [];
  for (let y = 0; y < height; y++) {
    rawData.push(0); // Filter type: None
    for (let x = 0; x < width; x++) {
      // Create a gradient from blue (#3b82f6) to purple (#8b5cf6)
      const ratio = (x + y) / (width + height);
      const r = Math.round(59 + ratio * (139 - 59));
      const g = Math.round(130 + ratio * (92 - 130));
      const b = Math.round(246 + ratio * (246 - 246));
      rawData.push(r, g, b);
    }
  }
  
  const zlib = require('zlib');
  const compressedData = zlib.deflateSync(Buffer.from(rawData));
  const idatChunk = createChunk('IDAT', compressedData);
  
  // IEND chunk
  const iendChunk = createChunk('IEND', Buffer.alloc(0));
  
  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createChunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  
  const typeBuffer = Buffer.from(type, 'ascii');
  const crcData = Buffer.concat([typeBuffer, data]);
  const crc = crc32(crcData);
  
  const crcBuffer = Buffer.alloc(4);
  crcBuffer.writeUInt32BE(crc >>> 0, 0);
  
  return Buffer.concat([length, typeBuffer, data, crcBuffer]);
}

function crc32(data) {
  let crc = 0xFFFFFFFF;
  const table = [];
  
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  
  for (let i = 0; i < data.length; i++) {
    crc = table[(crc ^ data[i]) & 0xFF] ^ (crc >>> 8);
  }
  
  return crc ^ 0xFFFFFFFF;
}

// Generate icons
const iconsDir = path.join(__dirname, '..', 'public', 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

[192, 512].forEach(size => {
  const png = createSimplePNG(size);
  fs.writeFileSync(path.join(iconsDir, `icon-${size}.png`), png);
  console.log(`Created icon-${size}.png`);
});

console.log('Icons generated successfully!');
