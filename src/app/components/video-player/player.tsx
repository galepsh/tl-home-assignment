import React from 'react';

interface PlayerProps {
    src: string;
}

const VideoPlayer: React.FC<PlayerProps> = ({ src }) => {
    return (
        <video controls autoPlay>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
