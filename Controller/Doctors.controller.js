const DoctorModel = require('../Model/Doctors.model');

exports.getAll = async (req, res) => {
    try{
        res.send( await DoctorModel.getAll() );
    }
    catch{
        console.log("Unable to retreive data");
    }
}

exports.getAppointments = async (req, res) => {
    try{
        res.send( await DoctorModel.getAppointments(req.body) );
    }
    catch{
        console.log("Unable to retreive data");
    }
}

exports.deleteAppointment = async (req, res) => {
    try{
        res.send( await DoctorModel.deleteAppointment(req.body) );
    }
    catch{
        console.log("Unable to retreive data");
    }
}