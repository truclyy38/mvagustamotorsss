import React, {Component} from 'react'

const listPer= [
    {
        name: "VIRGINIO FERRARI",
        discript: "Three-time Italian champion and World champion,  Virginio Ferrari, founder and owner of the Studio, has a long history of friendship and collaboration with MV Agusta. In 1994 he established Virginio Ferrari Racing, which in 1998 became the official MV Agusta importer in the Principality, now also in the nearby Alpes Maritimes Department",
        img: "./img/bespoke/vferrari.png"
    },
    {
        name: "KAZUHITO SHIMIZU",
        discript: "His technical organisation is represented by Kazuhito Shimizu (ITO) experienced mechanic engineer in the Superbike World Championship. ITO was responsible for the training of mechanics for MV Agusta French dealers in 2006 and 2007.",
        img: "./img/bespoke/kshimizu.png"
    },
    {
        name: "ALEXANDRE DAULY",
        discript: "The design and commercial departments of the MONACO DESIGN STUDIO are held by Alexandre Dauly, a specialist of MV Agusta brand who was also founder in 2005 of Alkadesign, label dedicated to high level customizations on MV Agusta base which is now absorbed in the new official activity.",
        img: "./img/bespoke/adauly.png"
    },
]

export default class TheTeam extends Component{
    render(){
        return(
            <>
              <blockquote class="blockQUOTE_wrap">
                <p class="blockQUOTE_text">
                    Every biker has the desire to customise their motorcycle to bring it as close as possible to their ultimate bike. The proof of this is the more than one hundred unique pieces made, under the guidance of our designer Alexandre Dauly, for customers of all types.
                </p>
                <footer class="blockQuote_footer">
                    <cite class="blockQuote_caption">- Virginio Ferrari, founder and owner of Monaco Design Studio
                </cite>
                </footer>
            </blockquote>
              <div className="team_wrap">
                <h3 className="team_title">THE TEAM</h3>
                <div className="team_list">
                    {listPer.map((per) => <> 
                    <div className="team_item">
                        <div className="team_avatar">
                            <img className="team_avatar-img" src={per.img} >
                            </img>
                        </div>
                        <div className="team_info">
                            <div className="team_name">
                                {per.name}
                            </div>
                            <div className="team_descr">
                                {per.discript}
                            </div>
                        </div>
                    </div>
                    </>)}
                </div>
            </div>
            </>
        )
    }
}