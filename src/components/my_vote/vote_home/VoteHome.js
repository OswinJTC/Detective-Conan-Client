import React from 'react';
import { Link } from 'react-router-dom';

const VoteHome = () => {
  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <h5 className="text-center" style={{ marginBottom: "20px" }}>電影</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/Top5Movies">最佳劇場版 top 5</Link>
          </li>
          <li className="list-group-item">
            <Link to="/Top3Movies">最爛劇場版 top 3</Link>
          </li>
          <li className="list-group-item">
            <Link to="/suspense-movies">最懸疑</Link>
          </li>
          <li className="list-group-item">
            <Link to="/exciting-movies">最刺激</Link>
          </li>
          <li className="list-group-item">
            <Link to="/artistic-movies">最有藝術</Link>
          </li>
        </ul>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h5 className="text-center" style={{ marginBottom: "20px" }}>角色</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/favorite-characters">喜歡的角色</Link>
          </li>
          <li className="list-group-item">
            <Link to="/hated-characters">討厭的角色</Link>
          </li>
          <li className="list-group-item">
            <Link to="/best-couples">最佳情侶黨</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VoteHome;

