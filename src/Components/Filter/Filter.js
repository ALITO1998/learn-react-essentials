import React, { useState } from 'react';
import styles from "./Filter.module.css";


const Filter = ({ filtration }) => {
    const [filter, setFilter] = useState("");

    const filterHandler = (e) => {
        const filterStr = e.target.value
        setFilter(filterStr);
        filtration(filterStr);
    }
    return (
        <div className={styles.mb}>
            <input type={"text"} placeholder={"filterByName"} value={filter} onChange={filterHandler} />
        </div>
    )
}

export default Filter;