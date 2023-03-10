import React from 'react';
import { Link } from 'react-router-dom'

const Layout = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <Link to={'/takeEvery'}>takeEvery</Link>
            <Link to={'/takeLatest'}>takeLatest</Link>
            <Link to={'/takeLeading'}>takeLeading</Link>
            <Link to={'/throttle'}>throttle</Link>
        </div>
    );
};

export default Layout;
