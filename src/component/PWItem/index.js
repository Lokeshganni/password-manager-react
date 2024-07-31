import './index.css'

// const colorsList = [
//   '#f59e0b',
//   '#10b981',
//   '#f97316',
//   '#14b8a6',
//   '#b91c1c',
//   '#0ea5e9',
//   '#64748b',
// ]

const PWItem = ({obj, onClickDeletePW, isChecked}) => {
  const {website, userName, pw, id} = obj

  return (
    <li className="pw-obj-li-container">
      <div className="initial-and-pw-details-container">
        <h1 className="website-initial">{website[0].toUpperCase()}</h1>
        <div className="pw-obj-container">
          <p className="website-para">{website}</p>
          <p className="user-name-para">{userName}</p>
          {isChecked ? (
            <p className="password-para">{pw}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-icon"
            />
          )}
        </div>
      </div>
      <button
        data-testid="delete"
        type="button"
        onClick={() => onClickDeletePW(id)}
        className="delete-icon-container"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default PWItem
