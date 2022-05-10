import React from 'react';

const TItle = ({ children, textAlign = 'text-center' }) => {
    return (
        <h3 className={`text-xl font-bold text-secondary mt-32 ${textAlign}`}>
            {children}
        </h3>
    );
};

export default TItle;