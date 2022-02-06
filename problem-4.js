
//Problem - 4

function oddFriend(allFriends){
    if(Array.isArray(allFriends)){
        let isAllFriends = allFriends.every((v) => {
            return typeof v === "string";
        })
        if(!isAllFriends){
            return 'please giva a string value'
        }
    }
    for(var i = 0; i < allFriends.length; i++){
        if(allFriends[i].length % 2 == 1){
            return allFriends[i];
        }
    }
}
 var friendsName = ['sajjad', 'sumon', 'joti']
 var oddName = oddFriend(friendsName); 
console.log(oddName);