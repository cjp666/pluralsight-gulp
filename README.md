# pluralsight-gulp
You've built your JavaScript application but how do you automate testing, code analysis, running it locally or deploying it? These redundant tasks can consume valuable time and resources. Stop working so hard and take advantage of JavaScript task automation using Gulp to streamline these tasks and give you back more time in the day. Studying this repo can help clarify how Gulp works, jump-start task automation with Gulp, find and resolve issues faster, and be a more productive.

## Requirements

- Install Node
	- on OSX install [home brew](http://brew.sh/) and type `brew install node`
	- on Windows install [chocolatey](https://chocolatey.org/) 
    - Read here for some [tips on Windows](http://jpapa.me/winnode)
    - open command prompt as administrator
        - type `choco install nodejs`
        - type `choco install nodejs.install`
- On OSX you can alleviate the need to run as sudo by [following these instructions](http://jpapa.me/nomoresudo). I highly recommend this step on OSX
- Open terminal
- Type `npm install -g node-inspector bower gulp`

## Quick Start
Prior to taking the course, clone this repo and run the content locally
```bash
$ npm install
$ bower install
$ npm start
```


## Install the packages for testing
```Karama
npm install --save-dev karma chai karma-chai karma-chai-sinon karma-chrome-launcher karma-coverage karma-growl-reporter karma-mocha karma-phantomjs-launcher karma-sinon  mocha mocha-clean sinon-chai sinon phantomjs
```

Or the specific versions for this course
```
npm install --save-dev chai@1.10.0 karma@0.12.31 karma-chai@0.1.0 karma-chai-sinon@0.1.4 karma-chrome-launcher@0.1.7 karma-coverage@0.2.7 karma-growl-reporter@0.1.1 karma-mocha@0.1.10 karma-phantomjs-launcher@0.1.4 karma-sinon@1.0.4 mocha@2.1.0 mocha-clean@0.4.0 phantomjs@1.9.13 sinon@1.12.2 sinon-chai@2.6.0
```
