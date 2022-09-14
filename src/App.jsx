import { useState } from 'react'
import './App.css'
import React from 'react'
import Form from './components/Form'
import CardList from './components/CardList'

function App() {

  class Main extends React.Component {
    state = {
      profiles: [],
    };
    
    addNewProfile = (profile) => {
      let arr = this.state.profiles;
      arr.push({name: profile.name, repos: profile.public_repos, srcImg: profile.avatar_url})
      this.setState({profiles: arr});
    };
    
    //OTHER WAY TO ADD ADDNEWPROFILE
    /*
      addNewProfile = (profile) => {
      this.setState(prevState => ({
        profiles: [...prevState.profiles, profile],
      }));
    };
    */
    
    render() {
      return (
        <div className="MainDiv">
          <h1 className="title">{this.props.title}</h1>
          <Form onSubmit={this.addNewProfile}/>
          <CardList list={this.state.profiles} />
        </div>
      );
    }
  }
  return (
    <div className="App">
      <Main title="GitHub Cards"/>
    </div>
  )
}

export default App
