const pool = require('./database');

async function testDatabase() { 
    try {
        const client = await
        pool.connect();
        console.log("Conectado ao PostgreSQL com sucesso");
        const res = await
        client.query('SELECT NOW()');
        console.log("Hora do Servidor", res.rows[0]);
        
        client.release();
        process.exit();
}   catch (err) {
    console.error("Erro ao conectar com o Banco de Dados ", err);
    process.exit(1);
}
}

testDatabase();