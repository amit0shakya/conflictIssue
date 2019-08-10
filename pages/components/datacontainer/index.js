import React,{Component} from 'react';
import css from './datacontainer.css';
import Custombutton from '../colorfulbutton';

let buttonstyle

export default class datacontainer extends Component{
    
    constructor(){

        super()
        this.buttonstyle={color:"dark-blue",lebel:"CLICK TO WATCH!"}
    }


    render(){

        return(
            <div className={css.datacontainer}>
                <h3>BABAJI KI SALAH</h3>
                <p>Catagoery - Jokes</p>
                <div className={css.people}>1 Person funcard</div>
                <div className={css.story}>
                EFFORT: It takes the same amount of effort to make high ticket sales than it does to
                 make low ones. At times, it takes even lesser efforts to convert a high ticket 
                 client as they are willing to do what it takes to succeed and they understand the 
                 importance of investing in their business. What is that ONE thing that got me from 
                 struggling to make a few dollars a month as a freelancer to my first breakthrough online?
                </div>
               
               <Custombutton button={this.buttonstyle}/>
            </div>
        )
    }
}