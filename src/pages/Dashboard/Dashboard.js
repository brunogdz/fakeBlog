import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

// hooks

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  // posts from user
  const {documents: posts, loading} = useFetchDocuments("posts", null, uid);

  return (
    <div>
      <h1>Dashboard </h1>
      <p>Manager your posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Not found any posts</p>
          <Link to="/posts/create" className="btn"  >Create your post</Link>
          </div>
      ) : (
        <div>
          <p>Your posts</p>
          </div>
      )}

      {posts && posts.map((post) => (
        <h3>{post.title}</h3>
      ))}
    </div>
  );
};

export default Dashboard;
