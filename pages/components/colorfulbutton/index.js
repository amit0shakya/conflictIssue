import React,{Component} from 'react';
import css from './colorfulbutton.css';

export default class Button extends Component{

    constructor(props){

        super(props)

        this.colorclass = this.colorclass.bind(this);
    }

    colorclass(color){

        let customcss;

        switch(color){
            
            case 'dark-blue':   this.customcss='css.dark-blue' 
                                break;
            
            case 'sky-blue':    this.customcss='css.sky-blue'
                                break;
            
            case 'red':         this.customcss='css.red'
                                break;
            
            case 'yellow':      this.custom='css.yellow'
                                break;
        }

        return customcss;

    }

    render(){

        return(
            <div className={this.colorclass(this.props.button.color)}>{this.props.button.label}</div>
        )
    }
}