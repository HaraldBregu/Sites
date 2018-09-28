var app = angular.module('PersonalWebSite', ['ngMaterial'])

var webAppDev = {name:'Web App Development', description:'Responsive Modern Websites and Web Apps using the best frameworks and libraries. Web Apps built entirely with MEAN stack and Javascript language.', icon:"fa fa-code fa-5x"};
var iosAppDev = {name:'iOS Development', description:'From simple to very complex mobile applications for Apple devices: iPhone, iPad. Using the last and updated open source framework to build a modern and scalable app. Developed very efficient strategies to start, continue and delivery apps.', icon:"devicon-apple-original colored"};
var backEndAppDev = {name:'Back End Development', description:'The Back-End is the software system part that manages the data generated from the Front-End. The modern NoSQL databases that are very popular last years. To be flexible and create scalable apps using NoSQL is very convenient.', icon:"fa fa-database fa-5x"};
var skills = [webAppDev, iosAppDev, backEndAppDev];

var xcode = {name:"Xcode", description:"Xcode is the IDE that contain a suite of SDK tools developed by Apple for developing applications for OS X, iOS, WhatchOS and tvOS.", image:"assets/Xcode_icon.png", icon:""}
var cocoapods = {name:"Cocoapods", description:"CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects. It has over eighteen thousand libraries and can help iOS developers build their apps fast.", image:"assets/cocoapods.png", icon:""}
var atom = {name:"Atom", description:"Atom is an open source cross platform text editor customizable that help developer build their apps in many programming languages.", image:"assets/atom.png", icon:""}
var npm = {name:"NPM", description:"npm is the package manager for JavaScript. Find, share, and reuse packages of code from hundreds of thousands of developers — and assemble them in powerful new ways.", image:"assets/npm.png", icon:""}
var robomongo = {name:"Robomongo", description:"Robomongo is a native and cross-platform MongoDB manager. Distributed as a native application, fast and snappy Robomongo uses very little of your machine resources.", image:"assets/robomongo.png", icon:""}
var postman = {name:"Postman", description:"Used by many big comapanies, Postman help to develop and test APIs faster.", image:"assets/postman.png", icon:""}
var sketch = {name:"Sketch", description:"Professional digital design for Mac. Sketch is built for modern graphic designers, and it shows in every fibre of the app. From a flexible workflow with support for Multiple Pages and Artboards.", image:"assets/sketchIcon.png", icon:""}
var slack = {name:"Slack", description:"The best real-time messaging, archiving and search for modern teams. Slack brings communication together in one place.", image:"assets/slack.png", icon:""}
var teamviewer = {name:"TeamViewer", description:"TeamViewer is a remote support, remote access, and online meeting software.", image:"assets/teamviewer.png", icon:""}
var git = {name:"GIT", description:"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.", image:"assets/gitlogo.png", icon:""}
var github = {name:"GitHub", description:"Online project hosting using Git. Includes source-code browser, in-line editing, wikis, and ticketing. Free for public open-source code.", image:"assets/github.png", icon:""}
var bitbucket = {name:"Bitbucket", description:"Bitbucket is the Git solution for professional teams. I use a lot this tool specially for private projects. While in other services you pay, here you can have many private repositories free.", image:"assets/bitbucket.png", icon:""}
var aws = {name:"Amazon Web Services", description:"Is a powerful infrastructure service provided by Amazon. It contain several useful services, almost everything you need to build your app", image:"assets/aws.png", icon:""}
var tools = [xcode, cocoapods, atom, npm, robomongo, postman, sketch, slack, teamviewer, git, github, bitbucket, aws];

var categories = [{title:"SKILLS", items:skills}, {title:"TOOLS", items:tools}];

app.controller('MainController', ['$scope', function($scope) {

  var currentTime = new Date()
  var year = currentTime.getFullYear()
  $scope.year = year;

  $scope.topTitle = "created and maintained by:"
  $scope.myName = "HARALD BREGU";

  $scope.skillTitle = "MY SKILLS";
  $scope.skills = skills;
  // $scope.skills.push(webAppDev);
  // $scope.skills.push(iosAppDev);
  // $scope.skills.push(backEndAppDev);
  // $scope.addNewDocument = function() {
  //   console.log("console log angular")
  //   $scope.skills.push(backEndAppDev);
  // }


  $scope.devToolTitleSection = "MY TOOLS"
  $scope.devTools = tools;


  $scope.categories = categories;

  // $scope.experienceTitle = "EXPERIENCES";
  // $scope.experiences = [];
  // $scope.companiesTitleSection = "COMPANIES & CONTRACTORS";
  // $scope.companies = [
  //   {name:'Bitecnology', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image:"assets/64x64.png"},
  //   {name:'Widiba', description:'Development of iOS app since 2010. An experience of 6 year in many different applications.', image:"assets/64x64.png"},
  //   {name:'Frog Design', description:'Development of iOS app since 2010. An experience of 6 year in many different applications.', image:"assets/64x64.png"},
  //   {name:'DGT Media', description:'Development of iOS app since 2010. An experience of 6 year in many different applications.', image:"assets/64x64.png"},
  // ];
  // $scope.contributionsTitleSection = "CONTRIBUTIONS & OPEN SOURCE";
  // $scope.contributions = [
  //   {name:'UINLineChart', description:'UINLineChart is a chart highly customizable that use lines an points.', image:"assets/64x64.png"},
  //   {name:'UINButton', description:'UINButton is an alternative of UIButton designed by Apple. You can simply use the storyboard to change the color, fontname, size, border. The UINButton have 3 states: Normal, Highlighted, Disabled', image:"assets/64x64.png"},
  //   {name:'UIQuickSilver', description:'UIQuickSilver is a simple UIView object that use the same approach of UIProgressView but is highly customizable from storyboard and programmatically.', image:"assets/64x64.png"},
  //   {name:'AITabBarController', description:'AITabBarController is a container controller with a tab bar in le left side.', image:"assets/64x64.png"},
  // ];
  // $scope.insterestsTitleSection = "INTERESTS";
  // $scope.insterestsDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  // $scope.progLangSectionTitle = "PROGRAMMING LANGUAGES";


}])
