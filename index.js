#! /usr/bin/env node

'use strict';
var yosay = require('yosay');
var chalk = require('chalk');
var fs = require('fs');

//parse & randomize quotes
var data = JSON.parse(fs.readFileSync(__dirname + '/quotes.json'));
var random_data = Math.floor(Math.random() * data.quotes.length);

//randomize color index
var colors = ["red", "green", "yellow", "magenta", "cyan", "white"];
var random_color = Math.floor(Math.random() * colors.length);

//apply color to text using chalk
var passed = chalk.red(data.quotes[random_data]);

//apply randomized color
switch (colors[random_color]) {
case "red":
    passed = chalk.red(data.quotes[random_data]);
    break;
case "green":
    passed = chalk.green(data.quotes[random_data]);
    break;
case "yellow":
    passed = chalk.yellow(data.quotes[random_data]);
    break;
case "magenta":
    passed = chalk.magenta(data.quotes[random_data]);
    break;
case "cyan":
    passed = chalk.cyan(data.quotes[random_data]);
    break;
case "white":
    passed = chalk.white(data.quotes[random_data]);
    break;
default:
    passed = chalk.magenta(data.quotes[random_data]);
    break;
}
//print to console
console.log(yosay(passed));

