import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Log In with Google</a>
                    </li>
                );
            default:
                return (
                    [<li key='1'>
                        <Payments />
                    </li>,
                    <li key='2' style={{ margin: '0 10px' }}>
                        Créditos: { this.props.auth.credits }
                    </li>,
                    <li key='3'>
                        <a href="/api/log_out">Log Out</a>
                    </li>]
                );
        }   
    }

    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left-brand-logo"
                    >Emaily</Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }

};

function mapToStateProps({auth}){

    return  { auth };

}

export default connect(mapToStateProps)(Header);

