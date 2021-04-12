import HorizontalScroll from "react-scroll-horizontal";
import ReactDOM from "react-dom";
import React from "react";
export default function DesignTipIf({ DTInfs }) {
  const parent = { width: `100em`, height: `100%` };
  function CloseDesignTip() {
    document.querySelector("body").style.overflow = "auto";
    document.getElementById("designTips-if").classList.remove("dt-show");
    ReactDOM.render(null, document.getElementById("designTips-if"));
  }
  return (
    <>
      <section className="dt-lt" style={parent}>
        <button
          class="btn__close btn__close-design"
          onClick={CloseDesignTip}
        ></button>
        <DesignTipIfDesk DTInfs={DTInfs} />
        <DesignTipIfMobile DTInfs={DTInfs} />
      </section>
    </>
  );
}
function DesignTipIfMobile({ DTInfs }) {
  const child = { width: `100%`, height: `96%` };
  return (
    <div className="ds-mob">
      {DTInfs.map((DTInf) => (
        <div className="dt-lt-container" style={child}>
          <div className="design-gallery">
            <div className="design-gallery__info">
              <h4>{DTInf.title}</h4>
              <p>{DTInf.content}</p>
            </div>
            <div className="design-gallery__image">
              <picture>
                <source
                  media="(max-width: 991px)"
                  srcset={DTInf.mediumImg}
                  alt=""
                ></source>
                <img
                  class="design-gallery__img"
                  alt="lazy"
                  src={DTInf.largeImg}
                />
              </picture>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
function DesignTipIfDesk({ DTInfs }) {
  const child = { width: `75em`, height: `100%` };
  return (
    <HorizontalScroll
      reverseScroll={true}
      className="ds-desk"
    >
      {DTInfs.map((DTInf) => (
        <div className="dt-lt-container" style={child}>
          <div className="design-gallery">
            <div className="design-gallery__info">
              <h4>{DTInf.title}</h4>
              <p>{DTInf.content}</p>
            </div>
            <div className="design-gallery__image">
              <picture>
                <source
                  media="(max-width: 991px)"
                  srcset={DTInf.mediumImg}
                  alt=""
                ></source>
                <img
                  class="design-gallery__img"
                  alt="lazy"
                  src={DTInf.largeImg}
                />
              </picture>
            </div>
          </div>
        </div>
      ))}
    </HorizontalScroll>
  );
}
