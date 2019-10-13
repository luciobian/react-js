import { BLOG_POST_LIST_ADD, BLOG_POST_LIST } from "../actions/actions";

export default (state = {
    posts: null
}, action) => {

    switch (action.key) {
        case BLOG_POST_LIST:
            return {
                ...state,
                posts: action.data
            };
        case BLOG_POST_LIST_ADD:
            return {
                ...state,
                posts: state.posts ? state.posts.concatenate(action.data) : state.posts
            };
        default:
            break;
    }

     
} ;