import React from 'react'
import Card from '../Card/Card';



const CardList = ({ dataList, deleteHandler }) => {
    const cards = dataList.map(({ id, ...otherProps }) => {
        console.log(otherProps);
        return <Card deleteHandler={deleteHandler} {...otherProps} key={id} id={id} />
    });

    return (<div>{cards}</div>)
}

export default CardList;
