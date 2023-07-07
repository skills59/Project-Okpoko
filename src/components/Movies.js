// this component for home page
import React, { Component } from 'react';
class Movies extends Component{
    render(){
        return(
            <div className="container">
            <br></br><br></br><br></br>
            
                    <section style={{ margin: "20px"}}>
                        <div className="d-flex flex-row multiple-item-slider">
                            <div className="justify-content-center spacer-slider">
                                <figure className="figure"><img className="img-fluid figure-img" src="https://picsum.photos/1080/1335?image=0" alt="alt text here"/>
                                    <figcaption className="figure-caption">Caption</figcaption>
                                </figure>
                            </div>
                            <div className="justify-content-center spacer-slider">
                                <figure className="figure"><img className="img-fluid figure-img mx-auto d-block" src="https://picsum.photos/1080/1335?image=1083" alt="alt text here"/>
                                    <figcaption className="figure-caption">Caption</figcaption>
                                </figure>
                            </div>
                            <div className="justify-content-center spacer-slider">
                                <figure className="figure"><img className="img-fluid figure-img" src="https://picsum.photos/1080/1335?image=1076" alt="alt text here"/>
                                    <figcaption className="figure-caption">Caption</figcaption>
                                </figure>
                            </div>
                            <div className="justify-content-center spacer-slider">
                                <figure className="figure"><img className="img-fluid figure-img" src="https://picsum.photos/1080/1335?image=1075" alt="alt text here"/>
                                    <figcaption className="figure-caption">Caption</figcaption>
                                </figure>
                            </div>
                            <div className="justify-content-center spacer-slider">
                                <figure className="figure"><img className="img-fluid figure-img" src="https://picsum.photos/1080/1335?image=1074" alt="alt text here"/>
                                    <figcaption className="figure-caption">Caption</figcaption>
                                </figure>
                            </div>
                            <div className="justify-content-center spacer-slider">
                                <figure className="figure"><img className="img-fluid figure-img" src="https://picsum.photos/1080/1335?image=1071" alt="alt text here"/>
                                    <figcaption className="figure-caption">Caption</figcaption>
                                </figure>
                            </div>
                            <div className="justify-content-center spacer-slider">
                                <figure className="figure"><img className="img-fluid figure-img" src="https://picsum.photos/1080/1335?image=1060" alt="alt text here"/>
                                    <figcaption className="figure-caption">Caption</figcaption>
                                </figure>
                            </div>
                            <div className="justify-content-center spacer-slider">
                                <figure className="figure"><img className="img-fluid figure-img d-flex" src="https://picsum.photos/1080/1335?image=1045" alt="alt text here"/>
                                    <figcaption className="figure-caption">Caption</figcaption>
                                </figure>
                            </div>



                        </div>
                    </section>

                </div>
        );
    }
}
export default Movies;