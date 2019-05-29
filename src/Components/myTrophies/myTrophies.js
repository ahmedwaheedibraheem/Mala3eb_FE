import React, { Component } from "react";
import MyTrophy from "./MyTrophy/mytrophy";
import { withRouter } from 'react-router-dom';
import * as classes from './myTrophies.module.css';
import "../../Theme/bootstrap.css"

class MyTrophies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trophies: [
                {
                    id: "0",
                    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iti-task-8ceb2.appspot.com/o/column.png?alt=media&token=b58d3c76-0397-4311-bb07-b7c60842d243",
                    name: "mahmoud",
                    rank: "5",
                    description: "ايضاااا اكثر من 10000 نقطة في العمل الجماعي هذه الجائزة عظيمة حقااااا اذ انه لا يجو الا بعد ان تقوم بحصد اكثر من 500 اعجاب و "
                }, {
                    id: "1",
                    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iti-task-8ceb2.appspot.com/o/column.png?alt=media&token=b58d3c76-0397-4311-bb07-b7c60842d243",
                    name: "mahmoud",
                    rank: "5",
                    description: "ايضاااا اكثر من 10000 نقطة في العمل الجماعي هذه الجائزة عظيمة حقااااا اذ انه لا يجو الا بعد ان تقوم بحصد اكثر من 500 اعجاب و "
                }, {
                    id: "2",
                    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iti-task-8ceb2.appspot.com/o/column.png?alt=media&token=b58d3c76-0397-4311-bb07-b7c60842d243",
                    name: "mahmoud",
                    rank: "5",
                    description: "ايضاااا اكثر من 10000 نقطة في العمل الجماعي هذه الجائزة عظيمة حقااااا اذ انه لا يجو الا بعد ان تقوم بحصد اكثر من 500 اعجاب و "
                }, {
                    id: "3",
                    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iti-task-8ceb2.appspot.com/o/column.png?alt=media&token=b58d3c76-0397-4311-bb07-b7c60842d243",
                    name: "mahmoud",
                    rank: "5",
                    description: "ايضاااا اكثر من 10000 نقطة في العمل الجماعي هذه الجائزة عظيمة حقااااا اذ انه لا يجو الا بعد ان تقوم بحصد اكثر من 500 اعجاب و "
                }, {
                    id: "4",
                    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iti-task-8ceb2.appspot.com/o/column.png?alt=media&token=b58d3c76-0397-4311-bb07-b7c60842d243",
                    name: "mahmoud",
                    rank: "5",
                    description: "ايضاااا اكثر من 10000 نقطة في العمل الجماعي هذه الجائزة عظيمة حقااااا اذ انه لا يجو الا بعد ان تقوم بحصد اكثر من 500 اعجاب و "
                }, {
                    id: "5",
                    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iti-task-8ceb2.appspot.com/o/column.png?alt=media&token=b58d3c76-0397-4311-bb07-b7c60842d243",
                    name: "mahmoud",
                    rank: "5",
                    description: "ايضاااا اكثر من 10000 نقطة في العمل الجماعي هذه الجائزة عظيمة حقااااا اذ انه لا يجو الا بعد ان تقوم بحصد اكثر من 500 اعجاب و "
                }
            ]
        }
    }
    componentDidMount() {
        var el = document.getElementById(localStorage.id);
        el.scrollIntoView({ block: "center" });
    }

    render() {
        let MyTrophies = this.state.trophies.map(trophy => (
            <MyTrophy
                key={trophy.id}
                description={trophy.description}
                imageUrl={trophy.imageUrl}
                name={trophy.name}
                rank={trophy.rank}
                id={trophy.id}
            />
        ));
        return (
            <>
                <table id={classes.table} className="table table-lg">
                    {MyTrophies}
                </table>
            </>
        )
    }
}

export default withRouter(MyTrophies);