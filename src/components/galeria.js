import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img5 from "./img5.jpg"
import img6 from "./img6.jpg"

const images = [
    img1,
    img2,
    img3,
    img5,
    img6
];

class galeria extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }


    render(){
        const { photoIndex, isOpen } = this.state;
        return(
            
            
            
    <div>
        
        <div className="container" onClick={() => this.setState({ isOpen: true })}>
                <div className="row">
                    <div className="col-sm-6"><img src={img1} className="img-fluid" alt="img1"/></div>
                    <div className="col-sm-6"><img src={img2} className="img-fluid" alt="img2"/></div>
                    <div className="col-sm-4"><img src={img3} className="img-fluid" alt="img3"/></div>
                    <div className="col-sm-4"><img src={img5} className="img-fluid" alt="img5"/></div>
                    <div className="col-sm-4"><img src={img6} className="img-fluid" alt="img6"/></div>

            	</div>

        </div>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
    </div>
            
        );
    }
}

export default galeria;