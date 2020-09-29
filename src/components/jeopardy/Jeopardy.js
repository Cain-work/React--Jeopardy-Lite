import React, { Component } from 'react';
import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {

    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {

                "id": null,
                "answer": "",
                "question": "",
                "value": null,
                "airdate": "",
                "created_at": "",
                "updated_at": "",
                "category_id": null,
                "game_id": null,
                "invalid_count": null,
                "category": [{

                    "id": null,
                    "title": "",
                    "created_at": "",
                    "updated_at": "",
                    "clues_count": null

                }]
            }
        }
        Score = 0,

            formData = {
                answer: ""
            }
    }
};
handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
}

handleSubmit = () => {
    event.preventDefault();

    if ((formData) === (this.state.data.answer)) {

        //(this.state.data.value) + (this.state.Score)
        return (this.setState.Score) = (this.state.data.value) + score;
    }
    else {
        ((this.state.score) - (this.state.data.value))
        return this.setState.score = (this.stat.data.value) - score;
    }
}



//get a new random question from the API and add it to the data object in state
getNewQuestion() {
    return this.client.getQuestion().then(result => {
        this.setState({
            data: result.data[0]
        })
    })
}
//when the component mounts, get a the first question
componentDidMount() {
    this.getNewQuestion();
}
//display the results on the screen
render() {
    return (
        <div>
            <strong>Question:</strong>{this.state.data.question}<br />,
            <strong>Category:</strong>{this.state.data.category.title}<br />,
            <strong>Value:</strong>{this.state.data.value},<br />
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="answer">Answer</label>
                <input type="text"
                    name="answer"
                    onChange={this.handleChange}
                /> <br />
                <button>Submit</button>
            </form>
            <strong>Score:</strong>{this.state.Score}
        </div>
    );
}

export default Jeopardy