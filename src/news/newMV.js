import React from 'react';
import Nav from '../generalLayout/nav';
import NavDesktop from '../generalLayout/navDesk';
import PageName from '../generalLayout/pageName';
import {MVNewsHeader} from './component/newsMVHeader';
import {MVNewsM} from './component/newsMVM';
import {MVNewsS} from './component/newsMVS';
import "./news.css";
export function NewsMV(){
    return (
      <>
        <NavDesktop colorBlack={true} />
        <Nav />
        <PageName namePage="MV Agusta News" />
        <MVNewsHeader />
        <MVNewsM />
        <MVNewsS />
      </>
    );

}