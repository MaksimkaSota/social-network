import { setPost, addPost  } from '../../../../../redux/actions/profile';
import { Posts } from './Posts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  posts: state.profile.posts,
  postText: state.profile.postText
});
const mapDispatchToProps = {setPost, addPost};

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
