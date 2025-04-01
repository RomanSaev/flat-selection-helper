const { prisma } = require('../prisma/prisma-client');


const getAll = (req, res, next) => {
    res.status(200)
    res.send('getAll');
}

const add = async (req, res, next) => {
    try {
        const data = req.body;
        if (!data.url) {
            return res.status(400).json({
                message: 'Заполните поле url'
            })
        }

        const flat = await prisma.flat.create({
            data: data
        })
        res.status(200).json(flat);

    } catch (err) {
        res.status(500).json({ message: "Что-то пошло не так" })
    }
}

module.exports = {
    getAll,
    add,
}