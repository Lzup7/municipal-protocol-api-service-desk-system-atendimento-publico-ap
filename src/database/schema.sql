-- Tabela de usuários (funcionários)
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(200) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de setores da prefeitura
CREATE TABLE setores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL
);

-- Status do protocolo
CREATE TABLE status (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL
);

-- Protocolos (o coração do sistema)
CREATE TABLE protocolos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT NOT NULL,
    setor_id INTEGER REFERENCES setores(id),
    status_id INTEGER REFERENCES status(id),
    criado_por INTEGER REFERENCES usuarios(id),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);