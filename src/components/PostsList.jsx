import Post from "./Post";
import NewPost from "./NewPost";
import classes from './PostsList.module.css'

function PostsList(){
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Lianne" body="React.js is Awesome!" />
        <Post author="Sandy" body="Check out the full course!" />
      </ul>
    </>
  );
}
export default PostsList;