import React from "react";
import Form from "./style.module.css";

function index({ handleCreate }: {handleCreate: React.FormEventHandler<HTMLFormElement> }) {
    return (
        <form className={Form.form} onSubmit={handleCreate}>
            <div className={Form.group}>
                <label htmlFor="title">Title: </label>
                <input className={Form.input} name="title" id="title" type="text" placeholder="Title..."/>
            </div>
            <div className={Form.group}>
                <label htmlFor="description">Description: </label>
                <input className={Form.input} name="description" id="description" type="text" placeholder="Desc..." />
            </div>
            <button className={Form.btn} type="submit">Add</button>
        </form>
    )
}

export default index;
