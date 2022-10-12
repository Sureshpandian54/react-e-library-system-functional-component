import './AddBook.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function AddBook() {

    const navigation = useNavigate();

    const [getForm, setForm] = useState({
        name: '',
        description: '',
        author: '',
        numberofbooksavailable: '' 
    });

    const onChangeHandler = (event) => {
        setForm({ ...getForm, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(getForm);
        axios.post('http://localhost:3000/listBook/', getForm).then(() => {
            navigation('/searchbook');
        }).catch(() => {
            navigation('/');
        })
    }

    return (
        <div>
            <div className="modal-body">
                <div className="form-model col d-flex justify-content-center">
                    <form>
                        <div className="form-group" >
                            <h4>Add Book</h4>
                        </div>
                        <div className="form-group">
                            <label id="label1">Book ID</label>
                            <input type="text" onChange={onChangeHandler} name="id" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label id="label1">Book Name</label>
                            <input type="text" onChange={onChangeHandler} name="name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label id="label1">Description</label>
                            <input type="text" onChange={onChangeHandler} name="description" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label id="label1">Author</label>
                            <input type="text" onChange={onChangeHandler} name="author" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label id="label1">Number of Books Available</label>
                            <input type="text" onChange={onChangeHandler} name="numberofbooksavailable" className="form-control" />
                        </div>
                    </form>
                </div>
                <div className="form-group col d-flex justify-content-center">
                    <button type="submit" onClick={onSubmitHandler} className="btn" id="btn">Add Book</button>
                </div>
            </div>
        </div>
    )
}

export default AddBook;