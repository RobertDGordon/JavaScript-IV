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
        this.favLanguage = att.favLanguage,
        this.catchPhrase = att.catchPhrase
    }
    demo (subject){return `Today we are learning about ${subject}.`};
    grade (student, subject){return `${student.name} receives a perfect score on ${subject}!`};
    scoring(student) {
        let min = 0;
        let max = 10;
        let score = Math.floor(Math.random() * (max - min)) + min;
        student.grade = student.grade + score;
        if (score === 0){
            return `Dude, ${student.name} you got a zero, let's keep studying and try again!`
        }else {
            return `${this.name} says ${student.name} scored ${score} and now has a total of ${student.grade}!`
        }
    }
}

class Student extends Person{
    constructor(att){
        super(att);
        this.previousBackground = att.previousBackground,
        this.classname = att.classname,
        this.favSubjects = att.favSubjects,
        this.grade = att.grade
    }
    listsSubjects() {this.favSubjects.forEach(item => console.log(item))}
    PRAssignment(subject) {return `${this.name} has submitted a PR for ${subject}`}
    sprintChallenge(subject) {return `${this.name} has begun sprint challenge on ${subject}`}
    graduate() {
        if (this.grade >= 70) {
            return `${this.name} is ready to graduate! Congrats!`
        }else {
            let pointsleft = 70 - this.grade
            return `${this.name} needs ${pointsleft} more points to graduate, keep studying!`}
    }
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

let robertagain = new Student({
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
    grade: 55
});


let bill = new Student({
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
    grade: 21
});

const joscelyn = new ProjectManager({
    name: 'Joscelyn',
    location: 'Nyan Cat',
    age: 29,
    favLanguage: 'JavaScript',
    specialty: 'Super Smash Bros',
    catchPhrase: "Gotta Catch 'Em All",
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

console.log ("***********Lambda School of Hard Knocks*********************")


console.log (robertagain.graduate())
console.log (bill.graduate())
console.log (joscelyn.scoring(bill))
console.log (bill.graduate())
console.log (joscelyn.scoring(robertagain))
console.log (robertagain.graduate())
console.log (jimbo.scoring(robertagain))
console.log (robertagain.graduate())
console.log (jimbo.scoring(bill))
console.log (bill.graduate())
console.log (joscelyn.scoring(robertagain))
console.log (robertagain.graduate())
console.log (jimbo.scoring(bill))
console.log (bill.graduate())
console.log (joscelyn.scoring(robertagain))
console.log (robertagain.graduate())
console.log (jimbo.scoring(bill))
console.log (bill.graduate())