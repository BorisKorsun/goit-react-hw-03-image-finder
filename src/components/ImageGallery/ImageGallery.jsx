// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import API from "API";
import ImageGalleryItem from './ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const service = new API();

class ImageGallery extends Component {
    state = {
        gallery: [],
    };

    componentDidUpdate(prevProps, prevState) {
        const prevQuery  = prevProps.query;
        const query = this.props;

        const prevPage = prevProps.page;
        const page = this.props.page;

        if (prevQuery !== query) {
            return service.getQueryImages(query).then(({ data: { hits } }) => {
                this.setState({
                    gallery: [...hits]
                })
            });
        };

        if (page  >= prevPage) {
            return console.log('сторінка збільшилась')
        }
    };

    render() {
        const { gallery } = this.state;
        const { query } = this.props

        return (
            <Gallery>
                {gallery.map(({id, webformatURL}) => {
                    return (
                        <ImageGalleryItem 
                        key={id}
                        url={webformatURL}
                        query={query}
                        />
                    )
                })}
            </Gallery>
        )
    }
};

export default ImageGallery;