/*

!! loi truyen menu.
- chuyển sang mact với main.


*/

import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle,CardImgOverlay, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


function RenderDish({dish}){
    return(
        <div>
                 <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
        </div>
    );
}
function RenderComments({comments}){
 
    const listComment= comments.map((cmm)=>{
      
    
      
        return(
            <div className="text-left">
                <h5>{cmm.author}</h5>
                <p>{cmm.comment}</p>
            </div>
        );
    
        
                        
    });
    return(
        <div>
            {listComment}
        </div>
    );

}


class DishDetail extends Component{
    constructor(props){
        super(props);
        
    }
   
    
    render(){
       
        if(this.props.dish != null){
            
            return (
                <div className="container">
                    <div className="row">
                        
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={this.props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={this.props.comments} />
                        </div>
                    </div>
                </div>
            );
        }else{
            return(<div></div>);
        }
    }
}
export default DishDetail;

/*
 <RenderComments comments={this.props.comments} />



import React,{Component} from 'react';
import { Card,CardTitle,CardBody,CardText,CardImg,CardImgOverlay } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        
    }
    getInfo(dish){
        return(
            <div>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.image} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    }
    getComment(dish){
        const listComment= dish.comments.map((cmm)=>{
            return(
                <div className="text-left">
                    <h5>{cmm.author}</h5>
                    <p>{cmm.comment}</p>
                </div>
            );
        });
        return(
            <div>
                {listComment}
            </div>
        );
    }

    render(){
       
        if(this.props.dish != null){
            const info=this.getInfo(this.props.dish);
            const comment=  this.getComment(this.props.dish);
            return (
                <div className="row">
                    <div className="col-5 col-md-5 m-1">
                        {info}
                    </div> 
                    <div className="col-5">
                        <h2>Comment</h2>
                        {comment}
                    </div>
                </div>
            );
        }else{
            return(<div></div>);
        }
    }
}
export default DishDetail;

*/