/**
* University.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {



    //normal stuff about school

    name : { type: 'string' },

    innitials : { type: 'string' },

    specialisation: { type: 'string' },

    startedyear: { type: 'string' },

    description: { type: 'string' },





    //belongs to some weird user--the owner 
    user : { model: 'user' },

    //a list of the students the uni holds
    //Universitydonestudentlist
    universityactivestudentlist : { model: 'universityactivestudentlist' },
    universitydonestudentlist : { model: 'universitydonestudentlist' },
    universityissuesstudentlist : { model: 'universityissuesstudentlist' },

    //lecturertypes
    universityparttimelecturerlist : { model: 'universityparttimelecturerlist' },
    universityfulltimelecturerlist : { model: 'universityfulltimelecturerlist' },
    universitypromotionollecturerlist : { model: 'universitypromotionollecturerlist' },

    //proffesional schools the university owns
    pschools : {
     collection: 'pschool',
     via: 'university'
    },

    //year settings configurations available
    ayears : {
     collection: 'ayear',
     via: 'university'
    },

    students : {
     collection: 'student',
     via: 'university'
    },

    employees : {
     collection: 'employee',
     via: 'university'
    },

    lecturers : {
     collection: 'lecturer',
     via: 'university'
    },

    stafftypes:{
        collection: 'stafftype',
        via: 'university'
    }

   
  }
};
