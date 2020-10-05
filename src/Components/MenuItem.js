/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';

const MenuItem = (props) => {
    
    const [active, setActive] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        props.switchCategory(props.text);
    }

    return(
        <li className={active}
        onClick={handleClick}
        onMouseEnter={() => setActive('is-active')}
        onMouseLeave={() => setActive('')}>
        <a>{props.text}</a></li>
    )
}

export default MenuItem;