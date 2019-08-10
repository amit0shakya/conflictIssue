import React,{Component} from 'react';
import css from './thumb.css'

class thumb extends Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div className={css.imgcontainer}>
            something here
               {/* <img src="https://only4laughassets.s3.us-east-2.amazonaws.com/funcards/jokes/world_record/Thumb-En.jpg" /> */}
            </div>
        )
    }
}

export default thumb;