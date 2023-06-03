import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)
    
        this.state = {
            
        }
       }

    render() {
        return (
            <div>
               <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div> <a href="http://localhost:3000" className='navbar-brand'>EMOS</a>
                    <a href="http://localhost:3000" className='navbar-brand'>DASHBOARD</a>
                    <a href="http://localhost:3000/department" className='navbar-brand'>DEPARTMENT</a>
                    <a href="http://localhost:3000/jobs" className='navbar-brand'>JOBS</a>
                    <a href="http://localhost:3000/employees" className='navbar-brand'>EMPLOYEES</a>
                    <a href="http://localhost:3600" id='sign-out'>SIGN OUT</a>
                    </div>
                </nav>
                </header> 
            </div>
        );
    }
}

export default HeaderComponent;