import React, { Component } from "react";
import ColumnView from "./ColumnView";
import FoodCard from "./FoodCard";
import withSearch from "../cd_manager/Form/withSearch";

class FoodColumnView extends Component {
    render() {
        return (
            <>
                <h1 className="is-size-3 has-text-primary">
                    Foods list{" "}
                    <small>({this.props.objects.length} found)</small>
                </h1>
                <ColumnView
                    cols={this.props.cols || 4}
                    objects={this.props.objects.map((food) => {
                        return <FoodCard {...food}></FoodCard>;
                    })}
                ></ColumnView>
            </>
        );
    }
}

export default withSearch(FoodColumnView, "/api/foods", []);
