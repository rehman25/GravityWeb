import React, { useState, useCallback } from 'react'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const index = ({photos}) => {
    console.log("photos",photos)
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <>
            <div className='portfolio_images'>
                <Gallery photos={photos} onClick={openLightbox} style={{
                    position: "absolute",
                    overflow: "hidden",
                    backgroundColor: "rgba(255 255 255 / .6)",
                    inset: "auto 0 0 0",
                    padding: 8,
                }} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </>
    )
}

export default index