import react, { Component } from 'react'
import './App.css';
import FromList from './Components/formList/formList';
import List from './Components/List/list';


class App extends Component {
  state = {
    courses : [
      {name: "html"},
      {name : "CSS"},
    ],
    current : "",
    }

  updataCourse = (e) =>{
    
    this.setState({
      current: e.target.value
    })
  }

  addCourse = (e) =>{
    e.preventDefault();
    let current = this.state.current
    let courses = this.state.courses
    if (current.length == 0) {
          
    } else {
      
      courses.push({name : current})
      this.setState({
        courses,
        current : ""
      })
    }
  }

  delete = (index) =>{
    //console.log(index)
    let courses = this.state.courses
    courses.splice(index , 1)
    this.setState({
      courses
    })
  }


  edit = (index, value) =>{
    if (value.length == 0) {
      
    } else {
      
      let {courses} = this.state
      let course = courses[index]
      course["name"] = value
    }

  }

  render(){
    const {courses} = this.state
    const coursList = courses.map( (course, index) => {
      return <List courseName = {course} key={index} index={index} delete={this.delete} edit={this.edit}/>
    })
    return(
      <section className='App'>
        <h2> Course List </h2>
        <ul>
          <FromList current={this.state.current} updataCourse={this.updataCourse} addCourse={this.addCourse}/>
          {coursList}
        </ul>
      </section>
    )
  }
}

export default App;
