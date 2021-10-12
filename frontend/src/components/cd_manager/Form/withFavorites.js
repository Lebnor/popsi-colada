import React, { Component } from "react";

const withFavorites = (WrappedComponent) => {
    class WithFavorites extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                favorites: [],
            };
        }

        isFavorite(id) {
            return favorites.indexOf(id) !== -1;
        }

        addFavorite(id) {
            this.setState({ favorites: [...this.state.favorites, id] });
        }

        removeFavorite(id) {
            const idToRemove = this.state.favorites.indexOf(id);
            if (idToRemove > -1) {
                this.setState({
                    favorites: this.state.favorites.splice(idToRemove, 1),
                });
            }
        }

        componentDidMount() {
            fetch("/api/favorites")
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ favorites: data });
                })
                .catch(this.setState({ favorites: ['3fb7a7f9-48ce-4a7d-ab56-dc300f318596'] }));
        }

        render() {
            return (
                <WrappedComponent
                    isFavorite={(id) => this.isFavorite(id)}
                    favorites={this.state.favorites}
                    {...this.props}
                />
            );
        }
    }

    return WithFavorites;
};
export default withFavorites;
