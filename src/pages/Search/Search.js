import React from "react";
import { Link } from "react-router-dom";
import PostDetail from "../../components/PostDetail";
import styles from './Search.module.css'

//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");
  // We defined the searching url using q like /search?q=${query}, so it'll take the string after the q

  const {documents: posts } = useFetchDocuments("posts", search)
  return (
    <div className={styles.search_container}>
      <h1>Search</h1>
      <div>
          {posts && posts.length === 0 && (
              <div className={styles.noposts}>
                <p>Not found any post</p>
                <Link to="/" className="btn btn-dark">Back to Home</Link>
              </div>
          )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
