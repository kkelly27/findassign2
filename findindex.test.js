function findUserByUsername(usersArray, username){
return usersArray.find(function(user){
  return user.username === username;
})
}


describe("#findUserByUsername", function() {
  let users;
  beforeEach(function() {
    users = [
      { username: "mlewis" },
      { username: "akagen" },
      { username: "msmith" }
    ];
  });
  it("returns the object if the username matches the string passed", function() {
    expect(findUserByUsername(users, "akagen")).toEqual({ username: "akagen" });
  });
  it("returns undefined if a username is not found", function() {
    expect(findUserByUsername(users, 'taco')).toEqual(undefined);
  });
});

  


function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  })
if(foundIndex === -1) return;
return usersArray.splice(foundIndex,1)[0];
}

describe("#removeUser", function() {
  let users;
  beforeEach(function(){
      users = [
        { username: "mlewis" },
        { username: "akagen" },
        { username: "msmith" }
      ];
  })
  it("removes a user from an array", function() {
    removeUser(users, "mlewis");
    expect(users.length).toEqual(2)
    
  });
  it("returns the removed user", function() {
    expect(removeUser(users,"mlewis")).toEqual({ username: "mlewis" });
  });
  it("returns undefined a user from an array", function() {
    expect(removeUser(users, "taco")).toEqual(undefined);
    expect(users.length).toEqual(3);

  });
});

  
