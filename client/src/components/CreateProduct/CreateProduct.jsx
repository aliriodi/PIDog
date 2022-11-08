import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [heightMin, setHeightMin] = useState();
  const [heightMax, setHeightMax] = useState();
  const [weightMin, setWeightMin] = useState();
  const [weightMax, setWeightMax] = useState();
  const [yearMin, setYearMin] = useState();
  const [yearMax, setYearMax] = useState();
  const [errorN, setErrorN] = useState('');
  const [errorHMin, setErrorHMin] = useState('');
  const [errorHMax, setErrorHMax] = useState('');
  const [errorWMin, setErrorWMin] = useState('');
  const [errorWMax, setErrorWMax] = useState('');
  const [errorYMin, setErrorYearMin] = useState('');
  const [errorYMax, setErrorYearMax] = useState('');

  /**VALIDACIONES */
  /*Name*/
  function validateUser(value) {
    if(value.length == 35 || /^\s+$/.test(value)) {
      setErrorN('el usuario tiene caracteres no validos');
    } else if(!value) {setErrorN('Usuario no puede ser indefinido')}
    else {
      setErrorN('');
    }
    setName(value);
  }
  /*HeightMin*/
  function validateHeight(value1) {
   if(typeof(value1)===Number  ) {
     setErrorHMin('The height MIN is Not a Number or is bigger');
   } else{setErrorHMin('')};
   setHeightMin(value1);
   }
   function validateHeight2(value2) {
      if(typeof(value2)===Number) {
        setErrorHMax('The height MAX is Not a Number or is bigger');
      } 
      else if(value2<heightMin){}
      else{setErrorHMax('The height Min is bigger one that height Max')};
      setHeightMax(value2);
      }
      /** */
      function validateWeightMin(value){
         setWeightMin(value)
      }
      /** */
      function validateWeightMax(value){
         setWeightMax(value)
      }
      /** */
      function validateYearMin(value){
         setYearMin(value)
      }
      /** */
      function validateYearMax(value){
         setYearMax(value)
      }
  return (
      <form>
         <p>Name: </p>
        <input className={errorN && 'danger'}
          name="name" 
          value={name} 
          placeholder="Write until 35 characters" 
          onChange={(e) => validateUser(e.target.value)}></input>
        {!errorN ? null : <span>{errorN}</span>}
        
        {/** */}
        <p>Height : Min - Max</p>
        <p><input className={errorHMin && 'danger'}
          name="height" 
          value={heightMin} 
          placeholder="Max 2 numbers in metrics unit cm" 
          onChange={(e) => validateHeight(e.target.value)}></input>
        {!errorHMin ? null : <span>{errorHMin}</span>}
         -
        <input className={errorHMax && 'danger'}
          name="height" 
          value={heightMax} 
          placeholder="Max 2 numbers in metrics unit cm" 
          onChange={(e) => validateHeight2(e.target.value)}></input>
        {!errorHMax ? null : <span>{errorHMax}</span>}
        </p>
        
        {/** */}
        <p>Weight : Min - Max</p>
        <p><input className={errorWMin && 'danger'}
          name="weight" 
          value={weightMin} 
          placeholder="Max 2 numbers in metrics unit cm" 
          onChange={(e) => validateWeightMin(e.target.value)}></input>
        {!errorWMin ? null : <span>{errorWMin}</span>}
         -
        <input className={errorWMax && 'danger'}
          name="height" 
          value={weightMax} 
          placeholder="Max 2 numbers in metrics unit cm" 
          onChange={(e) => validateWeightMax(e.target.value)}></input>
        {!errorWMax ? null : <span>{errorWMax}</span>}
        </p>

        
        {/** */}
        <p>Year : Min - Max</p>
        <p><input className={errorYMin && 'danger'}
          name="Year" 
          value={yearMin} 
          placeholder="Max 2 numbers in metrics unit cm" 
          onChange={(e) => validateYearMin(e.target.value)}></input>
        {!errorYMin ? null : <span>{errorYMin}</span>}
         -
        <input className={errorYMax && 'danger'}
          name="Year" 
          value={yearMax} 
          placeholder="Max 2 numbers in metrics unit cm" 
          onChange={(e) => validateYearMax(e.target.value)}></input>
        {!errorYMax ? null : <span>{errorYMax}</span>}
        </p>


        <input type="submit" />
      </form>
    );
}