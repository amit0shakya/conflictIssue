import React ,{Component} from 'react';
import downArr from '../../../../static/images/arr-down-icon.png';
import css from './dropdown.css';

class Dropdown extends Component{

    constructor(){

        super()

        this.togglelist = this.togglelist.bind(this);

        this.state={
            showlist:false
        }

        
    }

    togglelist(){
        if(this.state.showlist){
            this.setState({showlist:false})
        }else{
            this.setState({showlist:true})
        }
        
    }

    render(){
        return(
            <div>
                <div className={css.labelBox} onClick={()=>{this.togglelist()}}>
                        <span className={css.label}>Hn HINDI</span>
                        <div className={css.Arrow}><img src={downArr} className={css.Arrowup} /></div>
                        <div className={(this.state.showlist) ? css.listmask : css.listhide}>
                            <ul>
                                <li>Ar Arabic</li>
                                <li>Hn Hindi</li>
                                <li>Bn Bengali</li>
                                <li>Ru Russian</li>
                                <li>Pu Punjabi</li>
                                <li>Jp Japnese</li>
                                <li>Kr Korean</li>
                                <li>En English</li>
                                <li>Gr German</li>
                                <li>It Italian</li>
                            </ul>
                        </div>
                </div>


            </div>
        )
    }
}

export default Dropdown;