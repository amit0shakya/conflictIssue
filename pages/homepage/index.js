import React, {Component} from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import css from './home.css';
import gcss from './../global.css';
import Dataview from './dataview/dataview';
import Banner from '../components/banner';

class Homepage extends Component{

    constructor(){
        super()
    }

    render(){

        return(
            <div className={gcss.wrapper}>
                <Nav />
                <div className={gcss.bodywrapper}>
                    <Banner />

                    <div className={gcss.row}>
                        <div className={gcss.contentarea}>
                            <Dataview />
                        </div>
                    </div>
                    
                    <Footer />
                </div>
            </div>
        )
    }

}

export default Homepage;