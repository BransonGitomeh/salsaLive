/**
* Ayear.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    year : { type: 'string' },


    //relationships
    //each university configuration belongs to a university
    university : { model: 'university' },

    //has many courses
    courses : {
     collection: 'course',
     via: 'ayear'
   }
  }
};
