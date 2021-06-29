import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg, CardImgOverlay, CardSubtitle } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item}){
  return(
     <FadeTransform
        in
        transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    </FadeTransform>
            
  );
}

function Home(props) {
    return(
      <div className="container">
        <div className="row algin-item-start">
            <div className="col-12 col-md">
              <RenderCard item={props.dish}/>
            </div>
            <div className="col-12 col-md">
              <RenderCard item={props.promotion}/>
            </div>
            <div className="col-12 col-md">
              <RenderCard item={props.leader}/>
            </div>
        </div>
      </div>
    );
}

export default Home;   