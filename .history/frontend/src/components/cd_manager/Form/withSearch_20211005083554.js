import React, { Component } from "react";

const withSearch = (WrappedComponent, url, props) => {
    class WithSearch extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                search: "",
                objects: [],

            }
        }

        componentDidMount() {
            fetch(url)
            .then(response => response.json())
            .then(data=> this.setState({objects: data}))
        }

        validObjects() {
            this.state.objects.map(item => {
                console.log(item.props)
                return item
            }
            );
        }

        render() {
            return <WrappedComponent 
            setSearch={search => this.setState({search: search})}
            objects={this.state.objects.map(item=>item)}
            {...props}
            {...this.props}
            />;
        }
    }
    return WithSearch;
};

export default withSearch;

