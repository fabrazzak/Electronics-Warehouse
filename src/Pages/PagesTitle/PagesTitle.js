import React from 'react';
import { Helmet } from 'react-helmet-async';

const PagesTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title}-Electronics-Warehouse</title>
        </Helmet>
    );
};

export default PagesTitle;