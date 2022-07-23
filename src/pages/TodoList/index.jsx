import cx from 'classnames';
import { Component } from 'react';

export default class TodoList extends Component {

    state = {
        todos: [],
        task: "",
        taskCompleted: 0
    }

    addTodo = () => {
        if (this.state.task !== "") {
            let taskCompleted = 0;
            this.state.todos.forEach(todo => {
                if (todo.isDone) {
                    taskCompleted++;
                }
            })
            let totalTasks = this.state.todos.length + 1;
            let tasksLeft = totalTasks - taskCompleted;
            alert(`${tasksLeft} remaining out of ${totalTasks} tasks`)

            this.setState({
                todos: [...this.state.todos, {
                    task: this.state.task,
                    isDone: false
                }],
                taskCompleted: tasksLeft
            })

            this.setState({
                task: ""
            })
        }
        else {
            alert("Please enter a task")
        }
    }

    markComplete = (id) => {

        // this.setState({

        // })
        this.setState({
            todos: this.state.todos.map((todo, index) => {
                if (index === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    }
                }
                return todo;
            }),
        })

        // let taskCompleted = 0;
        // this.state.todos.forEach(todo => {
        //     if (todo.isDone) {
        //         taskCompleted++;
        //     }
        // })
        // let totalTasks = this.state.todos.length;
        // let tasksLeft = totalTasks - taskCompleted;
        // alert(`${tasksLeft} remaining out of ${totalTasks} tasks`)

        let taskCompleted = this.calculateTaskLeft();

        this.setState({
            taskCompleted: taskCompleted
        })
    }

    calculateTaskLeft = () => {
        let taskCompleted = 0;
        this.state.todos.forEach(todo => {
            if (todo.isDone) {
                taskCompleted++;
            }
        })
        let totalTasks = this.state.todos.length;
        let tasksLeft = totalTasks - taskCompleted;

        return tasksLeft;
        // alert(`${tasksLeft} remaining out of ${totalTasks} tasks`)
    }

    // calculateTaskCompleted = () => {

    // }

    render() {
        return (
            <>
                <div style={{ margin: "0 auto", textAlign: "center" }}>
                    <h2>
                        Todo List
                    </h2>

                    <div className='d-flex'>
                        <div>
                            <input
                                className='input'
                                placeholder='Add a task'
                                value={this.state.task}
                                onChange={(e) => this.setState({
                                    task: e.target.value
                                })}
                                type="text" />
                        </div>
                        <button className='btn-add' onClick={this.addTodo}>
                            Add
                        </button>
                    </div>
                    <h3 className='task-counter'>{this.state.taskCompleted} remaining out of {this.state.todos.length} tasks</h3>
                    <ul>
                        {this.state.todos.map((todo, index) => {
                            return (
                                <li className={`${(todo.isDone) ? ('is-done') : ''}`} onClick={() => this.markComplete(index)} key={index}>
                                    {todo.task}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <style>{`
                    .input {
                        width: 100%;
                        height: 40px;
                        font-size: 1.5rem;
                        border: 1px solid black;
                        margin: 0 auto;
                        border-radius: 5px;
                    }
                    .is-done {
                        text-decoration: line-through;
                    }
                    .d-flex{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                    }
                    .btn-add {
                        background-color: #4CAF50; /* Green */
                  border: none;
                  color: white;
                   padding: 10px 32px;
                   text-align: center;
                text-decoration: none;
               font-size: 16px;
                     margin: 0px 2px;
                   transition-duration: 0.4s;
                        cursor: pointer;
                    }
                `}</style>
            </>
        );
    }
}
