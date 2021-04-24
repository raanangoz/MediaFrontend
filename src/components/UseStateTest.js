import React, {useState, useEffect} from 'react';


function UseStateTest(){
    const [fib,fibChanger] = useState(1)

    function initializeFib(){
        fibChanger (prevFib => 2)
    }
return(
    <>
        {fib == 2?initializeFib():fib}
    </>
)
}

export default UseStateTest;