/**
* Lecture.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    time : { type: 'string' },

    room : { type: 'string' },

    unit : { model: 'unit' },
    
    lecschedules : {
     collection: 'lecschedule',
     via: 'lecture'
   }
  }
};

