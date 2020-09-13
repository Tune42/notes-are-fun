/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class MenuItem extends React.Component {
    constructor() {
        super();
        this.state={
            activeState : ''
        }
    }

    setActive = () => {
        this.setState({
            activeState : 'is-active'
        })
    }

    setInactive = () => {
        this.setState({
            activeState : ''
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.switchCategory(this.props.text);
    }

    render() {
        return(
            <li className={this.state.activeState}
            onClick={this.handleClick}
            onMouseEnter={this.setActive}
            onMouseLeave={this.setInactive}>
            <a>{this.props.text}</a></li>
        )
    }
}

class InputField extends React.Component {
    constructor(){
        super()
        this.state={
            value : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            value : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCategory(this.state.value);
        this.setState({
            value : ''
        })
    }

    render() {
        return(
            <div className='my-menu-input-field'>
                <form onSubmit={this.handleSubmit}>
                    <label className='has-text-white'>Add a Category:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.value}
                    className="input is-primary" />
                </form>
            </div>
        )
    }
}

class Menu extends React.Component {
    constructor(props){
        super();
    }

    renderCategories = () => {
        const categories = []
        this.props.categories.forEach(category => {
            categories.push(<MenuItem key={Math.random()} text={category} switchCategory={this.props.switchCategory} />)
        })
        return categories
    }

    render() {
        return(
            <div className='my-menu'>
                <aside>
                    <p className="menu-label">Categories</p>
                    <ul className="menu-list">
                        {this.renderCategories()}
                    </ul>
                </aside>
                <InputField addCategory={this.props.addCategory} />
            </div>
        )
    }
}

export default Menu;