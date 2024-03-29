import React, {useContext, useEffect} from "react";
import {GithubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
    const urlName = match.params.name;

    useEffect(() => {
        getUser(urlName);
        getRepos(urlName);
        //eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
    } = user;

    return (
        <div>
            <Link to="/" className="btn btn-link">На главную</Link>

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={name} style={{width: "150px"}} />
                            <h1>{name}</h1>
                            {location && <p>Местоположение: {location}</p>}
                        </div>
                        <div className="col">
                            {bio && (
                                <div>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </div>
                            )}
                            <a
                                href={html_url}
                                className="btn btn-dark"
                                target="_blank"
                                rel="noreferrer"
                            >Открыть профиль</a>
                            <ul>
                                {login && (
                                    <li><b>Username: </b>{login}</li>
                                )}
                                {company && (
                                    <li><b>Company: </b>{company}</li>
                                )}
                                {blog && (
                                    <li><b>Blog: </b>{blog}</li>
                                )}
                            </ul>

                            <div className="badge badge-primary">
                                Подписчики: {followers}
                            </div>
                            <div className="badge badge-success">
                                Подписан: {following}
                            </div>
                            <div className="badge badge-info">
                                Репозитории: {public_repos}
                            </div>
                            <div className="badge badge-dark">
                                Gists: {public_gists}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos} />
        </div>
    )
}