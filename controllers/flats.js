const getAll = (req, res, next) => {
    res.status(200)
    res.send('getAll');
}

module.exports = {
    getAll
}