// // CODE here for your Lambda Classes
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class Person{
    constructor(att){
        this.name = att.name,
        this.age = att.age,
        this.location = att.location
    }
    speak (){return `Hello my name is ${this.name}, I am from ${this.location}.`};
}

class Instructor extends Person{
    constructor(att){
        super(att);
        this.specialty = att.specialty,
        this.favLanguage = att.specialty,
        this.catchPhrase = att.specialty
    }
    demo (subject){return `Today we are learning about ${subject}.`};
    grade (student, subject){return `${student.name} receives a perfect score on ${subject}!`};
}

class Student extends Person{
    constructor(att){
        super(att);
        this.previousBackground = att.previousBackground,
        this.classname = att.classname,
        this.favSubjects = att.favSubjects
    }
    listsSubjects() {this.favSubjects.forEach(item => console.log(item))}
    PRAssignment(subject) {return `${this.name} has submitted a PR for ${subject}`}
    sprintChallenge(subject) {return `${this.name} has begun sprint challenge on ${subject}`}
}

class ProjectManager extends Instructor{
    constructor(att){
        super(att);
        this.gradClassName = att.gradClassName,
        this.favInstructor = att.favInstructor
    }
    standUp(channel) {return `${this.name} announces to ${channel}, @channel standy times!`}
    debugsCode(student, subject) {return `${this.name} debugs ${student.name}'s code on ${subject}`}
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: "Don't forget the homies"
  });

const barney = new Instructor({
    name: 'Barney',
    location: 'Trouble',
    age: 37,
    favLanguage: 'React',
    specialty: 'Node',
    catchPhrase: "Stay out of trouble"
});

const robert = new Student({
    name: 'Robert',
    location: 'Portland',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Stacking things',
    catchPhrase: 'Facts.',
    previousBackground: 'Photography',
    favSubjects: [
        'Pizza making',
        'Lunch time',
    ],
});

const bill = new Student({
    name: 'Bill',
    location: 'Encino',
    age: 32,
    favLanguage: 'Valley',
    specialty: 'Adventuring',
    catchPhrase: 'Excellent',
    previousBackground: 'Slacker',
    favSubjects: [
        'Science',
        'Circadian rhythm biology',
    ],
});

const joscelyn = new ProjectManager({
    name: 'Joscelyn',
    location: 'Nyan Cat',
    age: 30,
    favLanguage: 'Something',
    specialty: 'Donuts',
    catchPhrase: "Let's zoom",
    gradClassName: 25,
    favInstructor: 'Josh'
});

const jimbo = new ProjectManager({
    name: 'Jimbo',
    location: 'Kwik-e-Mart',
    age: 19,
    favLanguage: 'Brah',
    specialty: 'Loitering',
    catchPhrase: "Woah man",
    gradClassName: 45,
    favInstructor: 'Brit'
});


// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.