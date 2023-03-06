import './index.css'

const ThumbnailItem = props => {
  const {items, onThumbnailClick, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = items

  const onThumbnail = () => {
    onThumbnailClick(id)
  }

  const activeClassName = isActive ? 'active-id' : ''

  return (
    <li className="thumbnail-list">
      <button type="button" className="btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onThumbnail}
          className={`thumbnail ${activeClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
