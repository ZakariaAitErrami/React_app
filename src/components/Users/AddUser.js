import React, {useState} from "react";
import Card from "./UI/Card";
import classes from "./AddUser.module.css"
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";
const AddUser = props => {
    const [entredUsername, setEntredUsername] = useState("");
    const [entredAge, setEntredAge] = useState("");
    const [error,setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();

        if(entredUsername.trim().length ===0 || entredAge.trim().length ===0){
            setError({
                title: "Invalid input",
                message: "Name or the age cannot be empty!"
            })
            return;
        }
        if(+entredAge < 1){
            setError({
                title: "Invalid age",
                message: "Please enter a valid age!"
            })
            return;
        }
    props.onAddUser(entredUsername,entredAge);
        setEntredAge("");
        setEntredUsername("");
        
    }
    const usernameChangeHandler = (event) => {
        setEntredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEntredAge(event.target.value);
    };

    //hide the error handler
    const errorHandler = () =>{
        setError(null);
    }

    return(
     <div>
        
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
     <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={entredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" value={entredAge} onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
      </Card>
      </div>
    );
};
export default AddUser;