import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'

const Post = () => {
    const [apiData, setApiData] = useState([])
    const [addInput, setAddInput] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(10)

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = apiData.slice(firstPostIndex,lastPostIndex)


    const apiEndpoint = "https://jsonplaceholder.typicode.com/posts"
    useEffect(() => {
        const getPost = async () => {
            const Data = await axios.get(apiEndpoint)
            setApiData(Data.data)
        }
        getPost()
    }, [])

    const addPost = async () => {
        const post = { title: addInput, body: 'New',id: '0'}
        await axios.post(apiEndpoint, post)
        setApiData([post, ...apiData])
    }

    const handleUpdate = async (post) => {
        post.title = 'edit done'
        await axios.put(apiEndpoint + '/' + post.id)
        const postClone = [...apiData]
        const index = postClone.indexOf(post)
        postClone[index] = { ...post }
        setApiData(postClone)
    }

    const handleDelet = async (post) => {
        await axios.delete(apiEndpoint + '/' + post.id + post)
        setApiData(apiData.filter((p) => p.id !== post.id))
    }
    return (
        <div className="container">
            <h2 className="text-center"> Total Post {apiData.length}</h2>
            <div className=" d-flex justify-content-center align-items-center">
            <input type="text" value={addInput} onChange={e => setAddInput(e.target.value)} />
            <button class="btn btn-success" onClick={addPost}>Add POST</button>
            </div>
            
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>edit</th>
                        <th>delet</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPost.map(post =>
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td><button class="btn btn-primary" onClick={() => handleUpdate(post)}>edit</button></td>
                            <td><button class="btn btn-danger" onClick={() => handleDelet(post)}>delet</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination totalPost={apiData.length} postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}/>
        </div>
    )
}

export default Post
