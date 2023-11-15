import React, {useEffect, useState} from "react";
import axios from "axios";

const ChallengeBoard = (props) => {
    const challengeAcceptHandler= () =>{
        props.onAcceptClicked(props.challenge);
    }
    return (
        <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 text-center">
            <div className="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “{props.challenge.description}”
                    </p>
                </blockquote>
                <div className="font-medium">

                    <button
                        onClick={challengeAcceptHandler}
                        className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:bg-blue-700">
                        Accept the {props.challenge.name} Challenge
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChallengeBoard;
