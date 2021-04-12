import React from 'react';
import Nav from '../generalLayout/nav';
import NavDesktop from '../generalLayout/navDesk';
import SlideImage from './Component/bespokeSlideImage'
import TheTeam from './Component/bespokeTeam'
import MotorItem from '../generalLayout/motorItems'
import Feedback from './Component/bespokeFeedback'
import GalleryStep from './Component/bespokeGalleryStep'

const advantages=[
  {
    name: "ADD ACCESSORIES",
    title: "ADD ACCESSORIES",
    description: "Customers can choose to add any accessory available in the MV Agusta catalog.",
    img: {
      original: "bespoke/accessories.png",
      large: "bespoke/accessories.png",
      medium: "bespoke/accessories.png",
      small: "bespoke/accessories.png",
    }
  },
  {
    name: "NEW UPHOLSTERY",
    title: "NEW UPHOLSTERY",
    description: "Any type of upholstery can be chosen to match the rest of design and further personalise the bike, with the largest possible choice of fabrics and materials (Alcantara, leather with different textures, personalised embroidery)",
    img: {
      original: "bespoke/design.png",
      large: "bespoke/design.png",
      medium: "bespoke/design.png",
      small: "bespoke/design.png",
    }
  },
  {
    name: "COMPLETE DESIGN",
    title: "COMPLETE DESIGN",
    description: "Only high-end paint is used, and particular attention is paid to textures, offering various effects such as wood or brushed aluminium. Other refined techniques are also available to highlight specific parts, such as gold or silver leaf work, chrome plating or anodising.",
    img: {
      original: "bespoke/upholstery.png",
      large: "bespoke/upholstery.png",
      medium: "bespoke/upholstery.png",
      small: "bespoke/upholstery.png",
    }
  }
]

export default function BespokeLayout(){
    return (
      <>
        <div
          className="nav-pc-homepage"
          style={{
            width: "100vw",
            background: "linear-gradient( 90deg ,#4DA5B8 0%,#51A2CF 100%)",
          }}
        >
           <div className="area-banner">
            <picture>
                 <img className="img-banner img-banner-phone" media="(max-width: 991px)" src="./img/bespoke/banner-m.png"></img>
                <img className="img-banner img-banner-wd" src="./img/bespoke/banner-xl.png"></img>
            </picture>
            <div className="title-header">
                <h1>
                <strong>MONACO</strong>
                <strong>DESIGN</strong>
                <strong>STUDIO</strong>
                </h1>
            </div>
        </div>
        </div>
        <NavDesktop />
        <Nav color="white"/>
        <SlideImage/>
        <GalleryStep/>
        <MotorItem advantages={advantages}/>
        <TheTeam/>
        <Feedback/>
      </>
    );
}

