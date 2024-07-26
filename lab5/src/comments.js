import React from "react";
import child from "./images/child_avatar.png";
import "./index.css";

const User = function(props){
    return(
        <div>
            <section className="card">
                <a>
                    <img src={props.image} alt="avatar of user"/>
                </a>
                <div className="content">
                    <a className="author">{props.name}</a>
                </div>
                <div className="metadata">
                    Today at <span className="date">{props.date}</span>
                </div>
                <div className="comment">
                    "{props.comments}"
                </div>

            </section>
        </div>
    )
}

export default User;