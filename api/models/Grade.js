/**
* Lecture.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {


  	//hope this will work magic
  	activegrade : { model: 'activegrade' },

  	savedgrade : { model: 'savedgrade' },


  	//lets move
  	student : { model: 'student' },


    student : { model: 'student' },

    semester : { model: 'semester' },

    unit : { model: 'unit' },
    
    cat1 : { type: 'string' },
  }
};

