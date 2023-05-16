const ImageGalleryItem = ({url, query}) => {
    return (
    <li className="gallery-item">
        <img src={url} alt={query} />
    </li>
    )
};

export default ImageGalleryItem;