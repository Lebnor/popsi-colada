import React, { Component } from "react";
import { getMarketsList } from "../utils";
import ColumnView from "../ColumnView";

class MarketsMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objects: [],
        };
        // fetch list of supermarkets
        // getMarketsList((e)=>this.setObjects(e))
    }

    setObjects(e) {
        this.setState({
            objects: e,
        });
    }

    getObjects() {
        return [
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">nice</div>
                    </div>

                    <div class="content">what a nice supermarket</div>
                </div>
            </div>,
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
                    <h1 className="has-text-primary is-size-5">
                        Supermakets List
                    </h1>
                    <ColumnView cols={4} objects={this.getObjects()} />
                </div>
            </React.Fragment>
        );
    }
}

export default MarketsMain;
