import React, { Fragment, useState } from 'react'
import styles from "./App.module.css";
import CardList from '../Components/CardList/CardList';
import Filter from '../Components/Filter/Filter';
import Modal from '../Components/Modal/Modal';
import Button from '../Components/Layout/Button';
import AddUser from '../Components/AddUser/AddUser';

//import Modal from '../Components/Modal/Modal';


const App = () => {
    const [filter, setFilter] = useState("");
    const [toggle, setToggle] = useState(true);
    const [show, setShow] = useState(false);
    const [state, setState] = useState([{
        id: 1200,
        name: "Ali",
        Age: 26,
        Address: "Masaken Kafer El- gabal",
        Phone: "01120557102",
        type: "boy"
    }, {
        id: 1111,
        name: "Salsabeel",
        Age: 23,
        Address: "Masaken Kafer El- gabal",
        Phone: "01134365489",
        type: "girl"
    }, {
        id: 1004,
        name: "Abdelrahman",
        Age: 28,
        Address: "Masaken Kafer El- gabal",
        Phone: "01143321779",
        type: "boy"
    }, {
        id: 1025,
        name: "Hagar",
        Age: 24,
        Address: "Masaken Kafer El- gabal",
        Phone: "01xxxxxxxxx",
        type: "girl"
    }, {
        id: 1002,
        name: "Alaa",
        Age: 65,
        Address: "Masaken Kafer El- gabal",
        Phone: "01100840327",
        type: "boy"
    }, {
        id: 3000,
        name: "Safia",
        Age: 58,
        Address: "Masaken Kafer El- gabal",
        Phone: "01124719073",
        type: "girl"
    }, {
        id: 1006,
        name: "Ebrahim",
        Age: 35,
        Address: "Awel Fisal",
        Phone: "01xxxxxxxxx",
        type: "boy"
    }, {
        id: 1007,
        name: "Fatema",
        Age: 31,
        Address: "Awel Fisal",
        Phone: "01156xxx244",
        type: "girl"
    }, {
        id: 1008,
        name: "Ahmed",
        Age: 34,
        Address: "Msaken Kafr Tohormos",
        Phone: "01xxxxxxxxx",
        type: "boy"
    }, {
        id: 1009,
        name: "sara",
        Age: 26,
        Address: "Msaken Kafr Tohormos",
        Phone: "01xxxxxxxxx",
        type: "girl"
    }, {
        id: 1001,
        name: "Rizk",
        Age: 64,
        Address: "Safet ellaban",
        Phone: "012xxxxxxxx",
        type: "boy"
    }, {
        id: 1000,
        name: "Hanem",
        Age: 56,
        Address: "Safet ellaban",
        Phone: "011xxxxxxxx",
        type: "girl"
    }]);

    const addUserHandler = (newUser) => {
        const newArr = [...state, newUser];
        setState(newArr);
    }

    const deleteHandler = (selectedId) => {
        const newState = state.filter((ele) => ele.id !== selectedId);
        setState(newState);
    }

    const toggleHandler = () => {
        setToggle(!toggle);
    }

    const filtration = (name) => {
        setFilter(name);
    }

    const nameHandler = () => {
        if (filter.length > 0) {
            return state.filter((ele) => ele.name.toLowerCase().includes(filter.toLowerCase()))
        }
        return state;
    }

    return (
        <Fragment>
            <div className={styles.mainContainer}>

                <h1>Families</h1>
                <div style={{ display: 'flex', marginBottom: "10px" }}>
                    <Button style={{ marginRight: '20px' }} onClick={toggleHandler} className={styles.button}> {!toggle ? "Show Cards" : "Hide Cards"}</Button>
                    <Button onClick={() => setShow(true)} className={styles.button}> Show Modal</Button>
                </div>
                <Filter filtration={filtration} />
                <div className={toggle ? styles.show : styles.hide}>
                    <CardList dataList={nameHandler()} deleteHandler={deleteHandler} />
                </div>
            </div>
            <Modal show={show} closeModel={() => setShow(false)}>
                <AddUser addUserHandler={addUserHandler} closeModel={() => setShow(false)} />
            </Modal>
        </Fragment >
    )
}

export default App
