const person = {
  firstName: 'Martin',
  lastName: 'Laws',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  heightInCm: 188,
  heightInInches: function() {
    return this.heightInCm / 2.54
  }
}

console.log(person.fullName())