

function FromList(props){
    return(
        <form onSubmit={props.addCourse}>
            <input type="text" placeholder="Add Course Name" value={props.current} onChange={props.updataCourse} minLength="2"/>
            <button type="submit" >Add Course </button>
        </form>
    )
}

export default FromList