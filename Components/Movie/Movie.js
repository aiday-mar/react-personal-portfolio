import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieService from '../../Services/MovieService';

export default class Movies extends Component {

    constructor() {
        super();

        // initial movies as initiaé empty array
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ movies: MovieService.getMovies() }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieList movies={this.state.movies} />
                    </div>
                </div>
            </div>
        );
    }
}