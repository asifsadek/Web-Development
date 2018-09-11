import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if (Meteor.isClient) {
  var img_data = [
    {
      img_src: "laptops.jpg",
      img_alt: "laptops"
    },

    {
      img_src: "bass.jpg",
      img_alt: "bass"
    },

    {
      img_src: "beard.jpg",
      img_alt: "beard"
    },
  ];

    Template.images.helpers({images:img_data});

    Template.images.events({
      'click .js-image': function(event){
        $(event.target).css("width", "50px");
      }
    });

}

if (Meteor.isServer) {
  console.log("I am the Server");
}