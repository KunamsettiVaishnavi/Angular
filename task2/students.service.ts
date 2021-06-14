import { StudentDetails } from './student-details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {


  constructor() { }

  imageRootPath:string = 'assets/student1.jpeg';

  // include code to hit springboot endpoints {}
  getAllStudents(): StudentDetails[]
  {
    let student1 : StudentDetails = {
        imageName:'assets/student1.jpeg',
        studentName : 'john',
        StudentId : 1,
        Grade:7,
        Section:'A',
        Birthday: new Date("2011-09-09"),
        Email:'eleven@gmail.com',
        mobile: '9988776655'
        
    }
    let student2 : StudentDetails = {
        studentName : 'daisy',
        StudentId : 2,
        Grade:7,
        Section:'B',
        Birthday: new Date("2011-08-08"),
       
        mobile: '9988776655',
        Email:'eleven@gmail.com',
        imageName:'assets/student1.jpeg'
    }
    let student3 : StudentDetails = {
        studentName : 'Eleven',
        StudentId : 1,
        Grade:8,
        Section:'A',
        Birthday: new Date("2011-07-07"),
        mobile: '9988776655',
        Email:'eleven@gmail.com',
        imageName:'assets/student1.jpg'
        
    }

    
    return [student1,student2,student3];
  }//end of getAll Products from Server

}//end of service class
