import ReactDOM from "react-dom";
import React from "react";
import "./design-tips.css";
import DesignTipIf from "./component/designTipIf";
export default function DesignTips({ designTips }) {
  function ReviewDesignTip() {
    document.querySelector("body").style.overflow = "hidden";
    document.getElementById("designTips-if").classList.add("dt-show");
    ReactDOM.render(<DesignTipIf DTInfs={designTips.inf}/>, document.getElementById("designTips-if"));
  }
  return (
    <>
      <div className="designTips-layout">
        <div className="designTips-container">
          <div className="designTips-header">
            <span>{designTips.span}</span>
            <strong> {designTips.strong}</strong>
          </div>
          <p className="designTips-content">{designTips.p}</p>
          <div className="designTips-bt" onClick={ReviewDesignTip}>
            <p>LEARN MORE </p>
            <span className="bt-plus bt-plus-icon"></span>
          </div>
        </div>
        <div
          className="designTips-bg parallax"
          style={{ backgroundImage: `url(./img/${designTips.src})` }}
        ></div>
        <div id="designTips-if"></div>
      </div>
    </>
  );
}
