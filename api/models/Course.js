/**
* Course.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name : { type: 'string' },

    //belongs to a certain year
    ayear : { model: 'ayear' },

    //belongs to a certain proffessional school
    pschool : { model: 'pschool' },

    //has many levels
    levels : {
     collection: 'level',
     via: 'course'
   },

   //has many students registerd to it
   students : {
     collection: 'student',
     via: 'course'
   },
  }
};
