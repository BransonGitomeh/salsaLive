/**
* Lecture.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        
  	//user account the school profile belongsto
    user : { model: 'user' },

    //what university the account belongs to
    university : { model: 'university' },

    units : {
     collection: 'unit',
     via: 'lecturer'
   },

   //University to keep the type
   universityparttimelecturerlist : { model: 'universityparttimelecturerlist' },

   universityfulltimelecturerlist : { model: 'universityfulltimelecturerlist' },

   universitypromotionollecturerlist : { model: 'universitypromotionollecturerlist' },


   //user student types belongto
    userparttimelecturerlist : { model: 'userparttimelecturerlist' },

    userfulltimelecturerlist : { model: 'userfulltimelecturerlist' },

    userpromotionollecturerlist : { model: 'userpromotionollecturerlist' },


  }
};

