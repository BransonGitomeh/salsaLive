/**
* User
*
* @module      :: Model
* @description :: A short summary of how this model works and what it represents.
* @docs    :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    //refactor all roles to be able to be sent easily from the servera nd the client will work automatically
//    user : { model: 'user' },

    name: {
      type: 'string',
      //required: true
    },

    number: {
      type: 'string',
      //required: true
    },

    route: {
      type: 'string',
      //required: true
    },

    employees : {
     collection: 'employee',
     via: 'role'
    },
  }
};
