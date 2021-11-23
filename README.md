# appointment_calendar
This repo contains code that manages a doctor's appointment calendar

Two text files, Doctors.txt and Appointments.txt act as local databases that I use to store information about doctors and their appointments.

In the Doctors.txt file, you will find the information set up in the format shown below:

  doctorUuid firstName lastName 

In the Appointments.txt file, you will find the information set up in the format shown below shown below:

  appointmentUuid patientFirstName patientLastName date time type doctorFirstName doctorLastName
  
I have implemented three http requests that will get all doctors, get an appointment given doctor name, time and date, and delete an appointment given a doctor name, time and date. To run my program, please clone the repo. Then in the top level directory, run npm i. Next, run "node index.js". In another terminal, please run the following curl commands to test my api.

# Get Doctors 
curl http://localhost:3000/calendar/doctors 
# Get Appointment
curl --header "Content-Type: application/json" -d "{\"firstName\":\"Bob\", \"lastName\":\"Smith\", \"date\":\"05/09/2021\", \"time\":\"8:30AM\"}" http://localhost:3000/calendar/appointments 
# Delete Appointment 
curl --header "Content-Type: application/json" -X DELETE -d "{\"firstName\":\"Bob\", \"lastName\":\"Smith\", \"date\":\"05/09/2021\", \"time\":\"8:30AM\", \"patientFirst\":\"Mary\", \"patientLast\":\"Jane\"}" http://localhost:3000/calendar/appointments



