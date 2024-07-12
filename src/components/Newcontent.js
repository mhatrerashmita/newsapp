import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class Newcontent extends Component{
  articles= []
   static defaultProps={
    country:'in',
    pageSize:5,
    category:'general',
    totalResults:0
   }
   static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

   }
   capitalizationfristletter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
   }
  constructor(props)
  {
    super(props);
    this.state={
     articles :this.articles,
     loding:false,
     page:1
    }
    document.title=`${this.capitalizationfristletter(this.props.category)} -Newskookies`
  }
  // async updatenews(){
  //   this.props.setProgress(10)
  //   const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20931764dfc745e8b0e975508ffa048a&page=${this.props.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //   let parseData= await data.json();
  //   console.log(parseData);
  //   this.setState({articles:this.state.articles.concat(parseData.articles),
  //     totalResults: parseData.totalResults,loading : false 
  //   })
  //   this.props.setProgress(100)
  // }

  
  async componentDidMount(){
   
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20931764dfc745e8b0e975508ffa048a&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parseData= await data.json();
    console.log(parseData);
    this.setState({articles:this.state.articles.concat(parseData.articles),totalResults: parseData.totalResults,loading:false})
    // this.updatenews();
  }
  // handleprves= async ()=>{
  //   console.log("previous")
  //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20931764dfc745e8b0e975508ffa048a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //   let parseData= await data.json();
  //   console.log(parseData);
  //    this.setState({
  //     page:this.state.page - 1,
  //     articles:parseData.articles,loading:false
    
  //    })
  // //  this.setState({page:this.state.page - 1})
  // //   this.updatenews();
  //   }
  //    handlenxt= async ()=>{
  //   console.log("next")
  //   if(!( this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20931764dfc745e8b0e975508ffa048a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //   let parseData= await data.json();
  //   console.log(parseData);
  //    this.setState({
  //     page:this.state.page + 1,
  //     articles:parseData.articles,loading:false
    
  //    })}
  //   // this.setState({page:this.state.page + 1})
  //   // this.updatenews();

  // }
  fetchMoreData = async () =>{
    this.props.setProgress(10)
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20931764dfc745e8b0e975508ffa048a&page=${this.props.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
  
      let data= await fetch(url);
      this.props.setProgress(50)
      let parseData= await data.json();
      this.props.setProgress(70)
      console.log(parseData);
      this.setState({articles:this.state.articles.concat(parseData.articles),
        totalResults: parseData.totalResults,loading : false
      
      })
      this.props.setProgress(100)
  };
  render() {
    return (
      <>
     
        <h1 className='text-center'>Newskookies-Top {this.capitalizationfristletter(this.props.category)} headlines </h1>
       {/* { this.state.loading && <Spinner/>} */}
       <hr />
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >

     
       <div className='container'>
       <div className="row" >
       {this.state.articles.map((element,index) => {
         return <div className="col-md-4" key={element.url}>
         <Newsitems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>  
 
         </div> 
       })}
         {/* <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-primary " disabled={this.state.page<=1} onClick={this.handleprves}> &larr; Pervious</button>
        <button type="button" className="btn btn-primary" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handlenxt}>Next &rarr;</button>
        </div> */}
        </div>
      
      </div>
      </InfiniteScroll>
      </> 
    )
  }
}

export default Newcontent

