import React from "react";

import {Link} from "react-router-dom";

export const Card = () => (
    <div className="card">
        <img src="" alt="" className="card-img-top" />
        <div className="card-body">
            <h2 className="card-title">Example</h2>
            <Link to={"/profile/"} className="btn btn-primary">Открыть профиль</Link>
        </div>
    </div>
)