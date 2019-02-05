import React from 'react';

const Index = ({ method: { title, summary } }) => (
    <>
        <h1>{title}</h1>
        <p>{summary}</p>
    </>
);

export default Index;
