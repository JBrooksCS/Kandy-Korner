import React, { Component } from 'react'
import EmployeeList from './EmployeeList'
import CandyList from './CandyList'
import StoreList from './StoreList'
export default class KandyKorner extends Component {

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

    state = { //This shouldnt be like this according to the directions
        stores: this.storeArray,
        employees: this.employeeArray,
        candyType: this.candyTypeArray,
        candies: this.candyArray
    }

    render() {
        return (<div>
            <h2>Stores</h2>
            <StoreList StoreList={this.state.stores} />
            <h2>Employees</h2>
            <EmployeeList EmployeeList={this.state.employees} />
            <h2>Candies</h2>
            <CandyList CandyList={this.state.candies} />

        </div>
        )
    }


}
