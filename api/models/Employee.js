/**
* User
*
* @module      :: Model
* @description :: A short summary of how this model works and what it represents.
* @docs    :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    /*personal stuff that we will add in the users

    profile later*/
    
    /*Simple cleanup after happy refactor*/

    // role: {
    //   type: 'string'
    // },


    //user account the school profile belongsto
    user : { model: 'user' },

    //the division that the employee belongs to
    staffdivision : { model: 'staffdivision' },

    //what university the account belongs to
    university : { model: 'university' },

    //the employee has a role....a real one...lol
    role : { model: 'role' },


  }
};
