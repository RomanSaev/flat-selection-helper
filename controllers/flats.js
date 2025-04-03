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

        if (data.watched) {
            data.watched = data.watched === '1';
        }
        if (data.active) {
            data.active = data.active === '1';
        }
        if(data.rating) {
            data.rating = parseInt(data.rating)
        }
        if(data.cost) {
            data.cost = parseInt(data.cost)
        }

        const flat = await prisma.flat.create({
            data: data
        })
        res.status(200).json(flat);

    } catch (err) {
        res.status(500).json({ message: "Что-то пошло не так" })
    }
}

const edit = async (req, res, next) => {
    try {
        const data = req.body;
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Некорректный id квартиры'})
        }

        if (Object.keys(data).length === 0) {
            return res.status(400).json({ message: 
            'Отсутствуют параметры квартиры для изменения' })
        }

        if (data.watched) {
            data.watched = data.watched === '1';
        }
        if (data.active) {
            data.active = data.active === '1';
        }
        if(data.rating) {
            data.rating = parseInt(data.rating)
        }
        if(data.cost) {
            data.cost = parseInt(data.cost)
        }

        await prisma.flat.update({
            where: {
                id: id
            },
            data
        })

        res.status(204).json('ok')
    } catch (err) {
        res.status(500).json({ message: "Что-то пошло не так" }) 
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: 'Некорректный id квартиры' })
        }

        await prisma.flat.delete({
            where: {
                id
            }
        })

        res.status(204).json('ok');
    } catch (err) {
        res.status(500).json({ message: "Что-то пошло не так" })
    }
}

module.exports = {
    getAll,
    add,
    edit,
    remove,
}