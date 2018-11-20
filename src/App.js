import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Brazil from './Components/NewsPages/Brazil.js';
import Argentina from './Components/NewsPages/Argentina.js';
import Featured from './Components/NewsPages/Featured.js';
import France from './Components/NewsPages/France.js';
import US from './Components/NewsPages/UnitedStates.js';
import NotFound from './Components/Error/NotFound.js';
import Navigation from './Components/Toolbar/Navigation.js';

// import './App.css';
// import axios from 'axios'
// import Toolbar from './Components/Toolbar/Toolbar'
// import SideDrawer from './Components/Toolbar/SideDrawer'
// import BackDrop from './Components/Toolbar/BackDrop'
// import Loading from './Components/Loading/Loading';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader'
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';


// const NewsApiKey = '4d03ad3de22e470290ff7544d2f58613';

// class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       articles: [],
//       isLoading: true,
//       errors: null,
//       sideDrawerOpen: false,
//     };
//   }

//   backDropClickHandler = () => {
//     this.setState({ sideDrawerOpen: false });
//   }

//   drawerToggleClickHandler = () => {
//     this.setState((prevState) => {
//       return { sideDrawerOpen: !prevState.sideDrawerOpen }
//     })
//   }

//   componentDidMount() {
//     axios
//       .get("https://newsapi.org/v2/top-headlines?category=technology&pageSize=7&apiKey=" + NewsApiKey)
//       .then(res => {
//         console.log(res.data.articles)
//         this.setState({ articles: res.data.articles, isLoading: false })
//       })

//   }


//   render() {
//     let backDrop;

//     const articleMap = (articles) => {
//       let counter = 0;
//       return articles.map(article => {
//         counter++;
//         return (
//           <div className={"item" + counter} key={article.url}>
//             <Card>
//               <a href={article.url}>
//                 <CardHeader
//                   title={article.title}
//                   subheader={article.publishedAt.slice(0, 10)}
//                 />
//                 <CardMedia
//                   className="media"
//                   image={article.urlToImage ? article.urlToImage : "https://www.industry.gov.au/sites/g/files/net3906/f/August%202018/image/news-placeholder-738.png"}
//                   title={article.title}
//                 />
//                 <CardContent>
//                   <Typography component="p">
//                     {article.description ? article.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
//                   </Typography>
//                   <Typography variant="subtitle1" color="textSecondary">
//                     {article.author ? article.author : "Nando Sangenetto"}
//                   </Typography>
//                 </CardContent>
//                 </a>
//             </Card>
//           </div>
//         );
//       })
//     }

//     if (this.state.sideDrawerOpen) {
//       backDrop = <BackDrop click={this.backDropClickHandler} />
//     }
//     const { isLoading, articles } = this.state;
//     return (

//       <React.Fragment>
//         <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
//         <SideDrawer show={this.state.sideDrawerOpen} />
//         {backDrop}

//         {!isLoading ? (
//           <div className="container">
//             {articleMap(articles)}
//           </div>) : (
//             <Loading/>
//           )}
//       </React.Fragment>
//     );
//   }
// }


class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <div>
      <Navigation/>
      <Switch>
        <Route path="/" component={Featured} exact />
        <Route path="/brazil" component={Brazil}/>
        <Route path="/argentina" component={Argentina}/>
        <Route path="/france" component={France}/>
        <Route path="/us" component={US}/>
        <Route component={NotFound}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
