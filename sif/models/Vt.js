const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VtSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    nome: {
      type: String,
      required: true
    },
    vtmigrada: {
        type: Boolean,
        required: true
    },
    hdsituacao: {
        type: String,
        required: true
    },
    hds: [{
        baia: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }],
    hdhistorico: [{
        date: {
            type: Date
        },
        baia: {
            type: String,
        },
        situacao: {
            type: String
        }
    }],
    fitabackupsituacao: {
        type: String,
        required: true
    },
    unidadefitahistorico: [{
        date: {
            type: Date
        },
        observacao: {
            type: String
        }
    }]
  });
  
  module.exports = Vt = mongoose.model('Vts', VtSchema);