import React, { Component } from 'react';

class ToDoInput extends Component {
    render() {

        const { item, handleChange, handleSubmit, editItem } = this.props

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text text-white bg-primary">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="add a todo item"
                            value = {item}
                            onChange = {handleChange}
                        ></input>
                    </div>
                    <button type="submit" className={
                        editItem 
                        ? "btn btn-block btn-success mt-3" 
                        : "btn btn-block btn-primary mt-3"    
                        }>
                            {editItem ? "Edit Item" : "Add Item"}
                    </button>
                </form> 
            </div>
        )
    }
}

export default  ToDoInput;
