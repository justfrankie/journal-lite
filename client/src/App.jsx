import { React, useState } from 'react';
import Post from 'components/Post.jsx';
import Create from 'components/Create.jsx';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: [],
        page: "home"
    };
    this.getPosts = this.getPosts.bind(this)
    this.togglePage = this.togglePage.bind(this)
    this.getOnePost = this.getOnePost.bind(this)
  }

  componentDidMount(){
    this.getPosts();
  }

  getPosts() {
      axios.get('/all')
      .then(results => {
          this.setState({
            posts: results.data
          })
      })
      .catch(err => console.error(err))
  }

  togglePage(page){
     // gets all posts when clicked on any other tab
    this.setState({
        page: page
    }, () => this.getPosts())
  }


  getOnePost(id){
    axios.get(`/get/${id}`)
    .then((data)=> {
        this.setState({
            posts: data.data  
        })
    })
    .catch(err => console.error(err))
  }

  render() {
      if (this.state.page === "create") {
        return (
           <Create togglePage={this.togglePage} getPosts={this.getPosts}/>
        )
      } else if (this.state.page === "home"){
            return (
                <div>
                <div className="heading">
                    <span id="heading_title" onClick={() => this.togglePage("home")}>Journal-lite</span>
        
                    <div className="nav_container">
                    <div className="heading_nav" onClick={() => this.togglePage("home")}>All entries</div>
                    <div className="heading_nav" onClick={() => this.togglePage("create")}>Write a new Entry</div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="entryContainer">
                    
                    <Post posts={this.state.posts} getPosts={this.getPosts} getOnePost={this.getOnePost}/>
                
                </div>
                </div>
        ); 
    }
  }
}