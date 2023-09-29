import React, { useState, useClient, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    { url: '/assets/clients/Inca.png', alts: `inca portfolio` },
    { url: '/assets/clients/Kanigraha.png', alts: `kanigraha portfolio` },
    { url: '/assets/clients/kemenprekraf.png', alts: `kemenprekraf portfolio` },
    { url: '/assets/clients/Makadata.png', alts: `makadata portfolio` },
    { url: '/assets/clients/Mindful_P.png', alts: `mindful p portfolio` },
    { url: '/assets/clients/Tanaga.png', alts: `tanaga portfolio` },
    { url: '/assets/clients/TJ_Sports.png', alts: `tj sports portfolio` },
    // Add more image URLs as needed
  ];

  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    lazyload: "ondemand",
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="bg-black">
      <Slider {...settings}>
        {imageClients.map((imageClient, index, key) => (
          <div key={index}>
            <Image
              src={imageClient.url}
              width="100"
              height="100"
              loading="lazy"
              className="rounded-sm object-contain h-32 w-32"
              alt={imageClient.alts}
            />

          </div>
        ))}
      </Slider>
    </div>
  );
}
