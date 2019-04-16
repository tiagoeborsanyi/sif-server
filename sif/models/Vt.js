const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VtSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users'
    // },
    nomevt: {
      type: String,
      required: true
    },
    apelido: {
        type: String,
        required: true
    },
    vtmigrada: {
        type: String,
        required: true
    },
    fitalocalidade: {
        type: String
    },
    disco600: {
        type: String
    },
    quatrodiscos: {
        type: String
    },
    chamadoassystretiradadiscos: {
        data: {
            type: String
        },
        numerochamado: {
            type: String
        },
        observacao: {
            type: String
        }
    },
    hds: {
        baia1: {
            type: String,
            required: true
        },
        baia2: {
            type: String,
            required: true
        },
        baia3: {
            type: String,
            required: true
        },
        baia4: {
            type: String,
            required: true
        },
        baia5: {
            type: String,
            required: true
        },
        baia6: {
            type: String,
            required: true
        },
        baia7: {
            type: String,
            required: true
        },
        baia8: {
            type: String,
            required: true
        }
    },
    disponivelretiradadisco: {
        type: String
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
        type: String
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