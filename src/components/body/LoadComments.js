import React from 'react';
import dateFormat from 'dateformat';

const h5Style = {
    backgroundColor:"gray",
    padding:"10px"
}
const pStyle = {
    backgroundColor:"pink",
    padding:"10px"
}

const LoadComments = props =>{
    
    return(
        props.comments.map(comment =>{
            return(
                <div key = {comment.id} style={{ backgroundColor: "gray", color: "white" }}>
                    <h5>{comment.author}</h5>
                    <p>{comment.comment}</p>
                    <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                </div>
            );
        })
    );
}
export default LoadComments;