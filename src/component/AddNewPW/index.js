import './index.css'

const AddNewPw = props => {
  const {
    website,
    userName,
    pw,
    getWebsite,
    getUserName,
    getPW,
    onClickAddPW,
  } = props
  return (
    <div className="add-new-pw-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
        alt="password manager"
        className="pw-manager-img-sm"
      />
      <form
        onSubmit={event => onClickAddPW(event)}
        className="pw-manager-container"
      >
        <h1 className="add-new-pw-title">Add New Password</h1>
        <div className="input-field-main-container">
          <div className="input-field-icon-card">
            <img
              className="input-field-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
          </div>
          <div className="input-field-card">
            <input
              type="text"
              placeholder="Enter Website"
              className="input-field"
              value={website}
              onChange={event => getWebsite(event)}
            />
          </div>
        </div>
        <div className="input-field-main-container">
          <div className="input-field-icon-card">
            <img
              className="input-field-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
          </div>
          <div className="input-field-card">
            <input
              type="text"
              placeholder="Enter Username"
              className="input-field"
              value={userName}
              onChange={event => getUserName(event)}
            />
          </div>
        </div>
        <div className="input-field-main-container">
          <div className="input-field-icon-card">
            <img
              className="input-field-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
          </div>
          <div className="input-field-card">
            <input
              type="password"
              placeholder="Enter Password"
              className="input-field"
              value={pw}
              onChange={event => getPW(event)}
            />
          </div>
        </div>
        <div className="add-btn-container">
          <button className="add-btn" type="submit">
            Add
          </button>
        </div>
      </form>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt="password manager"
        className="pw-manager-img-lg"
      />
    </div>
  )
}
export default AddNewPw
