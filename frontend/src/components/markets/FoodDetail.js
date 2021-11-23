import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { retrieveFood } from "../utils";
import ColumnView from "./ColumnView";
import MarketCard from "./MarketCard";

export default function FoodDetail(props) {
    const [refr, setRefr] = useState(0);
    const location = useLocation();
    const [count, setCount] = useState(0);
    const { uuid } = useParams();
    const [object, setObject] = useState();

    useEffect(() => {
        retrieveFood(uuid, (e) => setObject(e));
    }, []);

    return (
        <>
            <div className="container mt-4">
                <h1 className="has-text-centered is-size-1 has-text-primary">Food Detail</h1>
            </div>
            <main className="container">
                <section className="section box">
                    {object && object.markets && object.markets.length > 0 && (
                        <>
                            <h1 className="has-text-center has-text-info is-size-3">
                                This item can be bought from the following
                                markets:
                            </h1>

                            <ColumnView
                                cols={4}
                                objects={object.markets.map((market) => (
                                    <MarketCard {...market} />
                                ))}
                            />
                        </>
                    )}
                </section>
            </main>
        </>
    );
}
