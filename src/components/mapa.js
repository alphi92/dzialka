import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';



class mapa extends Component{


    render(){
        return(
            <div className="container">
                <div className="row">
                    <div class="col-md-8">
                        <iframe src="https://www.google.com/maps/d/embed?mid=1PSnhKhScueu-JQZ_KhA_Kf9plTNKVIHf" title="dzialka"></iframe>
                    </div>
                        <a href="https://glusk.e-mapa.net/?object=sys.dzialka.060905_2.0017.176/1" className="location">GEOLOKALIZACJA</a>
                </div>
            </div>
        );
    }
}

export default mapa;