import React, { Component } from 'react';
import Slider from 'react-slick';
import { urlPath } from '../path';
import Convertisseurdevise from '../shared/Convertisseurdevise';
import { sliderarticlesgroup2 } from '../data/sliderarticlesgroup2';
import Link from 'react-router-dom/Link';

class Articlesgroup2 extends Component {
    constructor(props) {
    super(props)
        this.state= ({
            atg: 3
        })
    }
    componentWillMount(){
        if(window.innerWidth < 900){
            this.setState({
                atg: 2
            })
        }
    }
    render() {
        
        let settings = {
                infinite: true,
                speed: 5000,
                slidesToShow: this.state.atg,
                dots: true,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                dotsClass: 'asdots'
            };
        let dataActive = this.props.data
        let articlesgroup2 =  dataActive ? dataActive.filter(a => a.slider === "sl_horizontalArticles").map((item, i) => {
                let link2 = page.titre.split(" ").join("-").toLowerCase();
                return (
                    <div key={ i }>
                        <div className="verticalarticle">
                            <img src={`${urlPath}/storage/auteur/${ item.image }`} />
                            <div className="text" >
                                <div className="categorie"  style={{textTransform: "uppercase"}}><span> { item.categorie } </span></div>
                                {/* <h3 className="text-truncate"> { item.titre } </h3> */}
                                <div style={{height: "130px", overflowY: "auto"}}>
                                    <Link to={ `${urlPath}/categorie/${ item.categorie }/${link2}-${page.id}`} style={{color: "inherit"}} ><h4> { item.titre } </h4> </Link>
                                    <p > { item.resume } </p>
                                </div>
                                <div className="date">
                                    <i className="fas fa-clock"></i> 2018-05-27  <i className="fas fa-edit"></i> Auteur
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }): <div></div>

        return (
            <div className="articlesgroup2">
            <div className="row">
                <div className="col col-sm-12 col-md-9 left">
                    <Slider ref={v => this.slider = v } {...settings} className="sliderwrapper" >
                        { articlesgroup2 }
                    </Slider>
                </div>
                <div className="col col-sm-12 col-md-3 right">
                    <Convertisseurdevise />
                </div>
            </div>
          </div>
    );
    }
}

export default Articlesgroup2;
