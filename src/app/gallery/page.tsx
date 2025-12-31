import fs from 'fs';
import path from 'path';
import GalleryClient from './galleryClient';

async function getGalleryImages() {
  const categoryPaths = {
    'cooking-class': 'cooking class',
    'guest-house': 'guest house',
    'safari': 'safari',
  };

  const imagesByCategory = Object.entries(categoryPaths).reduce((acc, [category, dirName]) => {
    const categoryDir = path.join(process.cwd(), 'public', 'gallery', dirName);
    try {
      if (fs.existsSync(categoryDir)) {
        const imageFiles = fs.readdirSync(categoryDir);
        acc[category] = imageFiles.map(file => `/gallery/${dirName}/${file}`);
      } else {
        acc[category] = [];
      }
    } catch (e) {
      console.error(e);
      acc[category] = [];
    }
    return acc;
  }, {} as Record<string, string[]>);

  return imagesByCategory;
}

export default async function GalleryPage() {
  const allImages = await getGalleryImages();

  return <GalleryClient allImages={allImages} />;
}
