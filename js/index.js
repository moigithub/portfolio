"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function Content(_ref) {
  var projectURL = _ref.projectURL;
  var projectImage = _ref.projectImage;
  var projectDesc = _ref.projectDesc;
  var projectName = _ref.projectName;
  return React.createElement(
    "div",
    { className: "col-xs-12 col-md-4 col-sm-6 col-lg-3" },
    React.createElement(
      "div",
      { className: "thumbnail" },
      React.createElement(
        "a",
        { href: projectURL, target: "_blank" },
        React.createElement("img", { src: projectImage, alt: projectName }),
        React.createElement(
          "div",
          { className: "caption" },
          React.createElement(
            "h3",
            null,
            projectName
          ),
          React.createElement(
            "p",
            null,
            projectDesc
          )
        )
      )
    )
  );
};

var ContentManager = function (_React$Component) {
  _inherits(ContentManager, _React$Component);

  function ContentManager() {
    _classCallCheck(this, ContentManager);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ContentManager.prototype.render = function render() {
    var list = this.props.projectList.map(function (project) {
      return React.createElement(Content, project);
    });

    return React.createElement(
      "div",
      { id: "portfolio", className: "row" },
      list
    );
  };

  return ContentManager;
}(React.Component);

;

//const IMAGE_URL = "https://raw.githubusercontent.com/moigithub/portfolio/master/";
const IMAGE_URL = "./img/";

const  projects = [
  {
    projectName  : "Bar chart",
    projectDesc  : "bar chart using D3.js",
    projectImage : IMAGE_URL+"d3barchart.png",
    projectURL   : "http://codepen.io/MMan/full/bpdJPa"
  },
  {
    projectName  : "Meteorites chart",
    projectDesc  : "Meteorites chart using D3.js",
    projectImage : IMAGE_URL+"d3meteoriteschart.png",
    projectURL   : "http://codepen.io/MMan/full/yOOLwY"
  },
  {
    projectName  : "Dungeon game",
    projectDesc  : "Beat all levels",
    projectImage : IMAGE_URL+"dungeonGame.png",
    projectURL   : "http://codepen.io/MMan/full/WrLERd"
  },
  {
    projectName  : "Game of life",
    projectDesc  : "Cellular automatation test",
    projectImage : IMAGE_URL+"gameoflife.png",
    projectURL   : "http://codepen.io/MMan/full/wMQJwr"
  },
  {
    projectName  : "Twitch TV",
    projectDesc  : "Check who is broadcasting",
    projectImage : IMAGE_URL+"twitchtv-angular.png",
    projectURL   : "http://codepen.io/MMan/full/Kddqpg"
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
    projectURL   : "http://codepen.io/MMan/full/bdYKQB/"
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
    projectImage : IMAGE_URL+"weather-angular.png",
    projectURL   : "http://codepen.io/MMan/full/QdQqyQ/"
  }
];


ReactDOM.render(React.createElement(ContentManager, { projectList: projects }), document.getElementById("content"));

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(window).scroll(function () {
    var top = $(window).scrollTop();
    console.log(top);
    $(".navbar-nav li").removeClass("active");
    if (top < 400) {
      $("#menuabout").addClass("active");
    } else if (top >= 400) {
      $("#menuportfolio").addClass("active");
    }
  });
});