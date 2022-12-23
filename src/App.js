
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'




const App =()=> {
  const pageSize = 15;
  const [progress,setProgress]=useState(0)
  
    return (
      <div>
     <Router>

        <NavBar/>
        {/* <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> */}

      
         <Routes>
          <Route exact path='/' element={<News setProgress={setProgress}
          pageSize={pageSize}
          key="general"
          country="in"
          category="general"/>}/>
         <Route exact path="/business" element={<News setProgress={setProgress}
              //  apikey={this.apikey}
              pageSize={pageSize}
              key="Business"
              country="in"
              category="Business"
            />}/>
          <Route exact path="/Technology" element={<News setProgress={setProgress}
              //  apikey={this.apikey}
              pageSize={pageSize}
              key="Technology"
              country="in"
              category="Technology"
            />}/>
          <Route exact path="/sports" element={<News setProgress={setProgress}
              //  apikey={this.apikey}
              pageSize={pageSize}
              key="sports"
              country="in"
              category="sports"
            />}/>
          <Route exact path="/science" element={<News setProgress={setProgress}
              //  apikey={this.apikey}
              pageSize={pageSize}
              key="science"
              country="in"
              category="science"
            />}/>
          <Route exact path="/Health" element={<News setProgress={setProgress}
              //  apikey={this.apikey}
              pageSize={pageSize}
              key="Health"
              country="in"
              category="Health"
            />}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress}
              //  apikey={this.apikey}
              pageSize={pageSize}
              key="entertainment"
              country="in"
              category="entertainment"
            />}/>
        </Routes>   
        </Router>
      </div>
     
     
    )

}

export default App;


