const { prisma } = require('../prisma/prisma-client');


const getAll = async (req, res, next) => {
   try {
       const flats = await prisma.flat.findMany({
            include: {
                advantage: true,
                disadvantage: true,
            }
       });

       res.status(200).json(flats);
   } catch (err) {
        res.status(500).json({message: 'Не удалось получить все квартиры'})
   }
}

const get = async(req, res, next) => {
    try {
        const { id } = req.params;

        const flat = await prisma.flat.findUnique({
            where: {
                id
            },
            include: {
                advantage: true,
                disadvantage: true,
            }
        })

        res.status(200).json(flat)

    } catch (err) {
        res.status(500).json({ message: "Что-то пошло не так" })
    }
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
        console.log(err)
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

const addAdvantage = async (req, res, next) => {
    const data = req.body;
    if (!data.flatId) {
        res.status(400).json({ message: 'Некорректный id квартиры' })
    }

    try {
        const property = await prisma.advantage.create({
            data: {
                ...data
            }
        })

        return res.status(201).json(property);
    } catch (err) {
        res.status(500).json({ message: "Что-то пошло не так" })
    }
}

const removeAdvantage = async (req, res, next) => {
    try {
        const { id } = req.body;

        if (!id) {
            res.status(400).json( {messgae: 'Некорректные параметры' })
        }

        await prisma.advantage.delete({
            where: {
                id
            }
        })

        res.status(204).json('ok');
    } catch (err) {
        res.status(500).json({ message: "Что-то пошло не так" })
    }
}

const addDisadvantage = async (req, res, next) => {
    const data = req.body;
    if (!data.flatId) {
        res.status(400).json({ message: 'Некорректный id квартиры' })
    }

    try {
        const property = await prisma.disadvantage.create({
            data: {
                ...data
            }
        })

        return res.status(201).json(property);
    } catch (err) {
        res.status(500).json({ message: "Что-то пошло не так" })
    }
}

const removeDisadvantage = async (req, res, next) => {
    try {
        const { id } = req.body;

        if (!id) {
            res.status(400).json( {messgae: 'Некорректные параметры' })
        }

        await prisma.disadvantage.delete({
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
    get,
    add,
    edit,
    remove,
    addAdvantage,
    removeAdvantage,
    addDisadvantage,
    removeDisadvantage
}