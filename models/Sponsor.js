import mongoose from 'mongoose';

const SponsorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'No name specified'],
  },
  rank: {
    type: String,
    required: [true, 'AFSC required'],
  },
  dutyPhone: {
    type: String,
    required: [true, 'Must have a phone number'],
  },
});

module.exports =
  mongoose.models.Sponsor ?? mongoose.model('Sponsor', SponsorSchema);
