const router = require('express').Router();
const doctors = require('../Controller/Doctors.controller');

router.route('/doctors')
       .get( doctors.getAll );

router.route('/appointments')
       .post( doctors.getAppointments )
       .delete( doctors.deleteAppointment);

module.exports = router;