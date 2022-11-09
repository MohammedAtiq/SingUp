import React from 'react'

const Pagination = ({ totalPost, postPerPage, setCurrentPage, currentPage }) => {
    console.log(totalPost)
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className="container">
            <div className="ox d-flex justify-content-center ">
            {
                    pages.map((page, i) => {
                        return <button key={i} onClick={() => setCurrentPage(page)}
                            className={page === currentPage ? 'active' : ''}>{page}</button>
                    })
                }
            </div>
               
        </div>
    )
}

export default Pagination
