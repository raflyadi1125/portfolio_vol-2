const notFound = (req, res) => {
    res.status(404).json({
        message: "Route tidak ditemukan"
    })
}

module.exports = notFound