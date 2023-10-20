import React, {useEffect, useState} from "react";
import moment from "moment";
import Challenge from "./Challenge";
import axios from "../api/axios.js";

const Round = () => {
    const [round, setRound] =
        useState({
            date_end: "",
            date_start: "",
            title: "title",
            challenges: [
                {name: '11111', description: 'descriptionnnn', id: 1},
                {name: '22222', description: 'wde234234', id: 2},
                {name: '33333', description: '234dscdsc', id: 3},
                {name: '44444', description: '234234', id: 4},
                {name: '55555', description: 'asd', id: 5},
            ]
        })

    useEffect(() => {
        axios.get('/latest-active-round')
            .then((response) => {
                // Handle the successful response here
                setRound(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }, [])


    return (
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-20 text-white text-center">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold">Round: {round.name}</h1>
                <p className="text-lg mt-4">

                    {round.description}
                </p>
                <p className="text-lg mt-4">

                    Discover challenges from {round.date_start}
                    - until - {round.date_end}

                </p>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
                {round.challenges.map((challenge) => (
                    <Challenge props={challenge} key={challenge.id}/>
                ))}
            </div>
        </div>
    );
};

export default Round;
