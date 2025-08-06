const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

async function build(isLocal = false) {
  try {
    console.log('🚀 Starting build process...');
    
    const rootDistDir = path.join(__dirname, 'dist');
    const sourceDir = path.join(__dirname, 'proyectofinal.github.io-main');
    const viteDistDir = path.join(sourceDir, 'dist');
    
    // Remove root dist directory if it exists
    if (await fs.pathExists(rootDistDir)) {
      console.log('🗑️  Removing existing dist directory...');
      await fs.remove(rootDistDir);
    }
    
    // Remove vite dist directory if it exists to ensure clean build
    if (await fs.pathExists(viteDistDir)) {
      console.log('🗑️  Removing existing vite dist directory...');
      await fs.remove(viteDistDir);
    }
    
    // Run Vite build in the source directory
    console.log('⚡ Running Vite build...');
    try {
      const buildCommand = isLocal ? 'npm run build -- --base=/' : 'npm run build';
      execSync(buildCommand, { 
        cwd: sourceDir, 
        stdio: 'inherit',
        encoding: 'utf8'
      });
      console.log('✅ Vite build completed successfully!');
    } catch (buildError) {
      console.error('❌ Vite build failed:', buildError.message);
      process.exit(1);
    }
    
    // Create new root dist directory
    console.log('📁 Creating root dist directory...');
    await fs.ensureDir(rootDistDir);
    
    // Copy the entire vite dist directory to root dist
    if (await fs.pathExists(viteDistDir)) {
      console.log('📦 Copying Vite build output...');
      await fs.copy(viteDistDir, rootDistDir);
    } else {
      console.error('❌ Vite dist directory not found after build');
      process.exit(1);
    }
    
    // Copy additional static assets (images and videos) that might not be in vite build
    const imagesSource = path.join(sourceDir, 'images');
    const imagesDest = path.join(rootDistDir, 'images');
    if (await fs.pathExists(imagesSource)) {
      console.log('🖼️  Copying images directory...');
      await fs.copy(imagesSource, imagesDest);
    }
    
    const videosSource = path.join(sourceDir, 'videos');
    const videosDest = path.join(rootDistDir, 'videos');
    if (await fs.pathExists(videosSource)) {
      console.log('🎬 Copying videos directory...');
      await fs.copy(videosSource, videosDest);
    }
    
    console.log('✅ Build completed successfully!');
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Run the build function
const isLocal = process.argv.includes('--local');
build(isLocal);