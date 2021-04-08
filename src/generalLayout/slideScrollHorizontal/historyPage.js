import React from "react";
import Nav from "../nav";
import NavDesktop from "../navDesk";
import PageName from "../pageName";
import Slider from "react-slick";
import "./SlideHorizontal.css";
export class HistoryPage extends React.Component {
  render() {
    const SlideList = [
      {
        LargeImg: "slide-1-xl.jpg",
        MediumImg: "slide-1-m.jpg",
      },
      {
        LargeImg: "slide-2-xl.jpg",
        MediumImg: "slide-2-m.jpg",
      },
      {
        LargeImg: "slide-3-xl.jpg",
        MediumImg: "slide-3-m.jpg",
      },
      {
        LargeImg: "slide-4-xl.jpg",
        MediumImg: "slide-4-m.jpg",
      },
      {
        LargeImg: "slide-5-xl.jpg",
        MediumImg: "slide-5-m.jpg",
      },
      {
        LargeImg: "slide-6-xl.jpg",
        MediumImg: "slide-6-m.jpg",
      },
      {
        LargeImg: "slide-7-xl.jpg",
        MediumImg: "slide-7-m.jpg",
      },
    ];
    const settingBannerSlide = {
      // centerMode: true,
      lazyLoad: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      infinite: false,
      focusOnSelect: true,
      initialSlide: 0,// slide to start
      draggable: true,
      useTransform: true,
      waitForAnimate: true,
      // asNavFor: ".thumbnail_slider",
    };
    return (
      <>
        <NavDesktop />
        <Nav color="white" />
        <PageName namePage="History" />
        <div className="slick__layout">
          <Slider className="slick__slides_" {...settingBannerSlide}>
            {SlideList.map((slide) => (
              <div className="slide__slide_">
                <picture>
                  <source
                    media="(max-width: 991px)"
                    srcset={`./img/history/${slide.MediumImg}`}
                  ></source>
                  <img
                    alt=""
                    class="slide__slide__img"
                    src={`./img/history/${slide.LargeImg}`}
                  ></img>
                </picture>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
