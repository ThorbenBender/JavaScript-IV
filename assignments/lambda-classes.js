// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes)
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        let randNum = Math.floor(Math.random()*3);
        if(randNum === 0){
            let points = Math.floor(Math.random()*11);
            student.score -= points;
            console.log(`You have to work on ${subject}. I have to remove ${points} points from your score. You have only ${student.score} left.`)
        } else if (randNum === 1 || randNum === 2) {
            let points = Math.floor(Math.random()*11);
            student.score += points;
            console.log(`Great work on ${subject}. I add ${points} points to your score. You have now ${student.score} points.`);
        }
    }

}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.score = Math.floor(Math.random()*100);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects(){
        for (let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    graduate(){
        if(this.score >= 70){
            console.log(`Good job, ${this.name}. You perfected the art of clicking your keyboard wile sitting in a dark room. Here is your black hoodie!`)
        } else {
            console.log(`Sorry ${this.name}. You are not ready. Go back in your dark room and try to type faster.`)
        }
    }

}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy time!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

const Mark = new Instructor({
    name: 'Mark',
    age: 20,
    location: 'Paris',
    gender: 'Male',
    specialty: 'React',
    favLanguage: 'Python',
    catchPhrase: 'If you want more ram, just download it.'
});

const Sean = new Instructor({
    name: 'Sean',
    age: 26,
    location: 'Tokyo',
    gender: 'Male',
    specialty: '',
    favLanguage: 'C++',
    catchPhrase: 'Did you try to restart your pc?'
});

const John = new Instructor({
    name: 'John',
    age: 32,
    location: 'Seoul',
    gender: 'Female',
    specialty: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'If you want more ram, just download it.'
});

const Tim = new Student({
    name: 'Tim',
    age: 26,
    location: 'Berlin',
    gender: 'Male',
    previousBackground: 'owned a own company',
    className: 'WEBEU1',
    favSubjects: ['Less', 'React', 'Redux']
});

const Max = new Student({
    name: 'Max',
    age: 32,
    location: 'Dublin',
    gender: 'Female',
    previousBackground: 'Studied economics',
    className: 'WEBEU1',
    favSubjects: ['CSS', 'HTML5', 'React']
});

const Samar = new ProjectManager({
    name: 'Samar',
    age: 32,
    location: 'Dheli',
    gender: 'Male',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'If you have windows, you\'re doomed',
    gradClassName: 'WEBEU1',
    favInstructor: 'Gabriel'
});

const Oliver = new ProjectManager({
    name: 'Oliver',
    age: 32,
    location: 'London',
    gender: 'Male',
    specialty: 'Python',
    favLanguage: 'C++',
    catchPhrase: 'If you have apple, you\'re doomed',
    gradClassName: 'WEBEU1',
    favInstructor: 'Tom'
});