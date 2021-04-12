import React from 'react';
import Nav from '../generalLayout/nav';
import NavDesktop from '../generalLayout/navDesk';
import PageName from '../generalLayout/pageName';
import { WarrantyHeader } from './component/warrantyHeader';
import { WarrantyBody } from './component/warrantyPlus';

export default function WarrantyLayout(){
    return (
      <>
        <div
          className="nav-pc-homepage nav-wr-content"
          style={{
            height: "84px",
            width: "100vw",
            display:"none",
          }}
        ></div>
        <NavDesktop />
        <Nav color="white" />
        <WarrantyHeader />
        <WarrantyBody />
        <PageName namePage="Buy your Mv Product" />
      </>
    );
}