import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employee-list">
            {
                this.props.EmployeeList.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList