import React from 'react';
import '../scss/search.scss';
import api from '../api/api';

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: ''
        }

        this.submitHandler = this.submitHandler.bind(this)
    }

    filter(todos, id){
        return todos.filter(todo => todo.id === id);
    }

    async submitHandler(e){
        await e.preventDefault()
        await api.get('/todos/')
              .then(res => {
                let filteredTodos = this.filter(res.data, this.state.value);
                this.props.compare(filteredTodos);
              })
            
        this.setState({ value: '' })
    }

    render(){
        return(
            <form className="search-form" onSubmit={this.submitHandler}>
                <label>
                    <input 
                    type="text" 
                    placeholder="Search only ID" 
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value})}
                    />
                </label>
                <button
                type="submit"
                >
                    Search
                </button>
            </form>
        )
    }
}

export default Search;