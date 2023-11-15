import { useState} from "react";

const Challenge = (props) => {
    const [selected,setSelected] = useState()
    const challengeSelectHandler = () =>{

        props.onChallangeSelectChange(props.challenge);
        console.log(props)
    }
    return (
        <div>
            <div className="bg-white w-40 h-40 rounded-lg items-center justify-center text-red-400">
                <p>{props.challenge.name}</p>
                <p>{props.challenge.description}</p>
                <button onClick={challengeSelectHandler}>View</button>

            </div>

        </div>
    );
};

export default Challenge;
