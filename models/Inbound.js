import mongoose from 'mongoose';

const InboundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'No name specificed'],
  },
  rank: {
    type: String,
    required: [true, 'No rank specified'],
  },
  afsc: {
    type: String,
    required: [true, 'No AFSC specified'],
  },
  maritalStatus: {
    type: String,
    required: [true, 'No marital status specified'],
  },
  assignedSponsor: {
    type: mongoose.Schema.ObjectId,
    ref: 'Sponsor',
  },
  inprocessingState: {
    type: Array,
    default: [
      {
        infoPacketSent: false,
        lodgingBooked: false,
        dateArrivedUpdated: false,
        poBoxSet: false,
        needsCDC: false,
        needsDorm: false,
        inproCSS: false,
        inproBriefAttended: false,
        lodgingDetails: '',
        poBox: '',
        cdcDetails: '',
        dormDetails: '',
      },
    ],
  },
  phone: {
    type: String,
  },
  rnltd: {
    type: Date,
    required: [true, 'No RNLTD specified'],
  },
  losingPas: {
    type: String,
    required: [true, 'No losing PAS specified'],
  },
});

module.exports =
  mongoose.models.Inbound ?? mongoose.model('Inbound', InboundSchema);
