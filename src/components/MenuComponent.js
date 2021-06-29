import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg, CardImgOverlay,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DishDetail from './DishdetailComponent'    
import { Link } from 'react-router-dom';

function RenderMenuItem ({dish, onClick}) {
    // display iteams ĐIỀU HƯỚNG detail item khi click vào link.
    return (
        // Link: main -> dishdetail.
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }
 
    // dish vua lay tu item ~ ?? Sao dish bay len day dc z.
    onDishSelect(dish) {

        // this.setState -> cap nhat item # chi qua ham nay moi cap nhat
        this.setState({ selectedDish: dish });
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
         
            return (
                // push iteam dish in map to function.
                <div key={dish.id} className="col-5 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}
export default Menu;
/*
 ?? không bk làm cách nào(Js + html)-> tạo oop ~ RUN + ALGIN trên trang ntn.
 // HT: chỉ code khung còn CSS hd ntn để ra trang này là mình chưa bk.

 ??  className="col-12 col-md-4 m-1": nếu để ngoài thì dạng đúng CÒN để bên trong renderDish -> lệch SAO z Nhở
 ?? sao lai bo di media ma van hd tot
*/


/**
 
// xly dish ~ ! viet dung ten khong la bi loi. 
    renderDish(stateChanged) {

        // ?? dish xp tu click ~ sao bay dong dong z ne.
        if (stateChanged != null) {
            return (
                <div >
                    <Card>
                        <CardImg width="100%" src={stateChanged.image} alt={stateChanged.image} />
                        <CardImgOverlay>
                            <CardTitle>{stateChanged.name}</CardTitle>
                            <CardText>{stateChanged.description}</CardText>
                        </CardImgOverlay>
                    </Card>

                </div>

            );
        } else {
            return (<div></div>);
        }
    }
 */