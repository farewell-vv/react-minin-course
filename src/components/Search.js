import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Search = () => {
    const [value, setValue] = useState("");
    const { show, hide } = useContext(AlertContext);

    const onSubmit = (event) => {
        if (event.key !== "Enter") {
            return
        }

        if (value.trim()) {
            hide();
            console.log(value)
        } else {
         show("Введите запрос")
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}