import React from 'react';
import {Link} from 'react-router-dom';

class Search extends React.Component{
    constructor(props){
      super(props);
      this.state = {query: '', restaurants: []};
    }

    handleInput(e, query){

        this.setState({query: e.target.value });
        this.findMatches();
        this.handleBlur(false);
    }

    findMatches(){
      // this.props.searchAllRestaurants(this.state.query)

      this.props.searchAllRestaurants(this.state.query);
      // return(
      //   this.props.searchAllRestaurants(this.state.query).then( (resturants) => this.renderMatches(restaurants) )
      // );
      //  this.props.processRestaurant(restaurant).then(() => this.props.history.push('/profile'));
    }

    renderMatches(){
      // if(this.props.match.)

      if(this.props.results === undefined){
        return;
      }

      var results = Object.keys(this.props.results).map( (id) => this.props.results[id] )

      return(
        <ul id="search-bar" className = "search-bar">
          {results.map( (restaurant) =>
            <Link to={`/restaurants/${restaurant.id}`}>
            <li className = "search-bar-item"

            key= {restaurant.id}>
            {restaurant.name}

            </li>
            </Link>

           )}

        </ul>
      );

    }

    handleBlur(bool){
      (bool === true) ? document.getElementById('search-bar').style.visibility = "hidden" :
      document.getElementById('search-bar').style.visibility = "visible"

    }


    render(){
      // if(this.state.query !== ''){
      //     this.findMatches();
      // }

      return(
        <span className = "location-search-container">
          <span>
            <i className="fa fa-map-marker location-search-container" aria-hidden="true"></i>
          </span>

          <input className = "location-search-input"
          type="text"
          onChange={ (e) => this.handleInput(e,'query') }
          value={this.state.query}
          placeholder="Locations"
          onBlur={ () => this.handleBlur(true)}
          onClick={ () => this.handleBlur(false)}>
          </input>
          {this.renderMatches()}





        </span>
      );
    }


}



export default Search;
