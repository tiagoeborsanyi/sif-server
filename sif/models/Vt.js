const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VtSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    nomevt: {
      type: String,
      required: true
    },
    apelido: {
        type: String,
        required: true
    },
    vtmigrada: {
        type: Boolean,
        required: true
    },
    fitalocalidade: {
        type: Boolean
    },
    disco600: {
        type: Boolean
    },
    quatrodiscos: {
        type: Boolean
    },
    chamadossystretiradadiscos: [{
        data: {
            type: String,
            required: true
        },
        numerochamado: {
            type: String,
            required: true
        },
        observacao: {
            type: String
        }
    }],
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
    disponivelretiradadisco: {
        type: Boolean
    },
    situacaofita: {
        type: String
    },
    datamigracaofita: {
        type: String
    },
    datadisponibilidadefita: {
        type: String
    },
    fitaretirada: {
        type: Boolean
    },
    historicotrocafita: [{
        date: {
            type: Date
        },
        observacao: {
            type: String
        }
    }],
    historicosituacaohd: [{
        date: {
            type: Date,
            required: true
        },
        baia: {
            type: String,
            required: true
        },
        observacao: {
            type: String
        }
    }],
    observacaovt: {
        type: String
    }    
  });
  
  module.exports = Vt = mongoose.model('Vts', VtSchema);