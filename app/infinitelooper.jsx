import React, { useState, useClient, useEffect } from 'react';
import Image from "next/image";

export default function InfiniteImageCarousel() {
    const imageUrls = [
        '/assets/clients/Creabiz.png',
        '/assets/clients/GBC.png',
        '/assets/clients/HaFas.png',
        '/assets/clients/Huang.png',
        '/assets/clients/IBCSD.png',
        '/assets/clients/Ikan_Dorang.png',
        // Add more image URLs as needed
    ];


    const imageClients = [
        { url: '/assets/clients/Creabiz.png', alts: `creabiz portfolio` },
        { url: '/assets/clients/GBC.png', alts: `gbc portfolio` },
        { url: '/assets/clients/HaFas.png', alts: `hafas portfolio` },
        { url: '/assets/clients/Huang.png', alts: `huang portfolio` },
        { url: '/assets/clients/IBCSD.png', alts: `ibcsd portfolio` },
        { url: '/assets/clients/Ikan_Dorang.png', alts: `ikan dorang portfolio` },
        { url: '/assets/clients/IMK.png', alts: `imk portfolio` },
        // Add more image URLs as needed
    ];
    const imageClients2 = [
        { url: '/assets/clients/Inca.png', alts: `inca portfolio` },
        { url: '/assets/clients/Kanigraha.png', alts: `kanigraha portfolio` },
        { url: '/assets/clients/kemenprekraf.png', alts: `kemenprekraf portfolio` },
        { url: '/assets/clients/Makadata.png', alts: `makadata portfolio` },
        { url: '/assets/clients/Mindful_P.png', alts: `mindful p portfolio` },
        { url: '/assets/clients/Tanaga.png', alts: `tanaga portfolio` },
        { url: '/assets/clients/TJ_Sports.png', alts: `tj sports portfolio` },
        // Add more image URLs as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 3000); // Change image every 3 seconds

        return () => {
            clearInterval(scrollInterval);
        };
    }, []);

    useEffect(() => {
        if (currentIndex === imageUrls.length) {
            setCurrentIndex(0); // Reset currentIndex when reaching the end
        }
    }, [currentIndex, imageUrls.length]);

    return (
        <div>
            <div className="carousel-container overflow-hidden min-w-full flex bg-black">
                <div className="logo-container flex">
                    <ul className="justify-between flex gap-8 min-w-full">
                        {imageClients.map((imageClient, index, key) => (
                            <li key={index} className="image-wrapper pr-8">
                                <Image
                                    src={imageClient.url}
                                    width="100"
                                    height="100"
                                    loading="lazy"
                                    className="rounded-sm object-contain h-32 w-32"
                                    alt={imageClient.alts}
                                // style={{
                                //   transform: `translateX(-${(currentIndex * 100) / imageClient.length}%)`,
                                //   transition: 'transform 1s linear',
                                //   whiteSpace: 'nowrap'
                                // }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="logo-container flex">
                    <ul className="justify-between flex gap-8 min-w-full">
                        {imageClients2.map((imageClient, index, key) => (
                            <li key={index} className="image-wrapper pr-8">
                                <Image
                                    src={imageClient.url}
                                    width="100"
                                    height="100"
                                    loading="lazy"
                                    className="rounded-sm object-contain h-32 w-32"
                                    alt={imageClient.alts}
                                // style={{
                                //   transform: `translateX(-${(currentIndex * 100) / imageClient.length}%)`,
                                //   transition: 'transform 1s linear',
                                //   whiteSpace: 'nowrap'
                                // }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* <div className="carousel-container bg-black inline-flex justify-between relative overflow-hidden">
        <div
          className="logo-container h-56 flex gap-8"
          style={{
            transform: `translateX(-${(currentIndex / imageUrls.length) * 100}%)`,
            transition: 'transform 1s ease-in-out',
          }}
        >
          {imageUrls.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              loading="lazy"
              alt={`Image ${index + 1}`}
              className="logo-image"
              width="200"
              height="200"
            />
          ))}
        </div>
        <div
          className="logo-container h-56 flex gap-8"
          style={{
            transform: `translateX(-${(currentIndex / imageUrls.length) * 0}%)`,
            transition: 'transform 1s ease-in-out',
          }}
        >
          {imageUrls.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              loading="lazy"
              alt={`Image ${index + 1}`}
              className="logo-image"
              width="200"
              height="200"
            />
          ))}
        </div>
      </div> */}
        </div>
    );
}
