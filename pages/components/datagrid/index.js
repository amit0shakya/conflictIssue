import React,{Component} from 'react';
import Thumbnail from '../thumb';
import css from './style.css';
//import Datacontainer from '../datacontainer'; <<<--- if I import this component then banner css dosen't work


class datagrid extends Component{

    constructor(){

        super()
    }

    render(){
        return(
            <div className={css.databox}>
                
                <Thumbnail />
                {/*<Datacontainer />

                */}
            </div>
        )
    }
}


export default datagrid;