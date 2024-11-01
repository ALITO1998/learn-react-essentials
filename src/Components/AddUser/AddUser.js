import React from 'react';
import Form from "../Layout/Form";
import Button from "../Layout/Button";



const AddUser = ({ addUserHandler, closeModel }) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 5);
        addUserHandler({ id, ...input });
        setInput({ name: '', age: '', address: '', phone: '', type: '' });
        closeModel();
    }

    const [input, setInput] = React.useState({
        name: '',
        Age: '',
        Address: '',
        Phone: '',
        type: '',
    });

    const inputHandler = (e) => {
        const key = e.target.id;
        const Value = e.target.value;
        setInput({ ...input, [key]: Value });
    }

    return (<Form onSubmit={submitHandler}>
        <Form.Controller>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={input.name || ""} onChange={inputHandler} placeholder='Enter name' />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="age">Age</label>
            <input type="text" id="Age" value={input.Age || ""} onChange={inputHandler} placeholder='Enter Age' />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="address">Address</label>
            <input type="text" id="Address" value={input.Address || ""} onChange={inputHandler} placeholder='Enter address' />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="Phone" value={input.Phone || ""} onChange={inputHandler} placeholder='Enter Phone' />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="type">Type</label>
            <input type="text" id="type" value={input.type || ""} onChange={inputHandler} placeholder='Enter Type' />
        </Form.Controller>
        <div style={{ marginTop: '10px' }}>
            <Button style={{ marginRight: '10px' }} type="submit"> Save </Button>
            <Button type="reset"> Reset </Button>
        </div>
    </Form>);
}

export default AddUser
