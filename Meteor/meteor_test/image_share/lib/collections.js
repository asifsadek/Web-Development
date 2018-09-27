import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Images = new Mongo.Collection('image');
export { Images };

Images.allow({
    insert: function (userId, doc) {
        console.log("testing security on image insert");
        if (Meteor.user() && doc.createdBy == Meteor.user().username) {    //user is logged in & inserting images to his account
            return true;
        } else {
            return false;
        }
    },

    remove: function (userId, doc) {
        if (Meteor.user() && doc.createdBy == Meteor.user().username) {    //user is logged in & removing images from his account
            return true;
        } else {
            return false;
        }
    },

});