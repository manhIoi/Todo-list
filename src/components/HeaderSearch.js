import React from 'react'
import dropDown from '../img/options.svg'
import './HeaderSearch.css'

class HeaderSearch extends React.Component {
    render() {
        const url = dropDown
        return(
            <div class="header-search">
                <img className="header-search__logo" src={url} />
                <input 
                    type="text" className="header-search__input" 
                    placeholder="Add a new todo"
                    onKeyUp = {this.props.onKeyUp}
                />
            </div>
        )
    }
}

export default HeaderSearch