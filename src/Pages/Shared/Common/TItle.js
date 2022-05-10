import React from 'react';

const TItle = ({ children }) => {
    return (
        <h3 className='text-xl font-bold text-secondary mt-32 text-center'>
            {children}
        </h3>
    );
};

export default TItle;