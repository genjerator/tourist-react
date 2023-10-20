import React, { useEffect, useState } from "react";
import axios from "axios";

const Challenge = ({props={name:'title',description:'tesstc'}}) => {
  return (
    <div className="bg-white w-40 h-40 rounded-lg items-center justify-center text-red-400">
          <p>{props.name}</p>
          <p>{props.description}</p>
        </div>
  );
};

export default Challenge;
