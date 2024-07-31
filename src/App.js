import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AddNewPW from './component/AddNewPW'
import PWView from './component/PWView'
import './App.css'

class App extends Component {
  state = {
    website: '',
    userName: '',
    pw: '',
    pwList: [],
    searchInput: '',
    isChecked: false,
  }

  getWebsite = event => {
    const userTxt = event.target.value
    this.setState({website: userTxt})
  }

  getUserName = event => {
    const userTxt = event.target.value
    this.setState({userName: userTxt})
  }

  getPW = event => {
    const userTxt = event.target.value
    this.setState({pw: userTxt})
  }

  onClickAddPW = event => {
    event.preventDefault()
    const {website, userName, pw} = this.state
    const newPWObj = {
      id: uuidv4(),
      website,
      userName,
      pw,
    }
    this.setState(prevState => ({
      pwList: [...prevState.pwList, newPWObj],
      website: '',
      userName: '',
      pw: '',
    }))
  }

  onClickDeletePW = id => {
    const {pwList} = this.state
    const filterPWList = pwList.filter(each => each.id !== id)
    this.setState({pwList: filterPWList})
  }

  getSearchInputTxt = event => {
    const searchedTxt = event.target.value
    this.setState({searchInput: searchedTxt})
  }

  toggleCheckBox = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  render() {
    const {website, userName, pw, pwList, searchInput, isChecked} = this.state
    const searchedList = pwList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <AddNewPW
          onClickAddPW={this.onClickAddPW}
          getPW={this.getPW}
          getUserName={this.getUserName}
          getWebsite={this.getWebsite}
          website={website}
          userName={userName}
          pw={pw}
        />
        <PWView
          toggleCheckBox={this.toggleCheckBox}
          isChecked={isChecked}
          getSearchInputTxt={this.getSearchInputTxt}
          onClickDeletePW={this.onClickDeletePW}
          pwList={searchedList}
        />
      </div>
    )
  }
}

export default App
