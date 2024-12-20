import React, { Component } from 'react'

export class Looping extends Component {
    render() {

        const array = ['first', 'second', 'third'];
        const object = {
            first: 1,
            second: 2,
            third: 3
        }
        return (
            <div>
                <section>
                    <h1>Array</h1>
                    <ul>
                        {array.map(i => (
                            <li key={i}>{i}</li>
                        ))}
                    </ul>
                    <h1>Object</h1>
                    <ul>
                        {Object.keys(object).map(i => (
                            <li key={i}>
                                <strong>{i}: </strong>
                                {object[i]}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        )
    }
}

export default Looping
