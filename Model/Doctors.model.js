const DoctorModel = function(){}
const fs = require('fs')

DoctorModel.getAll = () => {
    return new Promise( ( resolve, reject ) => {
        try {
            const data = fs.readFileSync('./Doctors.txt', 'UTF-8');
            const lines = data.split(/\r?\n/);
            let names = []

            lines.forEach((line) => {
                let words = line.split(" ");
                names.push(words[1] + " " + words[2]);
            });
            resolve(names);
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
}

DoctorModel.getAppointments = (body) => {
    return new Promise( ( resolve, reject ) => {
        try {
            const data = fs.readFileSync('./Appointments.txt', 'UTF-8');
            const lines = data.split(/\r?\n/);
            let appointments = []

            lines.forEach((line) => {
                let words = line.split(" ");
                if( body.firstName === words[6] && body.lastName === words[7] && body.date === words[3] && body.time === words[4]){
                    appointments.push(line);
                }
            });
            resolve(appointments);
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
}

DoctorModel.deleteAppointment = (body) => {
    return new Promise( ( resolve, reject ) => {
        try {
            const data = fs.readFileSync('./Appointments.txt', 'UTF-8');
            const lines = data.split(/\r?\n/);
            let appointments = []

            lines.forEach((line) => {
                let words = line.split(" ");
                if( body.firstName !== words[6] || body.lastName !== words[7] || body.date !== words[3] || body.time !== words[4] || body.patientFirst !== words[1] || body.patientLast != words[2] ){
                   fs.appendFile('temp.txt', line +'\n', err => {});
                }
            });

        fs.rename('temp.txt', 'Appointments.txt', function(err) {});
        resolve( true );
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
}
module.exports = DoctorModel;