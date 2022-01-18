import React, {useState,useEffect} from "react";


// PROGRESSION 1 | UPDATE STATE USING useState

/*
const One = () =>{
  const [age,setAge] = useState(19)

  const handleClick = () => setAge(age +1)

  return (
    <div>
      <h1>Today I am {age} Years of age </h1>
     <div>
       <button onClick={handleClick}>Get older!</button>
     </div>
    </div>
  )

}
*/
///////////////////////////////////////////////////////////////////////////////////////

// PROGRESSION 2 | MULTIPLE STATE

/*
const One = () =>{
  const [age,setAge] = useState(19);
  const [siblingsNum,setSiblingsNum] = useState(10);

  

  const handleAge = () => setAge(age+1)
  const handleSiblingsNum = () => setSiblingsNum(siblingsNum+1)

  return(
    <div>
      <b><p>Today I am {age} Years of Age</p></b>
      <b><p>I have {siblingsNum} siblings</p></b>
      <div>
      <button onClick={handleAge}>Get Older!</button>
      <button onClick ={handleSiblingsNum}>MoreSiblings!</button>
      </div>
    </div>
  )
 

}
*/

///////////////////////////////////////////////////////////////////////////////////////////////

// PROGRESSION 3 | USE OBJECT STATE

/*
const One =()=>{
  const [state,setState] = usestate({age:19,
  const handleClick = val =>

  setState({
    ...state,
    [val]:state[val] + 1
  })
  
})
  const {age,siblingsNum} = state
  
  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>
    
    <div>
           <button onClick={handleClick}>Get Older!</button>
           <button onClick ={handleSiblingsNum}>MoreSiblings!</button>
    </div>
     </div>     

  )
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////

// PROGRESSION 4 | INITIALIZE STATE FROM FUNCTION

/*
const One = ()=>{
  const [count,setCount] = useState(0);

  return (
    <>
    <p><b>Count value is: {count}</b></p>
    <button onClick={()=>setCount(0)}>Reset</button>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>
     Plus(+) </button>
     <button onClick={ () => setCount(prevCount => prevCount -1)}>
     Minus (-) </button>
    
    </>
  )
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////

//PROGRESSION 5 | useEffect

const One = ()=>{
  const [age,setAge] = useState(0);
  const handleClick = () => setAge(age+1)

  useEffect( () =>{
    document.title = "you are " + age + ' years'
  })

  return <div>
    <p>Look at the title of the current tab in your browser</p>
    <button onClick={handleClick}>Update Title</button>
  </div>
}

///////////////////////////////////////////////////////////////////////////////////////////





export default One;
