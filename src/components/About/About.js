import React, {Fragment}  from 'react';
import styles from './About.module.css';
import { Octokit } from '@octokit/rest';
import Preloader from '../Preloader/Preloader';
import git from './img/github-logo.png';
import vk from './img/vk-social-logotype.png';
import linkedin from './img/linkedin.png';
import facebook from './img/facebook-logo-button.png';
import mail from './img/mail.png';
import ErrorImage from './img/error.png';
import EmptyImage from './img/emptyImage.png';
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
                isLoading: false,
                error: err
        }))
    
    octokit.users.getByUsername({
      username: this.state.userLogin
    })
      .then(({ data }) => 
        this.setState({
          userInfo: data,
          isLoading: false,
          isEmpty: false
        }))
  }

  render() {
    const { isLoading, repoList, userInfo, loadFailure, loadSuccess, lang, error } = this.state;

    return (
      <React.Fragment>
        { isLoading ? <Preloader /> :
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
          </div>}
          <hr></hr>
        {!isLoading &&
          <div className={styles.repos}>
            {!loadSuccess ? <><h3> <EmptyImage /> Репозитории отсутствуют </h3>
            <p> Добавьте как минимум один репозиторий на <a href='https://github.com' target='_blank'>github.com</a></p></> :
            <div className={styles.fail}>
            {!loadFailure ? <><h3><ErrorImage /> Что-то пошло не так... + {error.message}</h3>
            <p> Попробуйте <a href='#' target='_blank'> загрузить </a> еще раз</p></> :
            <>
              <h2>Мои репозитории:</h2>
              <ul>
              {repoList.map(repo => (<li className={styles.repoItem} key={repo.id}>
                <a className={styles.repo} href={repo.html_url} target="_blank">{repo.name}</a>
                <p>
                  <span className={
                    classnames({
                      [styles.lang]: true,
                      [styles.html]: repo.language === 'HTML',
                      [styles.css]: repo.language === 'CSS',
                      [styles.js]: repo.language === 'JavaScript',
                    })
                  }>{repo.language}</span>
                  <span className={styles.forks}>{repo.forks_count}</span>
                  <span>Updated on {repo.updated_at}</span>
                </p>
                </li>))}
            </ul>
            </>}
            </div>
            }
        </div>}
      </React.Fragment>
    );
  }
}

export default About;