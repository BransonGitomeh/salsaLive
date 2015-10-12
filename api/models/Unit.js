/**
* Unit.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    code : { type: 'string' },

    name : { type: 'string' },

    department : { model: 'department' },

    lectures : {
     collection: 'lecture',
     via: 'unit'
    },

    lecturer : { model: 'lecturer' },

    //belongs to a semester...TODO will change--done
    //semester : { model: 'semester' },

    semesters : {
     collection: 'semester',
     via: 'units'
    },

    //students doing  that unit
    students : {
     collection: 'student',
     via: 'units'
    },

  }
};
