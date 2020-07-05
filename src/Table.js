import React from 'react';

const renderTableHeader = props => { 
    let header;
    let data = props.header;
    if (data) {
        header = Object.keys(data)
    }
    else {
        return null;
    }
    return header.map((key, index) => {
        if (index > 0) {
            return <th key={index}>{key.toUpperCase()}</th>
        }
    })
}

export default renderTableHeader