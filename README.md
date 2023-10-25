<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>



<br />
<div align="center">
  <a href="https://github.com/nikoroytio/portfolio-page">
  </a>

<h3 align="center">Portfolio-page</h3>

  <p align="center">
    This is Portfolio page made with react. I also used this project to learn react, which was new technology to me.
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

For getting this project started, you need to have installed Node.js and npm. 
after that we can move on to cloning repository and installing depencies.

### Prerequisites

1. Install Node.js and npm

  <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">Instructions</a>
  </br>
  <a href="https://nodejs.org/en/download">Get it here</a>

### Installation

1. Clone the repo
  ```sh
    git clone https://github.com/nikoroytio/portfolio-page.git
  ```
2. Install NPM packages
  ```sh
    npm install
  ```
3. In case of issues shown after the npm install, run the below to automatically fix the issues:
  ```sh
    npm audit fix
  ```
4. Start the development server by running the following command:
  ```sh
    npm start
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This project can be used as a starting point, or template to your own portfolio.
Folder structure:  
├── node_modules  
├── public/  
│ &nbsp;&nbsp;  └── fonts  
└── src/  
&nbsp;&nbsp;&nbsp;&nbsp;├── assets/  
&nbsp;&nbsp;&nbsp;&nbsp;│ &nbsp;&nbsp;  ├── icons  
&nbsp;&nbsp;&nbsp;&nbsp;│ &nbsp;&nbsp;  ├── image  
&nbsp;&nbsp;&nbsp;&nbsp;│ &nbsp;&nbsp;  └── videos  
&nbsp;&nbsp;&nbsp;&nbsp;├── components  
&nbsp;&nbsp;&nbsp;&nbsp;└── sections  
      

In the public folder we have usual index.html for our project, we have added folder for custom fonts. You can change them to your own liking.  
As structured, assets folder have images, videos and icons needed for the project.  
In component folder we have invidual components, like Rock Paper Scissors game. Components required .js and .css is in this folder.  
In section folder we have every section. They are named descriptiove way, for example "About". Section has the section structure and component imports.  

Page stylesheets are are used in descending way. So App.css sets overall rules for the whole page's look. Sections own .css files have section specific styling and invidual component styling is found in each components .css-file.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>  


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Niko Röytiö - roytioniko@gmail.com  
Project Link: <a href="https://github.com/nikoroytio/portfolio-page">HERE</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
