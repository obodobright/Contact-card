    import React from 'react';

    class NewTodo extends React.Component{
        constructor(){
            super()
            this.state = {
                isClicked : true
            }
        }
        btnClicked(){
            return `
            <div>
                <input type="text"
                        placeholder ="New Todo"
                        value ={this.props.input}
                        onChange = {this.props.updateTodo}
                    />
                    <button onClick={this.props.newTodo}>Submit</button>
                </div>
                `
        }
        render(){
            return(
                <React.Fragment>
                
                <div>
                <input type="text"
                        placeholder ="New Todo"
                        value ={this.props.input}
                        onChange = {this.props.updateTodo}
                    />
                    <br />
                    <button onClick={this.props.newTodo} className="addBtn">Submit</button>
                </div>
                </React.Fragment>
            )
        }

    }
    export default NewTodo