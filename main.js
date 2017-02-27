const Content = ({projectURL, projectImage, projectDesc, projectName})=> (
      <div className="col-xs-12 col-md-4 col-sm-6 col-lg-3">
          <div className="thumbnail">
            <a href={projectURL} target="_blank">
              <img src={projectImage} alt={projectName}/>
              <div className="caption">
                <h3>{projectName}</h3>
                <p>{projectDesc}</p>
              </div>
            </a>
          </div>
      </div>
    );

class ContentManager extends React.Component {
  render(){
    let list = this.props.projectList.map((project)=>{
      return (
        <Content {...project} />
      );
    });
    
    return (
      <div id="portfolio" className="row">
         {list}
      </div>
    );
  }
};

//const IMAGE_URL = "https://raw.githubusercontent.com/moigithub/portfolio/master/";
const IMAGE_URL = "./img/";

const  projects = [
  {
    projectName  : "Bar chart",
    projectDesc  : "bar chart using D3.js",
    projectImage : IMAGE_URL+"d3barchart.png",
    projectURL   : "#"
  },
  {
    projectName  : "Meteorites chart",
    projectDesc  : "Meteorites chart using D3.js",
    projectImage : IMAGE_URL+"d3meteoriteschart.png",
    projectURL   : "#"
  },
  {
    projectName  : "Dungeon game",
    projectDesc  : "Beat all levels",
    projectImage : IMAGE_URL+"dungeonGame.png",
    projectURL   : "#"
  },
  {
    projectName  : "Game of life",
    projectDesc  : "Cellular automatation test",
    projectImage : IMAGE_URL+"gameoflife.png",
    projectURL   : "#"
  },
  {
    projectName  : "Twitch TV",
    projectDesc  : "Check who is broadcasting",
    projectImage : IMAGE_URL+"twitchtv-angular.png",
    projectURL   : "#"
  },
  {
    projectName  : "NightLife",
    projectDesc  : "Search and Keep track the bars i planning to go near my location.",
    projectImage : IMAGE_URL+"nightlife.jpg",
    projectURL   : "http://beverage.herokuapp.com/"
  },
  {
    projectName  : "Stock Market Chart",
    projectDesc  : "Manage the market statistics.",
    projectImage : IMAGE_URL+"stockchart.png",
    projectURL   : "http://marketstats.herokuapp.com/"
  },
  {
    projectName  : "Simon game",
    projectDesc  : "Beat all levels, how far can u go ?",
    projectImage : IMAGE_URL+"simon.png",
    projectURL   : "http://codepen.io/MMan/full/OVKrZJ/"
  },
  {
    projectName  : "WikiPedia search",
    projectDesc  : "Search data using wikipedia",
    projectImage : IMAGE_URL+"wikipedia.png",
    projectURL   : "http://codepen.io/MMan/full/OVKrZJ/"
  },
  {
    projectName  : "Vote poll",
    projectDesc  : "Manage your polls, and vote.",
    projectImage : IMAGE_URL+"votepoll.png",
    projectURL   : "http://voteplox.herokuapp.com/"
  },
  {
    projectName  : "Wheater App",
    projectDesc  : "Shows your local weather temperature, with a dynamic background image",
    projectImage : IMAGE_URL+"weather.jpg",
    projectURL   : "http://codepen.io/MMan/full/OVOmbP/"
  },
  {
    projectName  : "Wheater App (using angular)",
    projectDesc  : "Shows your local weather temperature, with a dynamic background image",
    projectImage : IMAGE_URL+"weather-angular.jpg",
    projectURL   : "http://codepen.io/MMan/full/OVOmbP/"
  }
];

        
ReactDOM.render(<ContentManager projectList = {projects}/>, document.getElementById("content"));



        
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
          
  
  $( window ).scroll(function() {
    var top = $(window).scrollTop();
    console.log(top);
    $(".navbar-nav li").removeClass("active");
    if (top< 400) {
      $("#menuabout").addClass("active");
    }
    else if (top>= 400) {
      $("#menuportfolio").addClass("active");
    }
  });
  
});