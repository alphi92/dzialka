import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';




class home extends Component{


    render(){
        return(
            <div className="container">
                <div className="row">
                    
                    
                    <div className="col-lg-8"><p>Przestrzenna działka w kształcie prostokąta, położona w miejscowości Żabia Wola (gmina Głusk) o rozmiarach 101x21 (21a)
                    w malowniczej okolicy, posród lasów i rzek. Do gruntu prowadzi droga asfaltowa z oświetleniem miejskim. Działka jest w pełni uzbrojona. 
                    W najbliższej lokalizacji mamy:
                    <ul>
                        <li>Sklepy - <span className="far">800m</span> </li>
                        <li>Przystanek linii 17 - <span className="far">1km</span></li>
                        <li>Przystanek linii 16 - <span className="far">800m</span></li>
                        <li>Ośrodek gminny - <span className="far">700m</span> : 
                            <ul> 
                                <li>przedszkole</li>
                                <li>żłobek</li> 
                                <li>przychodnia</li> 
                                <li>dentysta</li>
                                <li>lokale gastronomiczne</li>
                                <li>sklep Stokrotka oraz Groszek</li>
                            </ul>
                        </li>
                        <li>Szkoła podstawowa - <span className="far">1km</span></li>
                        <li>Plac zabaw, workout na świeżym powietrzu, miejsce na grilla, boisko do siatkówki - <span className="far">50m</span></li>

                    </ul>
                    </p>
                    
                    <div className="price">Cena: 250 000 zł</div>
                    </div>
                    

                </div>
            </div>
        );
    }
}

export default home;