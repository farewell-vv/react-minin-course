import React from "react";

export const Repos = ({repos}) => (
    <div>
        {repos.map(repo => (
            <div className="card mb-3" key={repo.id}>
                <div className="card-body">
                    <h2>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer">{repo.name}
                        </a>
                    </h2>
                </div>
            </div>
        ))}
    </div>
)