/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const Cryptr = require ('cryptr');
const USER_ID_ENCRYPT_DECTYPT = 'user_id_incrption_decription';


module.exports = class UserController {

  getuserList(userdata) {
    let cryptr = new Cryptr (USER_ID_ENCRYPT_DECTYPT);
    let userList = [];

    userdata.forEach ((val, i) => {
      let  tempobj = {
        _id: cryptr.encrypt (val._id),
        email: val.email,
        lastName: val.lastName,
        firstName: val.firstName
      }
      userList.push (tempobj);
    });
    return userList;
  }

};


