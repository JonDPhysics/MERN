const express = require("express")
const { faker } = require('@faker-js/faker')
const app = express()
const port =8000

class Users {
    constructor(){
        this.userId = 1
        this.fName = faker.name.firstName()
        this.lName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

const newUser = new Users()
console.log(newUser)

class Company{
    constructor(){
        this.companyId = 1
        this.companyName = faker.company.companyName()
        this.companyAddress = {
            streetAddress: faker.address.streetAddress(true),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}

const newCompany = new Company()
console.log(newCompany)

app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )

app.get("/api/users/new", (res) =>{
    res.json( newUser )
})

app.get("/api/companies/new", (res) =>{
    res.json( newCompany )
})

app.get("/api/user/company", (res) =>{
    res.json(
        newUser,
        newCompany
    )
})


app.listen(port)