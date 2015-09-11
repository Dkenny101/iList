'use strict';

app.factory('List', function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    var lists = $firebase(ref.child('lists')).$asArray();
    
    var List = {
        all: lists,
        create: function (listItem){
            return lists.$add(listItem);
        },
        get: function(listId) {
            return $firebase(ref.child('lists').child(listId)).$asObject();
        },
        delete: function (listItem) {
            return lists.$remove(listItem);
        }
    };
    
    return List;
});
