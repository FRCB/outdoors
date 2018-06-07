import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Title = styled.h1`
position: absolute;
top: 100px;
font-size: 90px;
text-align:center;
color:#29c72e;
font-family:'Delius', cursive;
padding-bottom: 25%;
`;

const Img = styled.img`

border-radius: 16px;
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);   
`;

class Welcome extends Component {
    constructor() {
        super();

        this.state = {
            login: ''
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin() {
        this.setState({ login: '' })
    }

    render() {
        return (
            <div>
                <body>
                    <div className="header">
                        <Title>Let's go Outdoors!</Title>
                    </div>
                    <section className="content">
                        <img src="http://savetreessaveearth.com/wp-content/uploads/2015/06/savetreesaveearth-img1.gif" alt="Tree" />
                    </section>
                    <div className="footer">
                        <a href={process.env.REACT_APP_LOGIN}> <button className="myButton" href="#"
                            onClick={this.handleLogin}>Enter</button></a>

                    </div>
                </body>
            </div>


        )
    }
}

export default Welcome;
