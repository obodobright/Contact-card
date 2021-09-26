import React from 'react';
import Data  from '../tours/data'
import PostList from './postList';

const postPerPage = 3
let arrayForHoldingPost = this.state.post


class Post extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            post : Data
        }
        
    }

    componentDidMount(){
        const loopWithSlice = (start,end)=>{
            const slicedPosts = Data.slice(start, end);
            arrayForHoldingPost = [...arrayForHoldingPost, ...slicedPosts]
            this.setState({
                post :  arrayForHoldingPost
            })
        }

        this.setState({
            post: loopWithSlice(0, postPerPage)
        })
    }
    render(){
        return(
            <React.Fragment>
                {this.state.post.map((post)=>(
                    <PostList key={post.id} post={post}/>
                ))}
                <button>Load More</button>
            </React.Fragment>
        )
    }
}
export default Post