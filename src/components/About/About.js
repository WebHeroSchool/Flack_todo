import React, {Fragment}  from 'react';
import styles from './About.module.css';
import { Octokit } from '@octokit/rest';
import Preloader from '../Preloader/Preloader';
import git from './img/github-logo.png';
import vk from './img/vk-social-logotype.png';
import linkedin from './img/linkedin.png';
import facebook from './img/facebook-logo-button.png';
import mail from './img/mail.png';
import errorImage from './img/error.png';
import emptyImage from './img/emptyImage.png'
import telegram from './img/telegram.png';
import classnames from 'classnames';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    loadFailure: false,
    userInfo: {},
    userLogin: 'Nataly815',
    loadSuccess: false,
    error: null
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: this.state.userLogin
    })
      .then(
            ({ data }) => 
              this.setState({
                repoList: data,
                isLoading: false,
                loadSuccess: true,
                loadFailure:  false
      }))
      .catch(
            (err) => 
              this.setState({
                loadFailure: true,
                loadSuccess: false,
                isLoading: false
        }))
    
    octokit.users.getByUsername({
      username: this.state.userLogin
    })
      .then(({ data }) => 
        this.setState({
          userInfo: data,
          isLoading: false,
        }))
  }

  render() {
    const { isLoading, repoList, userInfo, loadFailure, loadSuccess, lang } = this.state;

    return (
      <React.Fragment>
        <div className={styles.contacts}>
          <img className={styles.avatar} src={userInfo.avatar_url}></img>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>{userInfo.name}</h1>
            <p><span className={styles.info}> {userInfo.bio}</span></p>
            <p><span className={styles.info}> <a href='mailto:nataly815@gmail.com?subject=Dear Nataly...' target='_blank'><img src={mail}></img>nataly815@gmail.com</a></span></p>
            <p><span className={styles.info}> <a href='https://t.me/Nataly815' target='_blank'><img src={telegram}></img>+7 (925) 388-41-17</a></span></p>
            <div className={styles.icons}>
              <p><span className={styles.info}><a href={userInfo.html_url} target='_blank'><img src={git}></img></a></span></p>
              <p><span className={styles.info}><a href='https://vk.com/nataly815' target='_blank'><img src={vk}></img></a></span></p>
              <p><span className={styles.info}><a href='https://www.linkedin.com/in/nataliya-akimova' target='_blank'><img src={linkedin}></img></a></span></p>
              <p><span className={styles.info}><a href='https://www.facebook.com/Nataly815' target='_blank'><img src={facebook}></img></a></span></p>
            </div>
          </div>
        </div>
        <hr></hr>
        { isLoading ? <Preloader /> :
          <div className={styles.repos}>
            <div className={styles.main}>
            <h2 className={styles.subtitle}>Репозитории на GitHub.com:</h2>
              {loadFailure ? <><h3 className={styles.fail}> <img src={errorImage} /> <p>Что-то пошло не так... </p></h3>
                <p className={styles.fail}> Попробуйте <a href='#'> загрузить </a> еще раз</p></> : 
              <>
                {repoList.length === 0 && <>
                  <h3 className={styles.fail}><img src={emptyImage} /><p>Репозитории отсутствуют </p></h3>
                  <p> Добавьте как минимум один репозиторий на <a href='https://github.com/'> github.com </a></p></>}
                {repoList.length > 0 && <ul> {repoList.map(repo => (
                  <li className={styles.repoItem} key={repo.id}>
                    <div><a className={styles.repo} href={repo.html_url} target="_blank">{repo.name}</a></div>
                    <p className={styles.repository}>
                      <div className={
                        classnames({
                          [styles.lang]: true,
                          [styles.undef]: repo.language === null,
                          [styles.html]: repo.language === 'HTML',
                          [styles.css]: repo.language === 'CSS',
                          [styles.js]: repo.language === 'JavaScript',
                        })
                      }>{repo.language}</div>
                        <span><svg aria-label="star" class="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg><span className={styles.stars}>{repo.stargazers_count}</span></span>
                        <span><svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg><span className={styles.forks}>{repo.forks}</span></span>
                      <p>Updated on {new Date(repo.updated_at).toLocaleString('en', { day:'numeric', month:'short', year:'numeric'})}</p>
                    </p>
                  </li>))}
                </ul>}
              </>}
            </div>
          </div>}
      </React.Fragment>
    );
  }
}

export default About;