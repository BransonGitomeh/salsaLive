module.exports = {
  fixtures: {
    order: ['User','University'],
    User:[{
      id:1,
      firstname : 'branson',
      middlename : 'gitomeh',
      lastname :'kuria',
      gender: 'm',
      dob: '1/2/4',
      nationality:'kenyan',
      idNo:'12345600',
      residentialarea: 'roysambu-kwasteve',
      phonenumber:'0711777733',
      email:'s@s.com',
      username:'branson@email.com',
      password:'1232'
    }],
    University:[{
      name:'salsaUniversity',
      models:{
        user: {id: 1}
      }
    }]
  }
}
