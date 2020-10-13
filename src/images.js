import React, { Component, useEffect, useState } from 'react';
import Image1 from './img1.jpg';

// class Image extends Component{
//     constructor(props){
//         super(props)
//         this.state = {intervel:null}
//     }
// componentDidMount(){
//     console.log("image component mounte")
//     this.setState({
//         intervel:setInterval(()=>{
//             console.log(Date());
//         },1000)
//     })
// }
// componentWillUnmount(){
//     console.log("image component Unmounte");
//     clearInterval(this.state.intervel);
// }
//     render(){
//         return(
//             <img  src={Image1} alt="image 1"/>
//         )
//     }
// }


const Image = () => {
    // const [datenow, setDateNow] = useState('');
    useEffect(() => {
        console.log("image component mounte");
        const intervel =setInterval(() => {
                console.log(Date());
            }, 1000);

        return () => {
            clearInterval(intervel);
            console.log('image unmount');
            
        }

    }, [])

    return (
        <>
            {console.log("image component render")}
            <img src={Image1} alt="image 1" />
        </>
    )
}

export default Image