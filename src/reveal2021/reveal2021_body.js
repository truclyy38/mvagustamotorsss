import React from "react";
import MotorPageHeader from "../generalLayout/motorPage/motorHeader/motorPageHeader";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import PageName from "../generalLayout/pageName";
import { RevealContentLayout } from "./component/revealContentLayout";
import { RevealUpcoming } from "./component/revealUpcoming";
const revealInfor = {
  namePage: "Reveal Events",
  Header: {
    bgHeaderParallax_Large: "revealEvents/banner-bg-xl.png",
    bgHeaderParallax_Small: "revealEvents/banner-bg-xl.png",
    manifesto_Arr: ["REVEAL", "2021"],
    price: "suggest",
    heightContentTop: "21.5%",
  },
};
export default function Reveal2021Page(){
    return (
      <>
        <NavDesktop />
        <Nav color="white" />
        <PageName namePage={revealInfor.namePage} />
        <MotorPageHeader headerData={revealInfor.Header} />
        <RevealContentLayout />
        <RevealUpcoming />
      </>
    );
}