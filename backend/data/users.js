import bcrypt from 'bcryptjs';


const users = [
    {
        name: 'Admin User',
        email: 'admin@exm.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@exm.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'idan',
        email: 'idan@exm.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users