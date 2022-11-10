import React , { useState } from "react";
import {connect,useSelector } from 'react-redux';
import { getDogDetail } from "../../redux/actions";

//import React, { useState, useEffect } from 'react';

export  function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const dogs = useSelector((state) => state.dogs)
  const redirect = (redirectUrl) => {
    window.location = redirectUrl;
  };
  return (
    <div >
        <form onSubmit={(e) => {
      e.preventDefault();
      //alert(searchInput)
      if( !dogs.filter(property => property.name===searchInput ).length)
      { return redirect ('/dogs/noExists') }
      else{ return redirect('/dogs/'+searchInput); }
     // redirect('/dogs/'+searchInput);
     // useNavigate('/dogs/'+searchInput);
    }}> 
      
      <input
        type="text"
        placeholder="Breed Dog..."
        value={searchInput}
        onChange={e => setSearchInput(e.target.value) } />
      <input type="submit" value="Search" />
    </form> 
    
    </div>
  );
}

export const mapStateToProps = (state) => {
  return { dogs:state.dogs };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    getDogDetail: function(value){dispatch(getDogDetail(value))}
  };
;}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);