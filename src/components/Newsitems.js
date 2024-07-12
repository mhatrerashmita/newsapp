import React, { Component } from 'react'

export class Newsitems extends Component {
  render(){

  let {title,description,imageUrl ,newsurl,author,publishedAt,source}=this.props
   
    return (
       
      <div className='container my-4'>
       
      <div className="card" >
        <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0",color:"white" }}>
      <span className="rounded-pill bg-danger"> {source}</span>
      </div>
  <img src={!imageUrl?"":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}....</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small class="text-muted"> By {!author?"Unkown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
    <a href={newsurl} target="blank" className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
     
    )
  }
}

export default Newsitems
