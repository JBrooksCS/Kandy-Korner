import React, { Component } from 'react'


class StoreList extends Component {
    render() {
        return (
            <section className="store-list">
            {
                this.props.StoreList.map(store =>
                    <div key={store.id}>
                        {store.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default StoreList
