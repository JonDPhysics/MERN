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

