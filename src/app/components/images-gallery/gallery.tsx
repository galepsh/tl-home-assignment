"use client"
import { useState } from 'react';
import {ImageDataItem} from "@/app/media-fetcher/image-data.interface";
import styles from './gallery.module.css';
import React from 'react';
const LazyLoadedVideo = React.lazy(() => import('../video-player/player')); // Lazy load Video component

interface ImageGalleryProps {
    images: ImageDataItem[];
}

const ImagesGallery: React.FC<ImageGalleryProps> = ({ images }) => {
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
                            <img src={data.image} alt=""/>
                        </React.Suspense>
                    </div>
                ))}
            </div>
            {currentVideo && (
                <div className={styles.videoModal}>
                    <React.Suspense fallback={<div>Loading video...</div>}>
                        <LazyLoadedVideo src={currentVideo} />
                    </React.Suspense>
                    <button onClick={() => setCurrentVideo(null)}>Close Video Player</button>
                </div>
            )}
        </div>
    );
};

export default ImagesGallery;
