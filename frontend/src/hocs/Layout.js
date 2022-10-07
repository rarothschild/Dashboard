import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/auth';
import { load_user } from '../actions/profile';

const Layout = ({children, checkAuthenticated, load_user}) => {
    
    useEffect(() => {
        checkAuthenticated();
        load_user();
    },[])

    console.log()

    return(
        <Fragment>
            <h1>Test1</h1>
            {children}
            <h1>Test3</h1>
        </Fragment>
    )
}

export default connect(null, { checkAuthenticated, load_user })(Layout);
