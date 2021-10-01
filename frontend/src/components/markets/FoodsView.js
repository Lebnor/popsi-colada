import React, { Component } from 'react';
import withSearch from '../cd_manager/Form/withSearch'
import ColumnView from './ColumnView';
import FoodCard from './FoodCard';

class FoodsView extends Component {
    render() {
        return (
            <div>
                <ColumnView 
                
                cols={4}
                objects={this.props.objects.map(item=>{
                    return <FoodCard food={item}/>
            })}
                />
            </div>
        );
    }
}

export default withSearch(FoodsView, '/api/foods/', {img: ''});