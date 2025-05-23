"use client";
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
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  };

  return (
    <div className="bg-black">
      <Slider {...settings} className='imageSlider'>
        {imageClients.map((imageClient, index, key) => (
          <section key={index} className="inline-flex justify-center">
            <Image
              src={imageClient.url}
              loading="lazy"
              width="100"
              height="100"
              className="object-contain object-center"
              alt={imageClient.alts}
            />

          </section>
        ))}
      </Slider>
    </div>
  );
}
