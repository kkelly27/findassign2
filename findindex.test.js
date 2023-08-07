function findUserByUsername(usersArray, username){
return usersArray.find(function(user){
  return user.username === username;
})
}


  


function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  })

}



  