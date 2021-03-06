var path = require('path');

var baseDir = __dirname + '/src/templates';

var config = {
  templates: [
    {
      template: 'src/templates/index.ejs',
      filename: 'index.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'index.json')),
      projects: require(path.resolve(baseDir, 'projects.json')),
      page: 'index.html'
    }, {
      template: 'src/templates/colors.ejs',
      filename: 'colors.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'colors.json')),
      page: 'colors.html'
    }, {
      template: 'src/templates/community-how-to-participate.ejs',
      filename: 'community-how-to-participate.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-how-to-participate.json')),
      page: 'community-how-to-participate.html'
    }, {
      template: 'src/templates/code-of-conduct.ejs',
      filename: 'code-of-conduct.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'code-of-conduct.json')),
      page: 'code-of-conduct.html'
    }, {
      template: 'src/templates/community-how-to-contribute.ejs',
      filename: 'community-how-to-contribute.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-how-to-contribute.json')),
      page: 'community-how-to-contribute.html'
    }, {
      template: 'src/templates/license.ejs',
      filename: 'license.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'license.json')),
      page: 'license.html'
    },
    {
      template: 'src/templates/about-pylons-project.ejs',
      filename: 'about-pylons-project.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'about-pylons-project.json')),
      page: 'about-pylons-project.html'
    },
    {
      template: 'src/templates/community-support.ejs',
      filename: 'community-support.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-support.json')),
      page: 'community-support.html'
    },
    {
      template: 'src/templates/about-pylons-framework.ejs',
      filename: 'about-pylons-framework.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'about-pylons-framework.json')),
      page: 'about-pylons-framework.html'
    },
    {
      template: 'src/templates/projects.ejs',
      filename: 'projects.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'projects.json')),
      projects: require(path.resolve(baseDir, 'projects.json')),
      page: 'projects.html'
    }
  ]
};

module.exports = config;
