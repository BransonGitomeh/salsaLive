/**
* User
*
* @module      :: Model
* @description :: A short summary of how this model works and what it represents.
* @docs    :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
   
    //since now all has been refactoredd to work with the mainuser accounts
    //and this will be simply ionstances of accounts which opens up key features and more possibilities
    //i just want to thank God for this transition

    
    //user account the school profile belongsto
    user : { model: 'user' },

    //what university the account belongs to
    university : { model: 'university' },


    //curent course being taken by the acoount
    course : { model: 'course' },

    //curent level being taken
    level : { model: 'level' },

    //curent semester of level
    semester : { model: 'semester' },

    //units the account is doing in that course curently
    units : {
     collection: 'unit',
     via: 'students'
    },

    //become active or not
    //universitydonestudentlist
    universityactivestudentlist : { model: 'universityactivestudentlist' },
    universitydonestudentlist : { model: 'universitydonestudentlist' },
    universityissuesstudentlist : { model: 'universityissuesstudentlist' },

    //user tracked progress
    useractivestudentlist : { model: 'useractivestudentlist' },
    userdonestudentlist : { model: 'userdonestudentlist' },
    userissuesstudentlist : { model: 'userissuesstudentlist' },
  }
};
