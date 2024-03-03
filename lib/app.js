document.title = 'Catatan Pribadi';

alasql(/*sql*/ `create localStorage database if not exists dataCatatan;
attach localStorage database dataCatatan;
use dataCatatan;
create table if not exists catatan (id integer auto_increment, judul text, isi text);`);
