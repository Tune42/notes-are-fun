/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class MenuItem extends React.Component {
    constructor(props) {
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

    render() {
        return(
            <li className={this.state.activeState}
            onMouseEnter={this.setActive}
            onMouseLeave={this.setInactive}>
            <a>{this.props.text}</a></li>
        )
    }
}

class InputField extends React.Component {
    constructor(props){
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
        this.props.addMenuItem(this.state.value);
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
        this.state={
            menuItems : [],
        }
    }

    componentDidMount = () => {
        this.addMenuItem('General');
    }

    addMenuItem = (text) => {
        const currentMenuItems = this.state.menuItems;
        currentMenuItems.push(<MenuItem key={Math.random()} text={text} />)
        this.setState={
            menuItems : currentMenuItems,
        }
        this.forceUpdate();
    }

    render() {
        return(
            <div className='my-menu'>
                <aside>
                    <p className="menu-label">Categories</p>
                    <ul className="menu-list">
                        {this.state.menuItems}
                    </ul>
                </aside>
                <InputField addMenuItem={this.addMenuItem} />
            </div>
        )
    }
}

export default Menu;