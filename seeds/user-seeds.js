const { User } = require('../models');

const userData = [
    {
        username: "alanb",
        email: "alanb@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "pksullivan",
        email: "pksullivan@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "efagioli01",
        email: "efagioli01@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "swethareddyl",
        email: "swethareddyl@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "sheldor",
        email: "sheldor@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "cloud9amy",
        email: "cloud9amy@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;