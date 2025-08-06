const fs = require('fs-extra');
const path = require('path');

async function build() {
  try {
    console.log('🚀 Starting build process...');
    
    const distDir = path.join(__dirname, 'dist');
    const sourceDir = path.join(__dirname, 'proyectofinal.github.io-main');
    
    // Remove dist directory if it exists
    if (await fs.pathExists(distDir)) {
      console.log('🗑️  Removing existing dist directory...');
      await fs.remove(distDir);
    }
    
    // Create new dist directory
    console.log('📁 Creating dist directory...');
    await fs.ensureDir(distDir);
    
    // Copy index.html
    const indexSource = path.join(sourceDir, 'index.html');
    const indexDest = path.join(distDir, 'index.html');
    if (await fs.pathExists(indexSource)) {
      console.log('📄 Copying index.html...');
      await fs.copy(indexSource, indexDest);
    } else {
      console.warn('⚠️  index.html not found in source directory');
    }
    
    // Copy assets directory
    const assetsSource = path.join(sourceDir, 'assets');
    const assetsDest = path.join(distDir, 'assets');
    if (await fs.pathExists(assetsSource)) {
      console.log('🎨 Copying assets directory...');
      await fs.copy(assetsSource, assetsDest);
    } else {
      console.warn('⚠️  assets directory not found in source directory');
    }
    
    // Copy images directory
    const imagesSource = path.join(sourceDir, 'images');
    const imagesDest = path.join(distDir, 'images');
    if (await fs.pathExists(imagesSource)) {
      console.log('🖼️  Copying images directory...');
      await fs.copy(imagesSource, imagesDest);
    } else {
      console.warn('⚠️  images directory not found in source directory');
    }
    
    // Copy videos directory
    const videosSource = path.join(sourceDir, 'videos');
    const videosDest = path.join(distDir, 'videos');
    if (await fs.pathExists(videosSource)) {
      console.log('🎬 Copying videos directory...');
      await fs.copy(videosSource, videosDest);
    } else {
      console.warn('⚠️  videos directory not found in source directory');
    }
    
    console.log('✅ Build completed successfully!');
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Run the build function
build();