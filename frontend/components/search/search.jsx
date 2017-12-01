import React from 'react';
import {Link} from 'react-router-dom';

class Search extends React.Component{
    constructor(props){
      super(props);
      this.state = {query: '', results: []};
    }

    handleInput(e, query){
        console.log(this.state);
        this.setState({query: e.target.value });
        this.findMatches();

        // var bool = true;
        $('ul').css('display','block');

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

      var results = Object.keys(this.props.results).map( (id) => this.props.results[id] );

      this.state.results = results;

      return(
        <ul id="search-bar" className = "search-bar">
          <h1>  </h1>
          {results.map( (restaurant) =>


             <Link to={`/restaurants/${restaurant.id}`}>

            <li id ="search-bar-item" className ="search-bar-item" onClick={() =>this.handleListClick(restaurant.id)}

            key= {restaurant.id}>

            {restaurant.name}


            </li>
            </Link>

           )}

        </ul>
      );

    }

    handleListClick(id){

      console.log('inside');
      this.props.requestRestaurant(id);
        // console.log($('location-header'))
        // console.log(document.getElementById("location-header"));
      // document.getElementById("location-header").style.visibility = "hidden";
      // document.getElementById("search-bar").style.visibility = "hidden";


    }


    handleBlur(bool){
      // $('ul').css('display', 'block');

      // if(bool === true){
      //   //but first redirect
      //   document.getElementById('search-bar').style.visibility = "hidden";
      // } else{
        //  document.getElementById('search-bar').style.visibility = "visible";
      // }


    }



    render(){
      console.log(this.state);
      // if(this.state.query !== ''){
      //     this.findMatches();
      // }
      window.onclick = function(event) {
        if (!event.target.matches('.search-bar')){
            $('ul').css('display', 'none');
        }
      }
          return(
        <span className = "location-search-container">
          <span>
            <i className="fa fa-map-marker location-search-container" aria-hidden="true"></i>
          </span>

          <input className = "location-search-input"
          type="text"
          onChange={ (e) => this.handleInput(e,'query') }
          value={this.state.query}
          placeholder="Locations">
          </input>
          {this.renderMatches()}





        </span>
      );
    }


}



export default Search;

// onClick={ () => this.handleBlur(false)}
//onBlur={ () => this.handleBlur(true)}>

// onBlur= {() => this.handleBlur(true)}
