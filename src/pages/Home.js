import React from "react";

/* Import components */
import {Search} from "../components/Search";
import {Card} from "../components/Card";

export const Home = () => (
    <div>
        <Search />
        <div className="row">
            <div className="col-sm-4 mb-4">
                <Card />
            </div>
        </div>
    </div>
)