const Matche = require('../models/Matche');
const Team = require('../models/Team');
module.exports = {
    async index(req, res) {
        let arrayResponse = [];
        try {
            const matche = await Matche.findAll();
            const team = await Team.findAll();
            arrayResponse = matche.data;

            for (let index = 0; index < matche.data.length; index += 1) {
                const elementMatche = matche.data[index];
                elementMatche.mandante = {};
                elementMatche.visitante = {};
                for (let index = 0; index < team.data.length; index += 1) {
                    const elementTeam = team.data[index];
                    if (elementMatche.idEquipeMandante === elementTeam.id) {
                        elementMatche.mandante = elementTeam;
                    }

                    if (elementMatche.idEquipeVisitante === elementTeam.id) {
                        elementMatche.visitante = elementTeam;
                    }
                }
            }
        } catch (err) {
            res.status(500).send({ error: err });
        }

        return res.json(arrayResponse);
    }
};