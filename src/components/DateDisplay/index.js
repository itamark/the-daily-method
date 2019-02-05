import React from 'react';
import months from '../../constants/months';

const DateDisplay = ({ date }) => (
    <>
        {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
    </>
);

export default DateDisplay;
