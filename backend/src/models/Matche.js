const axios = require('axios');
module.exports = {
    async findAll() {
        let res = {};
        try {
            res = await axios.get('https://futebol.homolog.groundsportech.com/samples/campeonatos/670/partidas.json');
        } catch (error) {
            res = error;
        }

        return res.data;
    }
};