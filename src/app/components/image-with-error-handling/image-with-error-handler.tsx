import React, { useState } from 'react';
import Image from 'next/image';

// used to show an image but hide it when the src is invalid
const ImageWithErrorHandler = (props: any) => {
    const [hideImage, setIsHidden] = useState(false);

    return (
        !hideImage && (
            <Image {...props} onError={() => { setIsHidden(true) }} />
        )
    );
};

export default ImageWithErrorHandler;
