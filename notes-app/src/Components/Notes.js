import React, {Component} from 'react';
import axios from 'axios';

import EachNote from './EachNote';

class Notes extends Component {
    constructor(){
      super()
        this.state = {
          notes: [],
          tags: '',
          title: '',
          textBody: ''
  
        };
    }
  
    componentDidMount() {
      this.getNotes();
    }
  
    getNotes = () => {
      axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    }
  
  
  
    handleInputChange = event => {
      this.setState({ 
        [event.target.name]: event.target.value });
      console.log("Changer log:", event.target.value)
    }
  
    adder = event => {
      event.preventDefault();
      
  
      const note = {
          tags: this.state.tags,
          title: this.state.title,
          textBody: this.state.textBody,
      }
      console.log(note);
      axios
        .post('https://killer-notes.herokuapp.com/note/create', note)
        .then(response => this.getNotes())
        .catch(error => console.log(error))
    };
  
  
    deleter = id => {
      console.log(id)
      axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(response => this.getNotes())
        .catch(error => console.log(error))
    }
  
    render() {
      return (
        
        <div className="EachNote" >
        {/* <br /><br /><br />
        <Link to="/"><button> View Your Notes </button></Link>
        <Link to="AddNote"><button> + Create New Note </button></Link>
        <Route exact path="/AddNote" component={AddNote} />
        <br /><br /><br /><br /><br /><br /> */}
        
          <br /><br />
          {this.state.notes.map(each => ( 
            <EachNote key={each._id} note={each} deleter={this.deleter} />
          ))}
        </div>
      );
    }
  }
  
  
//   function Notes(props){
//     return (
//       <div onClick={()=>{props.deleter(props.note._id)}}> {props.note.title} ||||| {props.note.textBody} x</div>
//     )
//   } 
  
  
  
  
//   export default App;



  export default Notes;