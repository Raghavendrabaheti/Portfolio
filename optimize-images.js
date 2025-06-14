import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './src/assets';
const outputDir = './src/assets/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create subdirectories
if (!fs.existsSync(path.join(outputDir, 'Certificates'))) {
  fs.mkdirSync(path.join(outputDir, 'Certificates'), { recursive: true });
}

if (!fs.existsSync(path.join(outputDir, 'SSProject'))) {
  fs.mkdirSync(path.join(outputDir, 'SSProject'), { recursive: true });
}

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');

  // List of images to optimize with specific settings
  const imagesToOptimize = [
    // Profile image - most important, higher quality
    {
      input: './src/assets/profile.jpeg',
      output: './src/assets/optimized/profile.webp',
      quality: 85,
      width: 400
    },
    // Project images - medium quality for good balance
    {
      input: './src/assets/SSProject/SIH.png',
      output: './src/assets/optimized/SSProject/SIH.webp',
      quality: 75,
      width: 600
    },
    {
      input: './src/assets/SSProject/tictactoe.png',
      output: './src/assets/optimized/SSProject/tictactoe.webp',
      quality: 75,
      width: 600
    },
    {
      input: './src/assets/SSProject/name.png',
      output: './src/assets/optimized/SSProject/name.webp',
      quality: 75,
      width: 600
    },
    {
      input: './src/assets/SSProject/MultiGame.png',
      output: './src/assets/optimized/SSProject/MultiGame.webp',
      quality: 75,
      width: 600
    },
    {
      input: './src/assets/SSProject/quizdsa.png',
      output: './src/assets/optimized/SSProject/quizdsa.webp',
      quality: 75,
      width: 600
    },
    {
      input: './src/assets/SSProject/logithon.jpeg',
      output: './src/assets/optimized/SSProject/logithon.webp',
      quality: 75,
      width: 600
    },
    {
      input: './src/assets/SSProject/sih24.jpeg',
      output: './src/assets/optimized/SSProject/sih24.webp',
      quality: 75,
      width: 600
    },
    {
      input: './src/assets/SSProject/bilingsys.png',
      output: './src/assets/optimized/SSProject/bilingsys.webp',
      quality: 75,
      width: 600
    },
    // Certificate images - smaller size for better performance
    {
      input: './src/assets/Certificates/CSS.png',
      output: './src/assets/optimized/Certificates/CSS.webp',
      quality: 70,
      width: 400
    },
    {
      input: './src/assets/Certificates/js.png',
      output: './src/assets/optimized/Certificates/js.webp',
      quality: 70,
      width: 400
    },
    {
      input: './src/assets/Certificates/Mernstack.jpg',
      output: './src/assets/optimized/Certificates/Mernstack.webp',
      quality: 70,
      width: 400
    },
    {
      input: './src/assets/Certificates/ndr.jpeg',
      output: './src/assets/optimized/Certificates/ndr.webp',
      quality: 70,
      width: 400
    },
    {
      input: './src/assets/Certificates/sql2.jpg',
      output: './src/assets/optimized/Certificates/sql2.webp',
      quality: 70,
      width: 400
    },
    {
      input: './src/assets/Certificates/cybersecurity.jpg',
      output: './src/assets/optimized/Certificates/cybersecurity.webp',
      quality: 70,
      width: 400
    }
  ];

  for (const image of imagesToOptimize) {
    try {
      if (fs.existsSync(image.input)) {
        const inputStat = fs.statSync(image.input);
        
        await sharp(image.input)
          .resize(image.width, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ 
            quality: image.quality,
            effort: 6 // Maximum compression effort
          })
          .toFile(image.output);

        const outputStat = fs.statSync(image.output);
        const compressionRatio = ((inputStat.size - outputStat.size) / inputStat.size * 100).toFixed(1);
        
        console.log(`✅ ${path.basename(image.input)} -> ${path.basename(image.output)}`);
        console.log(`   ${(inputStat.size / 1024).toFixed(1)}KB -> ${(outputStat.size / 1024).toFixed(1)}KB (${compressionRatio}% reduction)`);
      } else {
        console.log(`⚠️  File not found: ${image.input}`);
      }
    } catch (error) {
      console.error(`❌ Error optimizing ${image.input}:`, error.message);
    }
  }

  console.log('🎉 Image optimization complete!');
}

optimizeImages().catch(console.error);
