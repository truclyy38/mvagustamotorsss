import React, { Component } from 'react'
import classNames from 'classnames'

const listImg =[
    "./img/bespoke/slide1.jpg",
    "./img/bespoke/slide2.jpg",
    "./img/bespoke/slide3.jpg",
    "./img/bespoke/slide4.jpg",
    "./img/bespoke/slide5.jpg",
]

export default class SlideImage extends Component{
    constructor(){
        super()
        this.state = {
            active : 0
        }
    }

    getIndex(index){
        this.setState({
            active: index
        })
        console.log(this.state)
    }

    render(){
        return(
            <>
            <div className="blockQUOTE_wrap"> 
                <p className="blockQUOTE_text">
                Monaco Design Studio is an official department of MV Agusta specialising in the creation of unique models to meet a passionate clientele's demand for the most exclusive, luxury customisation.
                </p>
            </div>
            <div className="area-slideImg">
                <div className="slideImg">
                    {listImg.map((img, index) => <img className={classNames('img-slide', { active_image: index == this.state.active })} src={img} ></img>)}
                </div>
                <div className="slideIndex">
                    {listImg.map((img, index) => <img className={classNames('img-index', { active_image : this.state.active == index} )} src={img} onClick={() => this.getIndex(index) } ></img>)}
                </div>
            </div>      
            </>
        )
    }
}