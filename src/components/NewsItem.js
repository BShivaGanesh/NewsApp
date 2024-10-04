import React  from 'react'

const NewsItem =(props)=> {
  
  
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my-3'>
          <div className="card" >
            <div style={
              {display : 'flex',
                justifyContent:'flex-end',
                position:'absolute',
                right:0
              }
            } >
          <span className=" badge rounded-pill bg-danger" style={{left: '87%',zIndex:'1'}}>{source}</span>
          </div>
              <img src={!imageUrl?"https://assets1.cbsnewsstatic.com/hub/i/r/2024/01/27/ce74b848-48f6-403d-947d-ba223f37d176/thumbnail/1200x630/c00af4d4fa1b3b9a616897b4d3f5e496/gettyimages-1354821469.jpg?v=d2d77bee90bcafa285fd6d60bd8b3612":imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By { !author ? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
              </div>
            </div>
      </div>
    )
  
}

export default NewsItem
