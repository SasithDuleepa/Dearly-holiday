'use client';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import GalleryItem from '../../../components/GalleryItem';
import Link from 'next/link';
import Img1 from '../../../../public/sample images/home gallery/1.png'
import Img2 from '../../../../public/sample images/home gallery/2.png'
import Img3 from '../../../../public/sample images/home gallery/3.png'

const images = [
  { src: '../../../../public/sample images/home gallery/1.png', alt: 'Guest house exterior' },
  { src: '../../../../public/sample images/home gallery/2.png', alt: 'Safari jeep in Yala National Park' },
  { src: '../../../../public/sample images/home gallery/3.png', alt: 'Traditional Sri Lankan cooking class' },


];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const HomeGallerySection = () => {
  return (
    <section className=" py-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
   

          <h1 className=" font-qwitcher  mb-4 xl:mb-6 text-foreground text-7xl xl:text-9xl">
        D<span className="text-primary font-semibold">iscover </span>
        O<span className="text-primary font-semibold">ur </span>
        W<span className="text-primary font-semibold">orld </span>
      </h1>



          <p className="text-muted-foreground text-sm md:text-xl font-medium max-w-3xl mx-auto text-pretty leading-relaxed [text-shadow:_0_4px_14px_rgba(0,0,0,0.35)]">
            A glimpse into our guest house, Yala safari adventures, and traditional Sri Lankan cooking experiences.
          </p>
        </div>


        <div className='flex items-center justify-center gap-10 py-10'>
           <div className={`work-card-main1 `}>
             <div className="work-card-main-shade1"></div>
             <p className="work-card-title1">Guest House</p>
             <p className="work-card-content1">Comfortable Rooms, Peaceful Ambience</p>
           </div>
                      <div className={`work-card-main2 `}>
             <div className="work-card-main-shade2"></div>
             <p className="work-card-title2">Wild Safari</p>
             <p className="work-card-content2">Unforgettable Safari Jeep Tours</p>
           </div>
                      <div className={`work-card-main3 `}>
             <div className="work-card-main-shade3"></div>
             <p className="work-card-title3">Cooking Lessons</p>
             <p className="work-card-content3">Hands-On Cultural Cooking Classes</p>
           </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Link href="/gallery" className='button px-15'>See more</Link>
      </div>
      
    </section>
  );
};

export default HomeGallerySection;
