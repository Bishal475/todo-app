import React, { Component } from 'react';

class Todos extends Component {
    constructor(){
        super();
        this.state = {
            arr : [
                {key : 1, name : 'MorningWork', desc : 'Take dog for a walk.',time : new Date()},
                {key : 2, name : 'Job', desc : 'Attend the meeting @ 8:00 AM.',time : new Date()},
                {key : 3, name : 'Market', desc : 'Buy groceries.',time : new Date()},
                {key : 4, name : 'Market', desc : 'Buy dog food and biscuits.',time : new Date()},
                {key : 5, name : 'Date', desc : 'Call Angelina and ask he for a drink.',time : new Date()}
            ]
        }
    }

    render() { 
        return ( 
            <div>
                <h1> TODO Application</h1>
                <div className="contianer">                
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.arr.map((todo) => {return (
                                <tr key = {todo.key}>
                                    <td>{todo.key}</td>
                                    <td>{todo.name}</td>
                                    <td>{todo.desc}</td>
                                    <td>{todo.time.toString()}</td>
                                </tr>
                            )})
                        }
                        </tbody>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default Todos;