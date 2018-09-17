import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Images = new Mongo.Collection('image');
export { Images };
