import classNames from 'classnames';
import React, { Component } from 'react'

const galleries=[
    {
        title: "STARTING YOUR PROJECT",
        para1: "THE BEGINNING",
        para2: "The process begins with customers contacting their local dealer and discovering everything about this new, high-end service from the factory.They can also contact the Monaco Design Studio directly.",
        image: "./img/bespoke/start.png"
    },
    {
        title: "DEFINITION AND DISCUSSION",
        para1: "DEFINING DESIRES",
        para2: "When contact is made to start a project, MDS and the client discuss possible options. Several renderings of the project are then established. When the project is defined between MDS and the customer, the project is subject to the last validations at the factory with the internal Design department, the CRC and the approval department.",
        image: "./img/bespoke/definition.png"
    },
    {
        title: "BUILDING YOUR BIKE",
        para1: "BUILDING YOUR BIKE",
        para2: "The concrete development of the project can thus begin. Depending on the details of a project and the MV Agusta models used, the construction time of the motorcycle can vary between 3 and 6 months. Once completed, the motorcycle is tested for final approval, establishment of the 'one off 1/1' certificate of authenticity and prepared for dispatch to its final destination.",
        image: "./img/bespoke/construction.png"
    }
]

var timeRecore
export default class GalleryStep extends Component{
    constructor(){
        super();
        this.state = {
            active :0
        }
        timeRecore= setInterval(() =>
        this.setState( () => ({
            active: this.getNext(this.state.active)
        })),15000)
    }

    setRecoder(){
        timeRecore= setInterval(() =>
        this.setState( () => ({
            active: this.getNext(this.state.active)
        })),15000)
    }
    getNext(index){
        console.log(index)
        index++;
        if(index >= galleries.length) index=0;
        return index;
    }

    changeIndex(index){
        for(var i=0; i>galleries.length; i++){
            document.getElementsByClassName('galleryStep-content')[i].classList.remove("active_content");
            document.getElementsByClassName('galleryStep-name')[i].classList.remove("active_name");
        }
        document.getElementsByClassName('galleryStep-content')[index].classList.add("active_content");
        document.getElementsByClassName('galleryStep-name')[index].classList.add("active_name");
        clearInterval(timeRecore)
        this.setState({
            active: index
        })
        this.setRecoder()
    }

    render(){
        return(
            <>
            <div className="area-galleryStep">
                <div className="area-galleryStep-content">
                  {galleries.map((gallery, index) =>
                     <>
                       <div className={classNames('galleryStep-content',{ active_content: this.state.active == index })}>
                          <div className="galleryStep-content-con">
                            <div className="galleryStep-content-conPar1">{gallery.para1}</div>
                            <div className="galleryStep-content-conPar2">{gallery.para2}</div>
                          </div>
                          <div className="galleryStep-content-img">
                            <img className="galleryStep-content-img" src={gallery.image}></img>
                          </div>
                       </div>
                    </>
                  )}
                </div>
                <div className="area-galleryStep-name" >
                   {galleries.map((gallery,index) =>
                     <>
                    <div onClick={() => this.changeIndex(index)} className={classNames('galleryStep-name',{ active_name: this.state.active == index })}>
                        <div className="galleryStep-name-index">
                            <div className="galleryStep-name-change"></div>
                        </div>
                        <div className="gallery-name">0{index+1}.<br/>{gallery.title}</div>
                    </div>
                    </>
                    )}
                </div>
            </div>
            </>
        )
    }
}
