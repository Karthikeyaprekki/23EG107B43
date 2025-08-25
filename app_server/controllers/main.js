/* GET homepage */
const index = (req, res) => {
res.render('index', { title: 'Ai_Travel_Planner' });
};
module.exports={
    index
};