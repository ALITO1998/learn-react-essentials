import React from 'react'
import styles from "./CardList.module.css"


const Card = ({ deleteHandler, name, Age, Address, Phone, type, id }) => {
    return (<div className={styles.cardWrapper} key={id} style={{
        backgroundColor: type === "girl" ? "pink" :
            type === "boy" ? "lightblue" : ''
    }}>
        <h2>Name: {name}</h2>
        <h3>Age: {Age}</h3>
        <h3>Address: {Address}</h3>
        <h3>Phone: {Phone}</h3>
        <div className={styles.deleteBtn} onClick={() => deleteHandler(id)}>X</div>
    </div>)
}

export default Card;
