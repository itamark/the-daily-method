import React from 'react';

const Method = ({ method: { title, summary } }) => (
    <>
        <h1>{title}</h1>
        <p>{summary}</p>
    </>
);

export default Method;
