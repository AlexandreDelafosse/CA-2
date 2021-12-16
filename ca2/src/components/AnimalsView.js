import React from 'react';

class AnimalsView extends React.Component{
    constructor(props){
        super(props);
        let id = window.location.href.split('=')[1]
    }
    render(){
        return(
            <div>This is the animal View component</div>
        )
    }
}

export default AnimalsView;