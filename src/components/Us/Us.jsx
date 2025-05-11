import React, { useState } from 'react';
import './Us.css';
import gallery_1 from '../../assets/gallery-1.jpg';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.jpeg';
import gallery_5 from '../../assets/gallery-5.png';
import gallery_6 from '../../assets/gallery-6.webp';
import banner_1 from '../../assets/Banner-1.jpg';
// Additional gallery images
import user_1 from '../../assets/user-1.jpeg';
import user_2 from '../../assets/user-2.jpeg';
import user_3 from '../../assets/user-3.jpeg';
import user_4 from '../../assets/user-4.jpeg';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';

const Us = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const allImages = [
        gallery_1, gallery_2, gallery_3, gallery_4, 
        gallery_5, gallery_6, banner_1,
        user_1, user_2, user_3, user_4,
        program_1, program_2
    ];

    const openImageModal = (img) => {
        setSelectedImage(img);
        setShowModal(true);
    };

    const closeImageModal = () => {
        setShowModal(false);
    };

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, allImages.length));
    };

    return (
        <section id="gallery" className='us'>
            <div className="gallery">
                {allImages.slice(0, visibleCount).map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Gallery ${index + 1}`}
                        onClick={() => openImageModal(img)}
                        className="gallery-image"
                    />
                ))}
            </div>

            {showModal && (
                <div className="image-modal" onClick={closeImageModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage} alt="Enlarged view" />
                        <button className="close-modal" onClick={closeImageModal}>
                            &times;
                        </button>
                    </div>
                </div>
            )}

            <div className="button-container">
                {visibleCount < allImages.length ? (
                    <button className='btn view-more-btn' onClick={loadMore}>
                        View More
                    </button>
                ) : (
                    <button className='btn view-less-btn' onClick={() => setVisibleCount(4)}>
                        View Less
                    </button>
                )}
            </div>
        </section>
    );
}

export default Us;
