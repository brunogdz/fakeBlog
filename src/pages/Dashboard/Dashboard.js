import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

// hooks

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // posts from user
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const deleteDocument = (id) => {};

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard </h1>
      <p>Manager your posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Not found any posts</p>
          <Link to="/posts/create" className="btn">
            Create your post
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Title</span>
            <span>Actions</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    Read
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="btn btn-outline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className="btn btn-outline btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
