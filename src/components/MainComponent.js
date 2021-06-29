import React, { Component } from 'react';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import Header from './HeaderComponent.js';
//accept.
import Home from './HomeComponent.js';
//Corporate Leadership.
import About from './AboutComponent';
// adjust item 2 sm 3 md.
import Menu from './MenuComponent.js';
// design item + create form add comment.
import DishDetail from './DishdetailComponent';
// Map of our Location.
import Contact from './ContactComponent.js';
// extra icon home + format font + adjust icon email larger
import Footer from './FooterComponent.js';

const mapStateToProps = state => {
  // get data from folder redux, data import at file in redux.
  // use state is same variable gobal and push data to file main.
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // wk2 Reat Router.
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    
    return (
      <div>
        <Header />
        <div>
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                  {/* <Route path='/home' >
                    <Home 
                            dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                            promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                        />
                  </Route> */}
                  <Route path='/home' component={HomePage} />
                  <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                  <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                  <Route path='/menu/:dishId' component={DishWithId} />
                  <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));

/*
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

*/
