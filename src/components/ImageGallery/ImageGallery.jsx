import React, { Component } from 'react';

import API from "API";
import ImageGalleryItem from './ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import Button from 'components/Button';
import Modal from 'components/Modal';

const service = new API();

// "pending"
// "resolved"

class ImageGallery extends Component {
    state = {
        gallery: [],
        page: 1,
        showModal: false,
        modalCard: null,
        error: null,
        status: 'idle',
    };

    componentDidUpdate(prevProps, prevState) {
        const prevQuery  = prevProps.query;
        const query = this.props.query;

        const prevPage = prevState.page;
        const page = this.state.page;

        if (prevQuery !== query) {
            this.setState({status: "pending" })

            try {
                service.getQueryImages(query).then(({ data: { hits } }) => {
                    this.setState({
                        gallery: [...hits],
                        status: "resolved",
                    })
                })
            } catch(error) {
                Promise.rejected(
                    new Error('Oopsie, something went wrong :( Try reload the page')
                )
                this.setState({
                    error,
                    status: "rejected",
                });
            };
        };

        if (page  > prevPage) {
            this.setState({status: "pending" })

            try {
                service.getPageImages(page).then(({data: { hits }}) => {
                    return this.setState(({ gallery }) => {
                        return {
                            gallery: [...gallery, ...hits],
                            status: "resolved"
                        }
                    });
                });
            } catch(error) {
                Promise.rejected(
                    new Error('Oopsie, something went wrong :( Try reload the page')
                )
                this.setState({
                    error,
                    status: "rejected",
                });
            }
        };
    };

    toggleModal = () => {
        this.setState(({ showModal }) => {
            return {
                showModal: !showModal,
            };
        })
    }

    handleBtnClick = () => {
        this.setState(({ page }) => {
            return {
                page: page + 1,
            };
        })
    };

    handleCardClick = (e) => {
        const { gallery } = this.state
        const IMGid = Number(e.target.dataset.id);


        gallery.find((card) => {
            const { id } = card;
            if (id === IMGid) {
                this.setState({
                    modalCard: card,
                    showModal: true,
                })
            }
        })
    };

    render() {
        const { gallery, status, showModal, modalCard, error } = this.state;
        const { query } = this.props

        if (status === "pending") {
            return (
                <Loader/>
            )
        }

        if (status === "rejected") {
            return (
                <p>{error.message}</p>
            )
        }

        if (status === "resolved") {
            return (
                <>
                <Gallery>
                    {gallery.map(({ id, webformatURL }) => {
                        return (
                            <ImageGalleryItem
                            key={id}
                            url={webformatURL}
                            query={query}
                            id={id}
                            onClick={this.handleCardClick}
                            />
                        )
                    })}
                </Gallery>
                {gallery.length > 0 && (
                    <Button onBtnClick={this.handleBtnClick}/>   
                )}   
                {showModal && 
                <Modal 
                tags={modalCard.tags} 
                url={modalCard.largeImageURL}
                onClose={this.toggleModal}
                />} 
                </>
            )
        }
    }
};

export default ImageGallery;