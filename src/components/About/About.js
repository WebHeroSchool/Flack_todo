import React from 'react';
import styles from './About.module.css';
import { Octokit } from '@octokit/rest';
import Preloader from '../Preloader/Preloader';
import Avatar from '@material-ui/core/Avatar';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    loadFailure: false,
    userInfo: {},
    userLogin: 'Nataly815'
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: this.state.userLogin
    })
      .then(({ data }) => 
        this.setState({
          repoList: data,
          isLoading: false
      }))
      .catch(({ err }) => 
        this.setState({
          loadFailure: true,
          isLoading: false,
        }))
    
    octokit.users.getByUsername({
      username: this.state.userLogin
    })
      .then(({ data }) => 
        this.setState({
          userInfo: data,
          isLoading: false
        }))
      .catch((err) => 
        this.setState({
          loadFailure: true,
          isLoading: false,
        }))
  }
  
  render() {
    const { isLoading, repoList, userInfo, loadFailure } = this.state;

    return (
    <>
    { isLoading ? <Preloader /> : loadFailure ? <h3><ErrorOutlineIcon /> Не удалось загрузить данные </h3> : 
    <div>
      <h1 className={styles.title}>Обо мне</h1>
      <Avatar alt="Remy Sharp" src={userInfo.avatar_url} />
      <p>Моё имя: <span className={styles.info}> {userInfo.name}</span></p>
      <p>Моя биография: <span className={styles.info}> {userInfo.bio}</span></p>
      <p>Мой логин на GitHub: <span className={styles.info}> <a href={userInfo.html_url}>{userInfo.login}</a></span></p>
      <h2>Мои репозитории:</h2>
      <ol>
        {repoList.map(repo => (<li key={repo.id}>
          <a href={repo.html_url} target="_blank">{repo.name}</a>
          </li>))}
      </ol>
    </div>
    }
    </>
    );
  }
}

export default About;