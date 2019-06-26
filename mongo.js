const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@clusterjuissi-xw0pk.mongodb.net/puhelinluettelo-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if ( process.argv.length == 3 ) {

  let output = "Phonebook:"

  Person.find({}).then(result => {
    result.forEach(person => {
      //console.log(person)
      output += `\n${person.name} ${person.number}`
    })
    console.log(output)
    mongoose.connection.close()
  })

} else if ( process.argv.length == 5 ) {

  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })
  
  person.save().then(response => {
    console.log(`added ${person.name} number ${person.number} to phonebook!`);
    mongoose.connection.close();
  })

} else {
  console.log('check arguments')
  process.exit(1)
}





