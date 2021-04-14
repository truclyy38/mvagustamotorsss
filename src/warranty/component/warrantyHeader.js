import React from 'react'
import background from "../img/banner-bg-l.jpg";
import backgroundM from "../img/banner-bg-m.jpg";
export function WarrantyHeader(){
    return(
        <div className="wr-hd-contain">
            <picture className="wr-hd-background">
                <source media="(max-width: 984px)" srcSet={backgroundM}></source>
                <img className="wr-hd-bg-img" src={background} alt="background"></img>
            </picture>
            
            <div className="wr-hd-title">
            MV AGUSTA
            <br></br>
             WARRANTY
            </div>

        </div>
       
    );
}
