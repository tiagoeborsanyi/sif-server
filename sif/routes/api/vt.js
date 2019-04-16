const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load models
const Vt = require('../../models/Vt');

const validatevt = require('../../validation/vt');


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
// @desc    Create vt
// @access  Private
router.post(
    '/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validatevt(req.body);
  
      // Check Validation
      if (!isValid) {
        // If any errors, send 400 with errors object
        // console.log(errors);
        return res.status(400).json(errors);
      }

      const tempvt = {
        nomevt: req.body.nomevt.nomevt,
        apelido: req.body.apelido.apelido,
        vtmigrada: req.body.vtmigrada.vtmigrada,
        fitalocalidade: req.body.fitalocalidade.fitalocalidade,
        disco600: req.body.disco600.disco600,
        quatrodiscos: req.body.quatrodiscos.quatrodiscos,
        disponivelretiradadisco: req.body.disponivelretiradadisco.disponivelretiradadisco,
        observacaovt: req.body.observacaovt.observacaovt
      }
      // console.log(tempvt, req.body);
  
      const newvt = new Vt(tempvt);
      const _id = req.body._id;

      if (_id) {
        // Update
        vt.findByIdAndUpdate(
            { _id },
            { $set: tempvt }
        ).exec().then(vt => res.status(200).json(vt));
      } else {
        newvt.save().then(vt => res.status(200).json(vt)).catch(err => {
          console.log(err);
          res.status(400).json({erro: 'erro para gravar vt'})
        });
      }      
    }
);

// @route   GET api/vt/:id
// @desc    Get vt by id
// @access  Private
router.get(
    '/:id', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
      vt.findById(req.params.id)
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
        vt.findById(req.params.id)
          .then(vt => {
            // Delete
            vt.remove().then(() => res.json({ success: true }));
          })
          .catch(err => res.status(404).json({ vtnotfound: 'vt não encontrada' }));
    });

module.exports = router;