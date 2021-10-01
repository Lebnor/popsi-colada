import React, { Component } from 'react';

const withTabs = (WrappedComponent, objects, prop) => {

    class WithTabs extends React.Component {
        constructor(props) {
            super(props);
            
        }

        render() {
            return (
                <WrappedComponent  activeItem={this.state.activeItem}/>
            )
        }
    }

    return WithTabs;
}


export default withTabs;