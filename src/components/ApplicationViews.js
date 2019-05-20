import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import EmployeeList from './EmployeeList'
import CandyList from './CandyList'
import StoreList from './StoreList'

export default class ApplicationViews extends Component {

    storeArray = [
        { id: 1, name: "Candyland" },
        { id: 2, name: "Sweets & More" },
        { id: 3, name: "Sugartown" }
    ]
    employeeArray = [
        { id: 1, name: "John" },
        { id: 2, name: "Sarah" },
        { id: 3, name: "Stephanie" }
    ]
    candyTypeArray = [
        { type: "chocolate", id: 1 },
        { type: "not chocolate", id: 2 }
    ]
    candyArray = [
        { id: 1, name: "Snickers", typeId: 1 },
        { id: 2, name: "Gushers", typeId: 2 }
    ]

    state = {
        stores: this.storeArray,
        employees: this.employeeArray,
        candyType: this.candyTypeArray,
        candies: this.candyArray
    }

    render() {
        return (<React.Fragment>
            <Route exact path="/" render={(props) => {
                return <StoreList stores={this.state.stores} />
            }} />
            <Route path="/employees" render={(props) => {
                return <EmployeeList employees={this.state.employees} />
            }} />
            <Route path="/candies" render={(props) => {
                return <CandyList candies={this.state.candies} candyTypes={this.state.candyType} />
            }} />
        </React.Fragment>)
    }


}
