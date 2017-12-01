import React from 'react';
import ReservationContainer from '../reservation/reservation_container';
import FavoriteContainer from '../favorite/favorite_container';


class RestaurantDetail extends React.Component{
  constructor(props){
    super(props);



  }

  componentWillReceiveProps(nextProps){
    if(this.props.location.pathname !== nextProps.location.pathname){
      this.props.requestRestaurant(this.props.match.params.restId);
    }
  }

  componentDidMount(){
      // this.props.requestRestaurant(this.props.match.params.restId);
  }

  componentWillMount(){
    this.props.requestRestaurant(this.props.match.params.restId);
    window.scrollTo(0,0);


    // document.getElementById("search-bar").style.visibility = "hidden";

  }




  render(){
    // console.log('mount');
    $('ul').css('display', 'none');
    // document.getElementById('search-bar').style.visibility = 'none'
    const {restaurant} = this.props;

    let reservationId = parseInt(this.props.match.params.reservationId);

    if (typeof restaurant === "undefined"){
      return null;
    }
    else{

      return(
        <section className = "restaurant-detail-main">

          <div className = "restaurant-detail-header">

            <img className="thumbnail-restaurant-detail" src={restaurant.thumbnail}/>

            <div className = "restaurant-detail-header-left">
              <h1 className = "h1-restaurant-title">{restaurant.name} </h1>
              <span> <h3> *** </h3> <h3> 40 Reviews </h3> </span>
              <br/>
            </div>

            <FavoriteContainer
            restaurant={restaurant} />





          </div>

          <div>
            <ReservationContainer
            restaurant={restaurant}
            reservationId={reservationId}/>
          </div>

          <br/>

          <div className = "content-div">
            <h1> About {restaurant.name} </h1>
            <hr/>
            <span> {restaurant.description} Contemporary Food. Styled in Georgian </span>
          </div>

          <br/>

          <div className = "content-div">
            <h1> Ratings and Reviews </h1>
            <hr/>
            <span> Gooooood stuff. I love it </span>
          </div>

        <div className = "placeholder-div">
        </div>



        </section>
      );
    }


  }



}

export default RestaurantDetail;


// <button className = "fav-button-restaurant-item"> <i className="fa fa-star" aria-hidden="true"></i> Fav </button>
