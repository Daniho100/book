import { useState, useEffect } from 'react'

const MyFunctionComponent = props => {
    
const [count, setCount] = useState(0);

useEffect(()=>{
    document.title = `you have clicked ${count} times`
})
return (
          <div>
            {/* here we use the getter to get the state value */}
            <p>Count the number of clicks on your page title </p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
        );
       };



// first example

       // declaring the state hooks
//     const [name, setName] = useState("Arya Stark");
//     // here we use the setter to change the content of the name state
//     const handleClick = () => setName('Tyron Lanyster')
//     return (
//       <div>
//         {/* here we use the getter to get the state value */}
//         <p>hello my name is {name}</p>
//         <button onClick={handleClick}>Click me</button>
//       </div>
//     );
//    };

export default MyFunctionComponent;