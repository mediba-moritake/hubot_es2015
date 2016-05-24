"use strict";

module.exports = function (robot) {
  robot.hear(/なんじ/i, function (res) {
    var exec = require('child_process').exec;
    exec("date", function (error, stdout, stderr) {
      if (!error) {
        console.log(stdout);
      } else {
        console.log(stderror);
      }
    });
  });
};