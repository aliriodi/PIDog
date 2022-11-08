import React , { useState } from "react";
//import {/*Link, Routes, Route,*/ useNavigate} from 'react-router-dom';
//import { useNavigate } from "react-router"
import {connect} from 'react-redux';
import DogDetail from "../DogDetail/DogDetail";
import { getDogDetail } from "../../redux/actions";
//import React, { useState, useEffect } from 'react';

export  function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const redirect = (redirectUrl) => {
    window.location = redirectUrl;
  };
  return (
    <div >
        <form onSubmit={(e) => {
      e.preventDefault();
      //alert(searchInput)
      return    redirect('/dogs/'+searchInput);
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
  return { dogDetail: state.dogDetail };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    getDogDetail: function(value){dispatch(getDogDetail(value))}
  };
;}

export default connect(mapStateToProps, /*mapDispatchToProps*/)(SearchBar);