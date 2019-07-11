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
}

class Student extends People{
	constructor(studAttrs){
		super(studAttrs);
		this.previousBackground = studAttrs.previousBackground;
		this.className = studAttrs.className;
		this.favSubjects = studAttrs.favSubjects;
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
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `lalalalla`,
  previousBackground : 'studying',
  className : 'WEBPT8',
  favSubjects : ['Math', 'Science']
});


const kendrick = new Student({
  name: 'Kendrick',
  location: 'SF',
  age: 18,
  favLanguage: 'Java',
  specialty: 'back-end',
  catchPhrase: `Don't forget the beer`,
  previousBackground : 'criminal',
  className : 'WEBPT8',
  favSubjects : ['Art', 'PE']
});

const beth = new Student({
  name: 'Beth',
  location: 'Bedrock',
  age: 14,
  favLanguage: 'Python',
  specialty: 'Data Science',
  catchPhrase: `Duuuuuude`,
  previousBackground : 'basketball player',
  className : 'WEBPT8',
  favSubjects : ['PE', 'Science', 'Social Studies']
});



