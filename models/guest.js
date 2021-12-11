const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  firstName: {
    type: 'String',
    required: true,
  },
  lastName: {
    type: 'String',
    required: true,
  },
  email: {
    type: 'String',
    required: true,
    match:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  rsvpStatus: {
    type: 'String',
    required: true,
    default: 'pending',
    enum: ['attending', 'not attending', 'pending'],
  },
  rsvpNote: {
    type: 'String',
    required: false,
    default: '',
  },
  group: {
    type: 'String',
    required: false,
  },
});

module.exports.Guest = mongoose.model('Guests', guestSchema);
module.exports.guestSchema = guestSchema;
