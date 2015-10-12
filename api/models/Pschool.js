/**
* Pschool.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name : { type: 'string' },

    description : { type: 'string' },

    university : { model: 'university' },

    //many departments and courses
    //
    departments : {
     collection: 'department',
     via: 'pschool'
   },
   
   //
   courses : {
    collection: 'course',
    via: 'pschool'
  },
  }
};
