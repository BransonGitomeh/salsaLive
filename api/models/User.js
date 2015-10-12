var bcrypt = require('bcrypt');

/**
* User
*
* @module      :: Model
* @description :: A short summary of how this model works and what it represents.
* @docs    :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    /*personal stuff that we will add in the users

    profile later*/
    //later
    firstname: {
      type: 'string',
      //required: true
    },

    middlename: {
      type: 'string',
      //required: true
    },

    lastname: {
      type: 'string',
      //required: true
    },

    //genereal stuff
    gender: {
      type: 'string',
      //required: true
    },

    dob: {
      type: 'string'
    },

    //contacts
    nationality: {
      type: 'string'
    },

    idNo: {
      type: 'string'
    },

    residentialarea: {
      type: 'string'
    },

    phonenumber: {
      type: 'string'
    },


    //educationalHistory
    //primarySchool
    primarySchoolName: {
      type: 'string'
    },

    primarySchoolYearComplete: {
      type: 'string'
    },

    primarySchoolCompleteMarks: {
      type: 'string'
    },

    primarySchoolCompleteGrade: {
      type: 'string'
    },


    //highSchool
    highSchoolName: {
      type: 'string'
    },

    highSchoolYearComplete: {
      type: 'string'
    },

    highSchoolYearComplete: {
      type: 'string'
    },

    highSchoolCompletePoints: {
      type: 'string'
    },

    highSchoolYearGrade: {
      type: 'string'
    },



    //other stuff now

    role: {
      type: 'string'
    },

    //this are the relationships thing that i will throw into own model as soon as i can lol
    //the universities this guy owns
     universities : {
      collection: 'university',
      via: 'user'
    },

    //his student account
    //Todo make them accounts--not one
    // students : {
    //  collection: 'student',
    //  via: 'user'
    // },

    //user student types belongto
    useractivestudentlist : { model: 'useractivestudentlist' },
    userdonestudentlist : { model: 'userdonestudentlist' },
    userissuesstudentlist : { model: 'userissuesstudentlist' },

    //user lecturer belong types
    //user student types belongto
    userparttimelecturerlist : { model: 'userparttimelecturerlist' },
    userfulltimelecturerlist : { model: 'userfulltimelecturerlist' },
    userpromotionollecturerlist : { model: 'userpromotionollecturerlist' },


    //his student account
    //Todo make them accounts--not one
    employees : {
     collection: 'employee',
     via: 'user'
    },

    lecturers : {
     collection: 'lecturer',
     via: 'user'
    },

    //this is mainly auth stuff
    username: {
      type: 'email', // Email type will get validated by the ORM
      //required: true,
      unique: true
    },

    //You might want to put this into it's own model if you want to support
    //social logins but keep the same account
    password: {
      type: 'string',
      //required: true
    },

    toJSON: function() {
      var obj = this.toObject();
      // Remove the password object value
      delete obj.password;
      // return the new object without password
      return obj;
    }
  },

  //salt the password before it gets saved
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          user.password = hash;
          cb(null, user);
        }
      });
    });
  }
};
