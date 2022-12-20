const db = require('../db');

class ScoreController {
    async createScore(req, res) {
        const {score, user_id} = req.body;
        console.log(user_id);
        const newScore = await db.query(`INSERT INTO score (score, user_id) values ($1, $2) RETURNING *`, [score, user_id]);
        res.json(newScore.rows[0]);

}

    async getScoresByUser(req, res) {
        const id = req.query.id;
        const scores = await db.query(`SELECT * FROM score WHERE user_id = $1`, [id]);
        res.json(scores.rows);

    }





}


module.exports = new ScoreController();