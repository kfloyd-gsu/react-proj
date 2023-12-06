import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List.jsx';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        

        // the state is just alist of key/value pair (like a hashmap)
        this.state = {
            search: ""
        };
    }

    //sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({ search: event.target.value.toLowerCase() });
    }

    filterItem = (item) => {
        //checks if the current search term is contained in this item
        return item.name.toLowerCase().search(this.state.search) !== -1;
    }

    render() {
        return (
            <div className="filter-list">
                <h1>Produce Search</h1>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Produce Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Fruit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Vegetable</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <input type="text" placeholder="search" onChange={this.onSearch} />
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        );
    }
}

export default FilteredList;