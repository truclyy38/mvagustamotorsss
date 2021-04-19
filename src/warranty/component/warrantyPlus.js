import React from 'react';
import {warrantyData} from './warrantyData';

export function WarrantyBody(){
    return(
        <div className="wr-body-contain">
            {warrantyData.map((item,index) => {
            return(
                <div className="wr-content">
                <h2>{item.title}</h2>
                <p>{item.para}</p>
                </div>
            );
        })
        }
        </div>
    );
} 