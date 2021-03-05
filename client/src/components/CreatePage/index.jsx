import React from 'react';
import axios from 'axios';

 class CreatePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          title: "",
          date: "",
          body: "",
      };
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let {title, date, body} = this.state
        axios.post('/post', {
            title: title,
            date: date,
            body: body
        })
        .then(() => {
            this.props.getPosts()
            this.props.togglePage("home")
        })
        .catch(err => console.error(err))
    }

    render() {
      return (
        <div>
        <div className="heading">
        <span id="heading_title" onClick={() => this.props.togglePage("home")}>Journal-lite</span>
        
        <div className="nav_container">
            <div className="heading_nav"  onClick={() => this.props.togglePage("home")}>All entries</div>
            <div className="heading_nav" onClick={() => this.props.togglePage("create")}>Write a new Entry</div>
        
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>


        </div>

        <div className="createContainer">
            <h2>New Entry</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input onChange={this.handleChange} name="title"></input>
                <label>Date</label>
                <input onChange={this.handleChange} name="date"></input>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <textarea id="textArea" onChange={this.handleChange} name="body"></textarea>
                <br></br>
                <br></br>
                <button type="submit">Add Entry</button>
            </form>
        </div>

        </div>
      )
    }
  }


  export default CreatePage;