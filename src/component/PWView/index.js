import PWItem from '../PWItem'
import './index.css'

const PWView = props => {
  const {
    pwList,
    onClickDeletePW,
    getSearchInputTxt,
    isChecked,
    toggleCheckBox,
  } = props
  return (
    <div className="pw-view-main-container">
      <div className="pw-count-and-search-container">
        <div className="pw-count-container">
          <h1 className="your-pw-txt">Your Passwords</h1>
          <p className="pw-count-para">{pwList.length}</p>
        </div>
        <div className="search-field-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
            className="search-icon"
          />
          <input
            onChange={event => getSearchInputTxt(event)}
            type="search"
            className="search-field"
          />
        </div>
      </div>
      <hr className="hr-line" />
      <div className="show-pw-main-container">
        <div className="check-box-container">
          <input
            checked={isChecked}
            id="checkBox"
            type="checkbox"
            className="check-box-field"
            onClick={() => toggleCheckBox()}
          />
          <label htmlFor="checkBox" className="show-pw-para">
            Show Passwords
          </label>
        </div>
        {pwList.length === 0 ? (
          <div className="no-pw-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="no-pw-img"
            />
            <p className="no-pw-para">No Passwords</p>
          </div>
        ) : (
          <ul className="pw-list-ul-container">
            {pwList.map(each => (
              <PWItem
                isChecked={isChecked}
                onClickDeletePW={onClickDeletePW}
                key={each.id}
                obj={each}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default PWView
