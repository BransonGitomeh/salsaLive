/**
* Semester.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name : { type: 'string' },

    //relationships
    //belongsto this level
    level : { model: 'level' },

    //has many units
    units : {
     collection: 'unit',
     via: 'semesters'
    },

    //many students registerd to it
    students : {
     collection: 'student',
     via: 'semester'
    },

    //fees aloccated to this semester
    //this will be printed to the bronchure
    semfees : {
     collection: 'semfee',
     via: 'semester'
    },
  }
};
