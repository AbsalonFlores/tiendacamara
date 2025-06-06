exports.getDashboardStats = async (req, res) => {
    res.json({ vendidos: 0, cancelados: 0, compradores: 0 });
};
