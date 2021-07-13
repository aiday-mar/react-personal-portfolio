import React, { Component } from 'react';
import Movies from './Movie/Movie';

export default class ProjectTiles extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards'
        };
    }

    render() {
        return (
            <div>
                <div className="mt-5">
                    <Movies />
                </div>
            </div>
        );
    }
}