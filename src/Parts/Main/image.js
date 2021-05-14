import React from "react";
import picture from '../../Assets/Images/934853.jpg'

const MainSection = () => {
  React.useEffect(() => {
    let test = document.getElementById('clickme');
    test.onclick = function clickEvent(e) {
      // e = Mouse click event.
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left; //x position within the element.
      var y = e.clientY - rect.top;  //y position within the element.
      console.log("Left : " + x + " ; Top : " + y + ".");
      
    }

  }, []);

  return(
    <img className="simpsons-images" id='clickme' src={picture}></img>
  )
}

export default MainSection;