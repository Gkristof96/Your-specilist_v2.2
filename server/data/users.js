import bcrypt from 'bcryptjs'

const users = [
    {
        email: "antal@email.com",
        password: bcrypt.hashSync('123456', 10)
    },
    {
        email: "iren@email.com",
        password: bcrypt.hashSync('123456', 10)
    },
    {
        email: "bela@email.com",
        password: bcrypt.hashSync('123456', 10)
    },
    {
        email: "jeno@email.com",
        password: bcrypt.hashSync('123456', 10)
    },
    {
        email: "ferenc@email.com",
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users