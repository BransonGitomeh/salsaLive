/**
* Level.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name : { type: 'string' },

    //belongs to a certain course
    course : { model: 'course' },

    //relationships
    //has ,many semesters
    semesters : {
     collection: 'semester',
     via: 'level'
   },

   students : {
     collection: 'student',
     via: 'level'
   },
  }
};
