const { Client } = require('pg');

const dbClient = new Client({
    user: 'schenker',
    password: 'vreni1980',
    host: '192.168.99.100',
    port: 5432,
    database: 'flowers_application'
});

dbClient.connect().then(() => {
    console.log('logged into database')
}).catch(error => {
    console.log(error);
})

exports.getFlowers = async function () {
    const sql = 'select * from flowerstable';
    const result = await dbClient.query(sql);
    return result.rows;
}

exports.getFlowerById = async function (flowerid) {
    const sql = 'select * from flowerstable where flowerid=' + flowerid;
    const result = await dbClient.query(sql);
    if (result.rows.length == 0) {
        return undefined;
    }
    return result.rows[0];
}

exports.addFlower = async function (newFlower) {
    const sql = 'insert flowerstable (name,family,color) values($1,$2,$3)';
    const values = [
        newFlower.name,
        newFlower.family,
        newFlower.color
    ];
    const result = await dbClient.query(sql, values);
    return result.rowCount;
}