const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load models
const Vt = require('../../models/Vt');

const validatevt = require('../../validation/vt');
const validatefita = require('../../validation/fita');
const validatehd = require('../../validation/hd');


// @route   GET api/vt/test
// @desc    Tests vt route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'API vt Works' }));

// @route   GET api/vt
// @desc    Get vts
// @access  Private
router.get(
    '/',
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
    Vt.find()
        .sort({ date: -1 })
        .then(vts => res.json(vts))
        .catch(err => res.status(404).json({ novtsfound: 'No vts found' }));
});

// @route   POST api/vt
// @desc    Create vt geral
// @access  Private
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validatevt(req.body);

      // Check Validation
      if (!isValid) {
        // If any errors, send 400 with errors object
        // console.log(errors);
        return res.status(400).json(errors);
      }

      let tempvt = {
        nomevt: req.body.nomevt.nomevt,
        apelido: req.body.apelido.apelido,
        vtmigrada: req.body.vtmigrada.vtmigrada,
        fitalocalidade: req.body.fitalocalidade.fitalocalidade,
        disco600: req.body.disco600.disco600,
        quatrodiscos: req.body.quatrodiscos.quatrodiscos,
        disponivelretiradadisco: req.body.disponivelretiradadisco.disponivelretiradadisco,
        observacaovt: req.body.observacaovt.observacaovt
      }
      tempvt.chamadoassystretiradadiscos = {
        data: req.body.chamadoassystretiradadiscos.data,
        numerochamado: req.body.chamadoassystretiradadiscos.numerochamado,
        observacao: req.body.chamadoassystretiradadiscos.observacao
      }
      tempvt.hds = {
        baia1: req.body.hds[0].baia1,
        baia2: req.body.hds[1].baia2,
        baia3: req.body.hds[2].baia3,
        baia4: req.body.hds[3].baia4,
        baia5: req.body.hds[4].baia5,
        baia6: req.body.hds[5].baia6,
        baia7: req.body.hds[6].baia7,
        baia8: req.body.hds[7].baia8
      }
      // console.log(tempvt, req.body);

      const newvt = new Vt(tempvt);
      const _id = req.body._id;

      if (_id) {
        // Update
        Vt.findByIdAndUpdate(
            { _id },
            { $set: tempvt }
        ).exec().then(vt => res.status(200).json(vt));
      } else {
        newvt.save().then(vt => res.status(200).json(vt)).catch(err => {
          // console.log(err);
          res.status(400).json({erro: 'erro para gravar vt'})
        });
      }
    }
);

// @route   POST api/vt/fita/:id
// @desc    Create Historico de unidades de fita
// @access  Private
router.post(
    '/fita/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validatefita(req.body);

      // Check Validation
      console.log(isValid, typeof req.body.data);
      if (!isValid) {
        // If any errors, send 400 with errors object
        // console.log(errors);
        return res.status(400).json(errors);
      }
      const id = req.params.id;

      Vt.findById(id)
        .then(findVt => {
            findVt.historicotrocafita.unshift({
              date: req.body.data,
              observacao: req.body.observacao
            });
            const _id = findVt._id;
          Vt.findByIdAndUpdate(
            { _id },
            { $set: findVt }
          ).exec().then(vt => res.status(200).json(vt)).catch(err => {
            // console.log(err);
            res.stattus(400).json({erro: 'erro para gravar histórico de fita.'})
          });
        })
        .catch(err => {
          // console.log(err);
          res.status(400).json({erro: 'erro para buscar a vt.'})
        });
    }
);

// @route   POST api/vt/hd/:id
// @desc    Create Historico de troca de hd's
// @access  Private
router.post(
  '/hd/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatehd(req.body);

      // Check Validation
      if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
      }
      const id = req.params.id;

      Vt.findById(id)
        .then(findVt => {
          // console.log(findVt);
            findVt.historicosituacaohd.unshift({
              date: req.body.data,
              baia: req.body.baia,
              observacao: req.body.observacao
            });
            const _id = findVt._id;
          Vt.findByIdAndUpdate(
            { _id },
            { $set: findVt }
          ).exec().then(vt => res.status(200).json(vt));
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({erro: 'erro para gravar histórico de HD.'})
        });
  }
)

// @route   POST api/vt/delete/hd/:id
// @desc    Create Historico de troca de hd's
// @access  Private
router.post(
  '/delete/hd/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Vt.update(
      {},
      {$pull: {historicosituacaohd: {_id: req.body.idHd}}}
    )
    .exec()
    .then(vt => {
      if (vt) {
        Vt.findById(req.body.idVt)
        .then(findVt => {
          res.status(200).json(findVt);
        })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({erro: 'erro para gravar histórico de HD.'})
    });
  }
);

// @route   GET api/vt/:id
// @desc    Get vt by id
// @access  Private
router.get(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Vt.findById(req.params.id)
        .then(vt => res.json(vt))
        .catch(err =>
          res.status(404).json({ vtnotfound: 'vt não encontrada' })
        );
  });

  // @route   DELETE api/vt/:id
  // @desc    Delete vt
  // @access  Private
  router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Vt.findById(req.params.id)
          .then(vt => {
            // Delete
            vt.remove().then(() => res.json({ success: true }));
          })
          .catch(err => res.status(404).json({ vtnotfound: 'vt não encontrada' }));
    });

module.exports = router;
