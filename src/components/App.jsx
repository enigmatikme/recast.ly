var searchYT = function(text){
    var Option = {
    key: window.YOUTUBE_API_KEY,
    query: text,
    max: 10
    };
  return searchYouTube(Option,(val)=>val).items;
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
      currentlyPlaying: this.props.videos[1]
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleVideoChange = this.handleVideoChange.bind(this);
  }

handleFilterTextChange(filterText) {
  // console.log(filterText);
  //   this.setState({
  //     videos: searchYT(filterText.target.value)
  //   });
    console.log(filterText.target)
    // console.log(searchYT(filterText.target.value))

}


handleVideoChange(currentlyPlaying) {
  this.setState({
    currentlyPlaying: currentlyPlaying
  })
}

render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search
              filterText={this.state.filterText}
              onFilterTextChange={this.handleFilterTextChange} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer 
            video={this.state.currentlyPlaying}/>
          </div>
          <div className="col-md-5">
            <VideoList 
            videos={this.state.videos}
            onVideoChange={this.handleVideoChange}/>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

window.App = App;



// Initialize the state of App to keep track of all the videos in the video list and the current video in the player.
// Pass this state down as props to its children components. Continue to use the example data.
// Make it so that when the title of a VideoListEntry is clicked, that video is displayed in the player. Do not add state to any of the functional components.
// Make sure all the active tests for App are passing. You can open the tests with npm test
