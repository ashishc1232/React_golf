/*
function myapp() {


  return <div>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam expedita alias nisi laborum explicabo nihil iste repellat voluptatum recusandae ut.\</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, atque numquam.</p>
  </div>
  // return (
  //   <div>
  //     <h1>Hello React</h1>
  //     <h1>Hello React</h1>
  //     <h1>Hello React</h1>
  //     <h1>Hello React</h1>
  //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laudantium accusantium animi unde magnam est aliquid quo recusandae. Maiores ratione vero maxime tenetur repudiandae nemo cumque veritatis tempore nulla delectus?</p>
  //   </div>
  // )
}

export default myapp
*/
// const myapp = () => {
//   return (
//     <div>
//       <h1>Using Arrow function</h1>
//     </div>
//   )
// }
// export default myapp

// import Forms from "./pages/Forms";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import BasicValidation from "./pages/BasicValidation";
import UnControlled from "./pages/UnControlled";
import MultiCount from "./pages/MultiCount";
import AdvanceValidation from "./pages/AdvanceValidation";
import GroupUI from "./pages/GroupUI";

// import React from 'react';



// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
// const propTypes = {};

// const defaultProps = {};

// /**
//  * 
//  */
// class App extends React.Component {
// constructor(props) {
//   super(props);

//   this.state = {
//   };
// }

//   render() {
//     return <div>
//       <h1>Class Component</h1>
//     </div>;
//   }
// }

// App.propTypes = propTypes;
// App.defaultProps = defaultProps;
// // #endregion

// export default App;






export default function App() {
  const [theme, setTheme] = useState("black");
  return (
    <>
      {/* <Navbar /> */}
      {/* <StudentInfo name={"Chetan"} age={24} address={"Dombivali"} course={"MERN STACK"} />
      <StudentInfo name={"Rohan"} age={24} address={"Dombivali"} course={"MERN STACK"} />
      <StudentInfo name={"Latika"} age={24} address={"Dombivali"} course={"MERN STACK"}
        skills={{ frontend: "react", backend: "node" }}
      /> */}
      {/* <Conditional/>
      <Events/> */}
      {/* <ConditionalDemo />
      <Lists />
      <EffectsDemo /> */}
      {/* <Forms/> */}
      {/* <UnControlled/> */}
      <ThemeContext value={{theme,setTheme}}>
        {/* <button style={{backgroundColor:theme}} onClick={() => 
          setTheme(theme === "black" ? "white" : "black")}>
          click here {theme}
        </button> */}
        {/* <BasicValidation/> */}
        {/* <MultiCount/> */}
      </ThemeContext>
      {/* <AdvanceValidation/> */}
      <GroupUI/>
    </>

  )
}

