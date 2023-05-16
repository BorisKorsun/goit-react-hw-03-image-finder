import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({url, query}) => {
    return (
    <GalleryItem>
        <GalleryImage src={url} alt={query} />
    </GalleryItem>
    )
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
}