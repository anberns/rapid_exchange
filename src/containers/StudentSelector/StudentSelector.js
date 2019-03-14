import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Student from '../../components/Student/Student';
import classes from './StudentSelector.css';

class StudentSelector extends Component {
    state = {
        students : [
            { id: "1", name: "Billy"},
            { id: "2", name: "Jean"},
            { id: "3", name: "Gavin"}
        ]
    }

    chooseStudent = (event) => {
        console.log(event.target.value);
    }

    render () {
        const studentsCopy = [...this.state.students];
        let students = (
            <Aux>
                <div className={classes.Students}>
                    {studentsCopy.map((student, index) => {
                        return <Student
                            className={classes.Student}
                            content={student.name}
                            id={student.id}
                            click={(event) => this.chooseStudent(event)}
                        />
                    })}
                </div>
            </Aux>

        )

        return (
            <Aux>
                <div>
                    {students}
                </div>
            </Aux>

        );
    }
}

export default StudentSelector;