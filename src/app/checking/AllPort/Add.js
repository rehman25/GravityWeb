


import React, { useState, useCallback } from 'react'
import Gallery from "react-photo-gallery";
import Link from 'next/link'
import Carousel, { Modal, ModalGateway } from "react-images";
import style from '../portfolio.module.css'



const Add = ({photos,showMore}) => {
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
                {
                    showMore  ?<li><Link href="/checking" className={`${style.more__btn}`}>More</Link></li>: null
                }
            </div>
        </>
    )
}

export default Add