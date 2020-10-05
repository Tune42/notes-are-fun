import React from 'react';
import MenuItem from './MenuItem';
import InputField from './InputField';

function Menu(props) {
    const renderCategories = () => {
        const categories = []
        props.categories.forEach(category => {
            categories.push(<MenuItem key={Math.random()} text={category} switchCategory={props.switchCategory} />)
        })
        return categories
    }

    return(
        <div className='my-menu'>
            <aside>
                <p className="menu-label my-menu-label">Categories</p>
                <ul className="menu-list">
                    {renderCategories()}
                </ul>
            </aside>
            <InputField addCategory={props.addCategory} />
        </div>
    )
}

export default Menu;