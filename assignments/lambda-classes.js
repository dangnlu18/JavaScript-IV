// CODE here for your Lambda Classes


class People{
	constructor(peopleAttrs){
		this.name = peopleAttrs.name;
		this.location = peopleAttrs.location;
		this.age = peopleAttrs.age;
	}

	speak () {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
	}
}

class Instructor extends People{
	constructor(insAttrs){
		super(insAttrs);
		this.specialty = insAttrs.specialty;
		this.favLanguage = insAttrs.favLanguage;
		this.catchPhrase = insAttrs.catchPhrase;
	}

	demo(subject) {
		console.log(`Today we are learning ${subject}.`)
	}

	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}.`)
	}

  extraCredit(student){
    return student.grade += 7
  }
}

class Student extends People{
	constructor(studAttrs){
		super(studAttrs);
		this.previousBackground = studAttrs.previousBackground;
		this.className = studAttrs.className;
		this.favSubjects = studAttrs.favSubjects;
    this.grade = Math.floor((Math.random() * 100) + 1);
	}

	listsSubjects(){
		this.favSubjects.forEach((item)=>console.log(item))
	}

	PRAssignments(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`)
	}

	sprintChallenge(subject){
		console.log(`${this.name} has begun sprint challenge on ${subject}`)
	}
}

class ProjectManager extends Instructor{
	constructor(pmAttrs){
		super(pmAttrs);
		this.gradClassName = pmAttrs.gradClassName;
		this.favInstrucor = pmAttrs.favInstrucor;
	}

	standup(channel){
		console.log(`${this.name} announces to ${channel}, @channel standy times!`)
	}

	debugsCode(student, subject){
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
	}
}


// TESTING!!

//Instructors

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const frank = new Instructor({
  name: 'Frank',
  location: 'Flintville',
  age: 20,
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Yoooo`
});

const brad = new Instructor({
  name: 'Brad',
  location: 'Bedrock',
  age: 22,
  favLanguage: 'Python',
  specialty: 'Data Science',
  catchPhrase: `TESTINGG`
});



//Students

const alfred = new Student({
  name: 'Alfred',
  location: 'Bedrock',
  age: 7,
  previousBackground : 'studying',
  className : 'WEBPT8',
  favSubjects : ['Math', 'Science']
});


const kendrick = new Student({
  name: 'Kendrick',
  location: 'SF',
  age: 18,
  previousBackground : 'criminal',
  className : 'WEBPT8',
  favSubjects : ['Art', 'PE']
});

const beth = new Student({
  name: 'Beth',
  location: 'Bedrock',
  age: 14,
  previousBackground : 'basketball player',
  className : 'WEBPT8',
  favSubjects : ['PE', 'Science', 'Social Studies']
});


// PM's

const johnny = new ProjectManager({
  name: 'Johnny',
  location: 'Bedrock',
  age: 33,
  favLanguage: 'Python',
  specialty: 'Data Science',
  catchPhrase: `whatsup man`,
  gradClassName: 'CS1',
  favInstrucor: 'Kieran'

});

const francois = new ProjectManager({
  name: 'Francois',
  location: 'San Jose',
  age: 23,
  favLanguage: 'JavaScript',
  specialty: 'Sleeping',
  catchPhrase: `whatsup homeboy`,
  gradClassName: 'CS2',
  favInstrucor: 'Nobody'

});
