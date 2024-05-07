CREATE TABLE IF NOT EXISTS curso(
nome varchar (30) not null unique,
descricao text,
carga int unsigned,
totaulas int unsigned,
ano year default '2024' 
) default charset = utf8;
DESCRIBE curso;

ALTER TABLE curso
add primary key (idCurso);                                