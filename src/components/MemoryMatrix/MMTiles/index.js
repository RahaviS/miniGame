import './index.css'

const MMTiles = props => {
  const {id, isActive, onClickTile, disabled} = props
  const {isClicked, boardSize, copyOfArray} = props
  const activeClassName = isActive && 'active'
  const dataTestIdValue = isActive ? 'highlighted' : 'notHighlighted'
  const emptyString = ''
  let bgColorClassName = ''
  if (isClicked) {
    bgColorClassName = copyOfArray.indexOf(id) !== -1 ? 'right' : 'wrong'
  }

  const onClickEvent = () => {
    onClickTile(id)
  }

  return (
    <button
      type="button"
      className="tile-btn"
      onClick={onClickEvent}
      data-testid={dataTestIdValue}
      disabled={disabled}
    >
      <li
        className={`tile ${activeClassName} ${bgColorClassName} ${boardSize}`}
      >
        {emptyString}
      </li>
    </button>
  )
}
export default MMTiles
