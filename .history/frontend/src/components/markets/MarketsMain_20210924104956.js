import React, { Component } from "react";
import { getMarketsList } from "../utils";
import ColumnView from "../ColumnView";

class MarketsMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objects: [],
        };
    }
    
    // fetch list of supermarkets and update status
    componentDidMount() {
        getMarketsList((e) => this.setState({ objects: e }));
    }

    getObjects() {
        return [
            { name: "name", img: "", description: "description" },
            { name: "name", img: "", description: "description" },
            { name: "name", img: "", description: "description" },
            { name: "name", img: "", description: "description" },
            { name: "name", img: "", description: "description" },
            { name: "name", img: "", description: "description" },
            { name: "name", img: "", description: "description" },
        ];

        // return (
        //     <ul>
        //         {this.state.objects &&
        //             this.state.objects.map((item, ind) => {
        //                 return (
        //                     <li key={ind}>
        //                         <div class="card">
        //                             <div class="card-image">
        //                                 <figure class="image is-4by3">
        //                                     <img
        //                                         src={item.img}
        //                                         alt={`${item.name} image`}
        //                                     />
        //                                 </figure>
        //                             </div>
        //                             <div class="card-content">
        //                                 <div class="media">
        //                                     <div class="media-content">
        //                                         {item.name}
        //                                     </div>
        //                                 </div>

        //                                 <div class="content">
        //                                     {item.description}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </li>
        //                 );
        //             })}
        //     </ul>
        // );
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="has-text-primary is-size-1">
                        Supermakets List
                    </h1>
                    <ColumnView cols={4} objects={this.state.objects} />
                </div>
                <div className="section"></div>
            </React.Fragment>
        );
    }
}

export default MarketsMain;
