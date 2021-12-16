import React from 'react';

class AnimalsEdit extends React.Component{
    constructor(props){
        super(props);
        let id = window.location.href.split('=')[1]
        this.state = {}
    }

    render (){
        return(
            <div> This is the Dog edit component</div>
        )
    }
}

export default AnimalsEdit;