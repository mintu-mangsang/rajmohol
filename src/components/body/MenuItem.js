import React from 'react';
import {Card, CardBody, CardImg, CardTitle, CardImgOverlay} from 'reactstrap'; 

const MenuItem = props =>{
    return(
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{ opacity: "0.5" }}></CardImg>
                    <CardImgOverlay>
                        <CardTitle style={{ cursor:"pointer", fontSize: "50px" }} onClick ={props.dishSelect}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}
export default MenuItem;
