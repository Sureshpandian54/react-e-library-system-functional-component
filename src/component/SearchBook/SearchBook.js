import "./SearchBook.css";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';

function SearchBook() {

     // const usersInfo = useSelector((state) => state.loginDetails);
  // console.log(usersInfo);

    const [getDetails, setDetails] = useState([]);

    const [getId, setId] = useState(-1);

    const [getForm, setForm] = useState({
        name: '',
        description: '',
        author: '',
        numberofbooksavailable: ''
    }); 

    useEffect(() => {
        fetchList();
    }, [])

    const fetchList = () => {
        axios.get('http://localhost:3000/listBook').then((result) => {
            console.log(result.data);
            setDetails(result.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    const onDeleteHandler = (id) => {
        axios.delete('http://localhost:3000/listBook/' + id).then(() => {
            fetchList();
        }).catch(() => {

        })
    }


    const onEditSelectedHandler = (index, id) => {
        setId(id);
        setForm({
            name: getDetails[index].name,
            description: getDetails[index].description,
            author: getDetails[index].author,
            numberofbooksavailable: getDetails[index].numberofbooksavailable
        })
    }

    const onChangeHandler = (event) => {
        setForm({ ...getForm, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(getForm);
        axios.patch('http://localhost:3000/listBook/' + getId, getForm).then(() => {
            fetchList();
        }).catch(() => {

        })
    }

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Search Book</h2>
                <label>Book Name</label>
                <input type="text" name="text area" />
                <br />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                <button><Link to="/addBook">AddBook</Link></button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Book Description</th>
                        <th scope="col">Author</th>
                        <th scope="col">Number of books available</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getDetails.map((obj, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.description}</td>
                                    <td>{obj.author}</td>
                                    <td>{obj.numberofbooksavailable}</td>
                                    <td><i data-toggle="modal" onClick={() => onEditSelectedHandler(index, obj.id)} data-target="#exampleModal" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                                    <td><i onClick={() => onDeleteHandler(obj.id)} className="fa fa-trash" aria-hidden="true"></i></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-body">
                                <div className="form-model col d-flex justify-content-center">
                                    <form>
                                        <div className="form-group">
                                            <label id="label1">Book ID</label>
                                            <input type="text" value={getForm.id} onChange={onChangeHandler} name="id" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label id="label1">Book Name</label>
                                            <input type="text" value={getForm.name} onChange={onChangeHandler} name="name" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label id="label1">Description</label>
                                            <input type="text" value={getForm.description} onChange={onChangeHandler} name="description" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label id="label1">Author</label>
                                            <input type="text" value={getForm.author} onChange={onChangeHandler} name="author" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label id="label1">Number of Books Available</label>
                                            <input type="text" value={getForm.numberofbooksavailable} onChange={onChangeHandler} name="numberofbooksavailable" className="form-control" />
                                        </div>
                                    </form>
                                </div>
                                <div className="form-group col d-flex justify-content-center">
                                    <button type="submit" onClick={onSubmitHandler} className="btn" id="btn">Update</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchBook;


