import React from 'react';
import {Link} from "react-router-dom";
import user from '../images/user.png';
const ContactDetail = (props ) => {
    console.log(props);
    const{name,email}=props.location.state.contact;
    
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    {/* <div className="header">Ena</div> */}
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                    {/* <div className="description">enu300401@gmail.com</div> */}
                </div>
            </div>
            <div className='center-div'>
                <Link to="/">
                    <button className="ui button blue center" style={{marginLeft:"43.5%"}}>Back to Contact List</button>
                </Link>
                
            </div>
        </div>
        
    );

};

export default ContactDetail;