// jshint esversion: 6
"use strict";

const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const tweetsRoutes  = express.Router();

module.exports = function(DataHelpers) {

  tweetsRoutes.get("/", function(req, res) {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

  tweetsRoutes.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();

    // converting timestamp into a readable format
    let created_at = new Date();
    let sc = created_at.getSeconds();
    let mn = created_at.getMinutes();
    let hr = created_at.getHours();
    let dd = created_at.getDate();
    let mm = created_at.getMonth()+1;
    let yyyy = created_at.getFullYear();
    
    if(dd < 10) {
        dd = '0' + dd;
    }
    if(mm < 10) {
        mm = '0' + mm;
    }
    created_at = "created at "+hr+":"+mn+":"+sc+" on "+dd+"/"+mm+"/"+yyyy;

    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: created_at
    };

    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send(tweet);
      }
    });
  });

  return tweetsRoutes;

};
