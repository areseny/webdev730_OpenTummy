import React from 'react';


class RestaurantForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        name: 'Joe', address: '123 Street', city: 'Davis', state: '', postal_code: '94122', country: 'USA', price: '',
        category: '', thumbnail: '', description: '', lat: '', lng: '', image_urls: [], max_reservations: ''
      }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){

    e.preventDefault();

    const restaurant = this.state;


    this.props.createRestaurant(restaurant);
  }

  handleInput(field){
    return ( e =>
      this.setState({[field]: e.target.value })
    )
  }

  render(){
    return(
      <div>
       <form className="restaurant-form" onSubmit={this.handleSubmit}>
         Add a Restaurant

         <br/>

         <input
           className = "input-restaurant-form"
           placeholder = "Enter Restaurant Name"
           value={this.state.name}
           type="text"
           onChange={this.handleInput('name')} />

           <br/>


           <input
             className = "input-restaurant-form"
             placeholder = "Enter Address"
             value={this.state.address}
             type="text"
             onChange={this.handleInput('address')} />

            <br/>

            <input
              className = "input-restaurant-form"
              placeholder = "Enter city"
              value={this.state.city}
              type="text"
              onChange={this.handleInput('city')} />

            <br/>




                <input
                  className = "input-restaurant-form"
                  placeholder = "Enter Postal Code"
                  value={this.state.postal_code}
                  type="text"
                  onChange={this.handleInput('postal_code')} />

                <br/>

                <input
                  className = "input-restaurant-form"
                  placeholder = "Enter Country"
                  value={this.state.country}
                  type="text"
                  onChange={this.handleInput('country')} />

                <br/>

                <select onChange={this.handleInput('state')} value={this.state.state}>
                    <option value="" disabled>
                      Select State</option>

                    <option value="California" type ="text">California</option>
                      <option value="Illnois" type ="text">Illnois</option>
                    <option value="New York" type ="text">New York</option>
                    <option value="Texas" type = "text">Texas</option>
                    <option value="Florida" type = "text">Florida</option>

                </select>

                  <br/>

                <select onChange={this.handleInput('price')} value={this.state.price}>
                    <option value="" disabled >
                    Select Price</option>


                    <option value={1}> 1 - Budget </option>
                    <option value={2}> 2 </option>
                    <option value={3}> 3 - Neutral</option>
                    <option value={4}> 4 </option>
                    <option value={5}> 5 - Expensive</option>

                  </select>

                  <br/>

                  <select  onChange={this.handleInput('category')} value={this.state.category} >
                      <option value=""disabled>
                      Optional: Select Category</option>

                      <option value="Brunch" type="text"> Brunch </option>
                      <option value="Casual" type="text"> Casual </option>
                      <option value="Fast Food" type="text">Fast Food </option>
                      <option value="Fine Dining" type="text"> Fine Dining</option>
                </select>

                  <br/>


                  <input
                    className = "input-restaurant-form"
                    placeholder = "Optional:   Upload thumbnail link"
                    value={this.state.thumbnail}
                    type="text"
                    onChange={this.handleInput('thumbnail')} />

                  <br/>


                  <input
                    className = "input-restaurant-form"
                    placeholder = "Optional:   Enter Location (latitude)"
                    value={this.state.lat}
                    type="text"
                    onChange={this.handleInput('lat')} />

                  <br/>

                  <input
                    className = "input-restaurant-form"
                    placeholder = "Optional:   Enter Location (longititude)"
                    value={this.state.lng}
                    type="text"

                    onChange={this.handleInput('lng')} />

                  <br/>

                  <input
                    className = "input-restaurant-form"
                    placeholder = "Optional:  Enter Max Number of Reservations"
                    value={this.state.max_reservations}
                    type="text"

                    onChange={this.handleInput('max_reservations')} />

                  <br/>

                  <textarea name = "description" rows = "5"

                    placeholder = "Optional: Leave a Description"
                    value={this.state.description}
                    type="text"

                    onChange={this.handleInput('description')} />

                  <br/>

                <button type="submit" className = "input-button"> Create Restaurant </button>

                </form>



       </div>



    );
  }





};

export default RestaurantForm;

// <option disabled selected = "selected">
// Select State</option>
