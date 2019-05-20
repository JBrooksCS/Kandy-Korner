import React, { Component } from 'react'




class CandyList extends Component {

    

    render() {
        let ofType = " - Type of Candy:  "
        return (
            <section className="candy-list">
            {
                this.props.candies.map(candy =>
                    <div key={candy.id}>
                        {candy.name}
                        {ofType}
                        {
                            this.props.candyTypes.find(candyTYPE => candyTYPE.id === candy.typeId
                            ).type
                        }
                    </div>
                )
            }
            </section>
        )
    }
}

export default CandyList