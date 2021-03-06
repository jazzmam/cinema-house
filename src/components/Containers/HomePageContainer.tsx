import React from 'react';
import Catalog from '../Catalog/Catalog';
import { AppBar } from '@material-ui/core';
import HeaderTopbar from '../Header/HeaderTopbar';
import HeaderMenu from '../Header/HeaderMenu';

const HomePage: React.FC = () => {
    return (
        <>
            <AppBar>
                <HeaderTopbar></HeaderTopbar>
            </AppBar>
            <HeaderMenu></HeaderMenu>
            <Catalog></Catalog>
        </>
    );
};

export default HomePage;
