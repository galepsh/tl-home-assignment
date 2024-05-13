"use client"
import { useState } from 'react';
import {ImageDataItem} from "@/app/media-fetcher/image-data.interface";
import styles from './gallery.module.css';
import React from 'react';
import ImageWithErrorHandler from "@/app/components/image-with-error-handling/image-with-error-handler"; // more optimized than using the <img/>
const LazyLoadedVideo = React.lazy(() => import('../video-player/player')); // lazy load Video player when needed

interface ImageGalleryProps {
    images: ImageDataItem[];
}

// A function component that is used to show the images received
const Gallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [currentVideo, setCurrentVideo] = useState<string | null>(null);

    const onImageClick = (videoUrl: string) => {
        if (currentVideo) {
            setCurrentVideo(null);
        }
        setTimeout(() => setCurrentVideo(videoUrl), 10);
    };

    return (
        <div className={styles.wholeGallery}>
            <div>
                {images.map((data, index) => (
                    <div key={index} className={styles.photoLink} onClick={() => onImageClick(data.video)}>
                        <React.Suspense fallback={<div>Loading Image...</div>}>
                            <ImageWithErrorHandler className={styles.picture} src={data.image} alt="" width={300} height={200}/>
                        </React.Suspense>
                    </div>
                ))}
            </div>
            {currentVideo && (
                <div className={styles.videoModal}>
                    <React.Suspense fallback={<div>Loading video...</div>}>
                        <LazyLoadedVideo src={currentVideo} />
                    </React.Suspense>
                    <button onClick={() => setCurrentVideo(null)}>X Close Video Player</button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
