import React from "react";
import Nav from "../nav";
import NavDesktop from "../navDesk";
import PageName from "../pageName";
import Slider from "react-slick";
import "./SlideHorizontal.css";
export class HistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      nav1: null,
      nav2: null,
    }
  }
  componentDidMount(){
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  next() {
    this.slider1.slickNext();
    // this.slider2.slickNext();
  }
  previous() {
    this.slider1.slickPrev();
    // this.slider2.slickPrev();
  }
  render() {
    function NextPrevSlick(a) {
      document
        .getElementsByClassName("slick__layout")[0]
        .addEventListener("wheel", function (event) {
          event.preventDefault();
          if (event.deltaY < 0) {
            a.previous();
          } else if (event.deltaY > 0) {
            a.next();
          }
        });
    }
    const SlideList = [
      {
        LargeImg: "slide-1-xl.jpg",
        MediumImg: "slide-1-m.jpg",
        title: "THOSE DARING YOUNG MEN IN THEIR FLYING MACHINES",
        contents: [
          "The story of Agusta started in 1907, when Count Giovanni Agusta, a Sicilian aristocrat with a passion for flying machines, founded the Agusta aeronautics company in Palermo.",
          "He soon moved to Northern Italy, in Cascina Costa. At first, Agusta concentrated on servicing planes from other manufacturers.",
          "With the outbreak of WWI, he moved on to produce his own models for the “Regia Aeronautica”, Italy’s royal Air Force.",
        ],
        year: "1907",
      },
      {
        LargeImg: "slide-2-xl.jpg",
        MediumImg: "slide-2-m.jpg",
        title: "FROM SKY TO TARMAC",
        contents: [
          "Count Giovanni died in 1927, his widow Countess Giuseppina and son Domenico succeeded him at the helm of the family business, expanding it and consolidating its position in the industry.",
          "After the war the airplane industry had dramatically declined, and Domenico decided to diversify into motorcycles, yet airplane production was not abandoned. It soared again through World War II, but motorcycles had definitively entered the company’s DNA.",
        ],
        year: "1927",
      },
      {
        LargeImg: "slide-3-xl.jpg",
        MediumImg: "slide-3-m.jpg",
        title: "BIRTH OF A LEGEND: THE FIRST MV AGUSTA MOTORCYCLE",
        contents: [
          "As a consequence of the war, airplane production was forbidden in Italy, so the Agustas focused on motorcycles. They created the MV “Meccaniche Verghera” brand in 1945.",
          "The first MV Agusta branded motorcycle was officially launched in the autumn of that year.",
          "It went down in history as the “MV 98”. In 1947, legendary rider Franco Bertoni rode it to the first ever MV Agusta victory on a racetrack in Carate Brianza, near Milan.",
        ],
        year: "1945",
      },
      {
        LargeImg: "slide-4-xl.jpg",
        MediumImg: "slide-4-m.jpg",
        title: "racing dna",
        contents: [
          "Bertoni’s was to be the first of a long streak of MV Agusta victories that lasted for decades. The company constantly experimented with the latest technological advances and this pioneering attitude reflected in its motorcycles, which have always been known for being at the forefront of innovation.",
          "The brand’s victories on the racetracks also boosted the sales of its road models. Therefore, Domenico had many reasons, beyond his personal passion for the racing world, to keep investing in best machines and most skilled riders.",
          "In 1951, he hired Leslie Grahan, an ex-RAF pilot, to ride the twin-cam MV 125 to its first victory on September 30th, 1951, at Thruxton, England. Graham became a true racetrack hero, acclaimed by the crowds and loved by his team.",
        ],
        year: "1947",
      },
      {
        LargeImg: "slide-5-xl.jpg",
        MediumImg: "slide-5-m.jpg",
        title: "BACK UP IN THE AIR WITH HELICOPTERS",
        contents: [
          "In 1955, with a daring, bold move, the Agustas decided to go back to their old love for flying machines and acquired the license for the production of Bell Helicopters, giving birth to Agusta helicopters, today one of Italy’s state-owned most important defense industry jewels.",
        ],
        year: "1955",
      },
      {
        LargeImg: "slide-6-xl.jpg",
        MediumImg: "slide-6-m.jpg",
        title: "MEANWHILE, ON THE RACETRACK…",
        contents: [
          "Domenico hadn’t abandoned his two-wheeled passion, though, and in 1956 he hired another racetrack legend, Carlo Ubbiali. Nicknamed “the flying Chinaman” because of his particular looks, he was in fact authentically Italian.",
          "Ubbiali won five World Championships in the 125 cc category, and two in the 250. He was also three - time Italy’s champion in the 125 class and won the 250 twice.",
        ],
        year: "1956",
      },
      {
        LargeImg: "slide-7-xl.jpg",
        MediumImg: "slide-7-m.jpg",
        title: "THE WINNING STRATEGY OF INNOVATION",
        contents: [
          "The Agustas’ passion for avionics clearly showed in their motorcycles, giving them a raging racing soul, and their domination of the world’s racetracks was unquestionable.",
          "However, mass car ownership caused a sharp decline in the sales of production motorbikes during the late 1950’s and early 1960’s, yet Agusta’s response was to offer ever more innovative models that appealed to the true motorcycle enthusiasts. The strategy paid off also thanks to MV’s uninterrupted racing successes.",
        ],
        year: "1960"
      },
      {
        LargeImg: "slide-8-xl.jpg",
        MediumImg: "slide-8-m.jpg",
        title: "RIDING LIKE A FROG",
        contents: [
          "To support that strategy, in 196 1another racing hero was brought in to guarantee MV Agusta’s continuing domination. Mike Hailwood was one of the greatest riders of all times.",
          "He invented the “froglike” riding position, with knees splayed outwards. He was also the winner of the 1965 Tourist Trophy with 4-cylinder 500cc, just before the rise, under the MV Agusta colours, of the most acclaimed champion in motorcycling history, Giacomo Agostini.",
        ],
        year: "1961"
      },
      {
        LargeImg: "slide-9-xl.jpg",
        MediumImg: "slide-9-m.jpg",
        title: "MV AGUSTA AND AGOSTINI",
        contents: [
          "1965 was the start of what was probably the most celebrated combination in the history of motorcycle racing: that of Giacomo Agostini and MV’s inline three-cylinder engine.",
          "In his career “Ago” won 311 races. He won 13 World Championships titles and 18 Italian titles, making his final, victorious curtain call with the brand in 1976 at the Nürburgring, 5 years after the passing of Count Domenico, at the peak of his and the company’s glory.",
        ],
        year: "1965"
      },
      {
        LargeImg: "slide-10-xl.jpg",
        MediumImg: "slide-10-m.jpg",
        title: "THE DORMANT QUEEN",
        contents: [
          "To succeed Agostini, Agusta called on Phil read, known as the “gentleman rider” for his appearances at racetracks in a white Rolls Royce. He was considered Agostini’s natural successor.",
          "He won six World Championships, one of which flying the MV Agusta colours. His reign only lasted one year after Agostini’s last race. Domenico’s brother, Corrado, had taken over at the lead. In 1973, he sold a controlling share of the family business to EFIM, a state-owned conglomerate, who in 1977 decided it was time for the motorcycle part of the business to take a break, after 37 World Championships titles and 260.000 bikes produced.",
        ],
        year: "1977"
      },
      {
        LargeImg: "slide-11-xl.jpg",
        MediumImg: "slide-11-m.jpg",
        title: "A NEW START ON THE SHORES OF LAKE VARESE",
        contents: [
          "In 1992 the dormant MV Agusta trademark was acquired by Claudio Castiglioni’s Cagiva, maker of acclaimed racetrack and enduro motorcycles, based in Schiranna, on the shores of Lake Varese.",
          "The move proved immediately successful as MV Agusta’s enormous popularity with racing bike enthusiasts had remained intact. New models were designed and produced, and most importantly, the MV Agusta pioneering spirit and love for design and leading-edge technology was maintained as one of the brand’s most important and founding values.",
        ],
        year: "1992"
      },
      {
        LargeImg: "slide-12-xl.jpg",
        MediumImg: "slide-12-m.jpg",
        title: "THE LEGEND GOES ON",
        contents: [
          "In 2017, Luxemburg-based ComSar Invest, headed by Russian entrepreneur Timur Sardarov, became a shareholder of MV Agusta and gradually expanded its equity in the company, first gaining a controlling share and then full ownership in 2019.",
          "Timur Sardarov became CEO of MV Agusta Motor S.p.A. Today, consistent capital injections and important investments, as well as a renewed management team, set MV Agusta on a new, steady growth path. Digitalisation is also high up on the agenda, as well as the systematic reinforcement of the dealers network and of after sales service, with a view to providing the most comprehensive, unique and exciting riding experience to next-generation bikers.",
        ],
        year: "2017"
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
      focusOnSelect: false,
      initialSlide: 0, // slide to start
      draggable: true,
      useTransform: false,
      waitForAnimate: true,
      dots: false,
      // asNavFor: ".thumbnail_slider",
    };
    const settingThumb = {
      // centerMode: true,
      lazyLoad: false,
      slidesToShow: 12,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      infinite: false,
      focusOnSelect: true,
      initialSlide: 0, // slide to start
      draggable: false,
      useTransform: true,
      waitForAnimate: true,
      // asNavFor: ".thumbnail_slider",
    };
    return (
      <>
        <NavDesktop />
        <Nav color="white" />
        <PageName namePage="History" />
        <div className="slick__layout" onLoad={NextPrevSlick.bind(Event, this)}>
          <Slider
            className="slick__slides_"
            {...settingBannerSlide}
            ref={(slider) => (this.slider1 = slider)}
            asNavFor={this.state.nav2}
          >
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
                <div className="splide__slide__story">
                  <h1 class="splide__slide__title">{slide.title}</h1>
                  {slide.contents.map((content) => (
                    <p>{content}</p>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
          <Slider
            className="slick__thumbs_"
            {...settingThumb}
            ref={(slider) => (this.slider2 = slider)}
            asNavFor={this.state.nav1}
          >
            {SlideList.map((slide) => (
              <div className="sl_thumb_">
                <button type="button" className="thumb-year" data-year={slide.year}></button>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
