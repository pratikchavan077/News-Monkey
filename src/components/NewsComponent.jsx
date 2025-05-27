import React from 'react'

const NewsComponent = ({ title, desc, imgUrl, newsurl, author, date, source }) => {
    return (
        <div className='my-3'>
            <div className="card">
                <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0}}>
                <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={imgUrl?imgUrl:'https://g.foolcdn.com/editorial/images/806572/gettyimages-1773543830.jpg'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.length > 45 ? `${title.substring(0, 45)}...` : title}</h5>
                    <p className="card-text">{desc.length > 88 ? `${desc.substring(0, 88)}...` : desc}</p>
                    <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsComponent