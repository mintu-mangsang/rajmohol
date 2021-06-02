import React from 'react';
import {Card, CardBody, CardImg, CardTitle, CardImgOverlay, CardText} from 'reactstrap'; 
import LoadComments from './LoadComments';

const DishDetail = props =>{
    return(
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody>
                    <CardTitle style={{ backgroundColor: "yellow", padding:"10px" }}>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.category}</CardText>
                    <CardText>{props.dish.label}</CardText>
                    <CardText style={{ backgroundColor: "red", padding:"10px" }}>{props.dish.price}/-</CardText>
                    <CardText style={{ backgroundColor: "#8BF8E4"}}>{props.dish.description}</CardText>
                    <hr/>
                    <LoadComments comments ={props.dish.comments}/>

                </CardBody>
            </Card>
        </div>
    );
}
export default DishDetail;