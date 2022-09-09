import react, { Component, Fragment } from 'react'



class List extends Component {

  state = {
    isEdit : false
  }

  course = () =>{
    return(
      <li>
          <span>{this.props.courseName.name}</span>
          <button onClick={()=>{this.toggel()}}>Edit</button>
          <button onClick={() =>{this.props.delete(this.props.index)}}>Delete</button>
        </li>
    )
  }

  toggel = () =>{
    let {isEdit} = this.state
    this.setState({
      isEdit : !isEdit
    })
  }

  updateForm = () =>{
    return(
      <form onSubmit={this.updateItem}>
        <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.courseName.name} minLength="2"/>
        <button type='submit'>Update</button>
      </form>
    )
  }

  updateItem = (e) =>{
    e.preventDefault();
    this.props.edit(this.props.index, this.input.value)
    this.toggel()
  }

  Show = () =>{
    let {isEdit} = this.state
    if (isEdit ) {
      return(
        this.updateForm()
      )
    } else {
      return(
        this.course()
      )
    }
  }

  render(){
    return(
      <Fragment>
        <this.Show />
      </Fragment>
    )
  }
}

export default List;