import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './actions'

function Posts() {
    const  dispatch = useDispatch()
    const state = useSelector(state => state)
    const renderPosts = ()=>{
        if(state.loading){
            return <h1>Is loading !!!!</h1>
        }
        else{
            return  state.items.map( (post)=>(
                <li key={post.id}>{post.title}</li>
            ))
        }
    }
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    return (
        <div>
            <h4>
                {renderPosts()}
                {/* {
                    posts.map( (post)=>(
                        <li key={post.id}>{post.title}</li>
                    ))
                } */}
            </h4>
        </div>
    )
}

export default Posts
