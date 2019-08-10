import React ,{Component} from 'react';
import css from './nav.css';
import gcss from './../../global.css';
import fbicon from '../../../static/images/fbicon.png';
import searchicon from '../../../static/images/searchicon.png';
import Dropdown from './dropdown';

class Nav extends Component{
    render(){
        return(
            <div className={`${css.header} ${gcss.row}`} >
                <div className={`${gcss.container} ${css.headercontainer}`}>
                    <div className={css.logo}>
                        Only4laugh logo
                    </div>

                    <div className={css.nav}>
                        <ul>
                            <li>MUSICAL</li>
                            <li>JOKES</li>
                            <li>CELEBRATION</li>
                            <li><div>CRAZY</div></li>
                            <li><Dropdown /></li>
                            <li>
                                <img src={searchicon} className={css.searchicon} alt="Search funcard"/>
                            </li>
                            <li><img src={fbicon} alt="Join FB page"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;