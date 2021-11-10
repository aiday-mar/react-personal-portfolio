import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        'Android Development',
        'Angular',
        'ASP .NET',
        'Django',
        'Hadoop',
        'Java',
        'R',
        'React',
        'Ruby',
        'Spark',
        'Kubernetes',
      ],
    };

    // the functions below are added to the constructor
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addItem(e) {
    // Prevent button click from submitting form
    e.preventDefault();

    // Create variables for our list, the item to add, and our form
    let list = this.state.list;
    // the document where the script is used and inserted
    const newItem = document.getElementById('addInput');
    const form = document.getElementById('addItemForm');

    // If our input has a value
    if (newItem.value != '') {
      // Add the new item to the end of our list array
      list.push(newItem.value);
      // Then we use that to set the state for list
      this.setState({
        list: list,
      });
      // Finally, we need to reset the form
      newItem.classList.remove('is-danger');
      form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required, meaning that you add a class to the list of classes which are
      // obtained from the item
      newItem.classList.add('is-danger');
    }
  }

  removeItem(item) {
    // Put our list into an array
    const list = this.state.list.slice();
    // Check to see if item passed in matches item in array
    list.some((el, i) => {
      if (el === item) {
        // If item matches, remove it from array
        list.splice(i, 1);
        return true;
      }
    });
    // Set state to list
    this.setState({
      list: list,
    });
  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== '') {
      // Assign the original list to currentList
      currentList = this.props.items;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter((item) => {
        // change current item to lowercase
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList,
    });
  }

  // below in the ul we have each element in the list designated by item, then we take this item and we assign the item name to the key of the li and the content of the li also given by the value of this item.
  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <List
              items={this.state.list}
              delete={this.removeItem}
              onchange={this.handleChange}
            />
          </section>
          <hr />
        </div>
      </div>
    );
  }
}

// we have several components in one file, and the second one we write it so that it is extending the React library. We also have a render function.
export class List extends React.Component {
  // constructor needed in order to pass props
  // We need to pass data into our filtered state every time the List component gets re-rendered.
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
    };
    this.handleChange = this.handleChange.bind(this);
    //this.arraysEqual = this.arraysEqual.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.items,
    });
  }
  /*
  arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
*/

  componentDidUpdate(nextProps) {
    this.state.filtered = nextProps.items;
  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== '') {
      // Assign the original list to currentList
      currentList = this.props.items;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter((item) => {
        // change current item to lowercase
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList,
    });
  }

  // here in the render method below
  // We don't have a method called removeItem within this component, so clicking the button doesn't call anything. Fortunately, we had the foresight to pass that method into this component as a prop. To regain the delete functionality, we can just alter the code for that button to the following:

  //onChange={()=>this.props.onchange()}

  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <ul>
          {this.state.filtered.map((item) => (
            <li key={item}>
              {item} &nbsp;
              <span
                className="delete"
                onClick={(item) => this.props.delete(item)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
