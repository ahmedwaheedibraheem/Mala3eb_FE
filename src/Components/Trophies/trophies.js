import React, { Component } from "react";
import Trophy from "./Trophy/trophy";
import { withRouter } from 'react-router-dom';
import "../../Theme/bootstrap.css"

class Trophies extends Component {

    state = {
        trophies: [
            {
                id: "0",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/iti-task-8ceb2.appspot.com/o/column.png?alt=media&token=b58d3c76-0397-4311-bb07-b7c60842d243",
                name: "a",
                rank: "5",
            },
            {
                id: "1",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/iti-task-8ceb2.appspot.com/o/drop.png?alt=media&token=c9bc7597-469f-4520-a943-2cc98dae3dd8",
                name: "a",
                rank: "5"
            },
            {
                id: "2",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/iti-task-8ceb2.appspot.com/o/earth.png?alt=media&token=209948ce-1bcc-4b42-ac03-99f0b684ee7b",
                name: "a",
                rank: "5"
            },
            {
                id: "3",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/iti-task-8ceb2.appspot.com/o/gold.png?alt=media&token=b3dc8b43-0e78-43f7-9922-daa96001c0c4",
                name: "a",
                rank: "5"
            }, {
                id: "4",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/iti-task-8ceb2.appspot.com/o/hex.png?alt=media&token=1baf11ce-3035-4f9c-87c8-bba67cb5d86e",
                name: "a",
                rank: "5"
            }, {
                id: "5",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/iti-task-8ceb2.appspot.com/o/shield.png?alt=media&token=45a0a91a-8bc5-4054-a239-09d4dbe339ee",
                name: "a",
                rank: "5"
            }
        ]
    }

    detailsHandler = (id) => {
        this.props.history.push(`/Trophies/${id}`)
        localStorage.setItem("id", `${id}`)
    }

    render() {
        let trophies = this.state.trophies.map(trophy => (
            <Trophy
                key={trophy.id}
                image={trophy.imageUrl}
                name={trophy.name}
                rank={trophy.rank}
                clicked={() => this.detailsHandler(trophy.id)}
            />
        ));

        return (

            <div className="container">
                <div className="row">
                    {trophies}
                </div>
            </div>
        )
    }
}

export default withRouter(Trophies);