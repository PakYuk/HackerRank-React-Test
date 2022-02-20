import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
   let [sortBy,setSortBy] = useState('upvotes')

   function sortFunc(a,b){
      if(a[sortBy] < b[sortBy]) return 1
      if(b[sortBy] < a[sortBy]) return -1 
      else return 0;
   }

  let[ data,setArticles] = useState(articles.sort(sortFunc))

  function sortByUpvote(){
    setSortBy('upvotes')
    setArticles(data.sort(sortFunc))
  }
  function sortByRecent(){
    setSortBy('date')
    setArticles(data.sort(sortFunc))
  }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={sortByUpvote}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={sortByRecent}>Most Recent</button>
            </div>
            <Articles articles={articles}/>
        </div>
    );

}

export default App;
