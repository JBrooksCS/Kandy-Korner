import React, { Component } from 'react'


class CandyList extends Component {
    render() {
        return (
            <section className="candy-list">
            {
                this.props.CandyList.map(candy =>
                    <div key={candy.id}>
                        {candy.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default CandyList