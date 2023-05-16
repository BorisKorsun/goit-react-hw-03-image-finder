// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import API from "API";
import ImageGalleryItem from './ImageGalleryItem';

const service = new API();

class ImageGallery extends Component {
    state = {
        gallery: [],
    };

    componentDidUpdate(prevProps, prevState) {
        const prevQuery  = prevProps['query'];
        const query = this.props['query'];

        if (prevQuery !== query) {
            console.log('query поменялось');
            return service.getQueryImages(query).then(({ data: { hits } }) => {
                this.setState({
                    gallery: [...hits]
                })
            });
        }
        console.log('query все та же')
    };

    render() {
        const { gallery } = this.state;
        const { query } = this.props

        return (
            <ul className="gallery">
                {gallery.map(({id, webformatURL}) => {
                    return (
                        <ImageGalleryItem 
                        key={id}
                        url={webformatURL}
                        query={query}
                        />
                    )
                })}
            </ul>
        )
    }
};

export default ImageGallery;