import React, {Component} from 'react';
import gcss from '../../global.css';
import css from './style.css';
import dataview from './../../../static/images/dataView-icon.png';
import thumbview from './../../../static/images/thumbView-icon.png';
import Datagrid from '../../components/datagrid';


class Dataview extends Component{

    constructor(){
        super()

        this.state={
            dataView:true
        }
    }

    render(){
        return(
            <div className={gcss.row}>
                <div className={css.pageheading}>
                    <h2>data view heading</h2>
                    <div className={css.controlbox} onClick={()=>{
                            (this.state.dataView) 
                            ? this.setState({dataView:false})
                            : this.setState({dataView:true})
                    }}>

                    {(this.state.dataView)
                     ? <span><img src={dataview} alt="Show stories" /></span>
                     : <span><img src={thumbview} alt="Show thumbs" /></span>
                     }
                    </div>
                </div>

                <div className={css.datawrapper}>
                
                        <Datagrid />
                        <Datagrid />
                        <Datagrid />
                        <Datagrid />
                        <Datagrid />
                        <Datagrid />
                        <Datagrid />
                        <Datagrid />
                        
                </div>
                
            </div>
        )
    }

}

export default Dataview