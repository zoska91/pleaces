use onRoad

create table Users (

    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) not null,
    surname varchar(50) not null,
    email varchar(50) not null,
    password varchar(50) not null,
    adres varchar(50)

)

ALTER TABLE Roads CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;

select * from Users

insert into Users ( name, surname, email, password, adres) 
values ( 'ewa', 'wilk', 'ewawilk@gmail.com', 'password2', 'gliniana 3, Wrocław, 55-555')

-----------------------------------------------------------------------
create table Notes (
    id int AUTO_INCREMENT PRIMARY KEY,
    text varchar(500) not null,
    createDate date not null,
    userId int not null, 
    historyId int,
    planId int,
    roadId int
)

use onRoad

insert into Notes (text, createDate, userId, historyId, planId, roadId)
values ('cos tam cos tam', now(), 1, null, null, 1)

select * from Notes
select n.id from Notes n inner join Users u on u.Id = n.userId

-----------------------------------------------------------------------
alter table Notes add title varchar(255)
update Notes set title='new new' where id = 3
------------------------------------------------------------------------

create table History (

     id int AUTO_INCREMENT PRIMARY KEY,
     userId int not null, 
     text varchar(500) ,
     title varchar(255) not null, 
     createData date not null,
     adres varchar(500),
     historyDate date,
     lat int,
     lon int

)

insert into History (userId, text, title, createData, adres, historyDate, lat, lon)
values (1, 'fajne miejsce', 'nowa wies', now(), 'nylonowa, nowy budyn', '2019-10-09', null, null)

insert into History (userId, text, title, createData, adres, historyDate, lat, lon)
values (2, 'extra miejsce', 'scinawa', now(), 'gdzies', '2017-02-09', null, null)

insert into History (userId, text, title, createData, adres, historyDate, lat, lon)
values (1, null, 'nowe cos', now(), 'chata', null, 51.08315, 17.02407)

select * from History

ALTER TABLE History MODIFY lat FLOAT;

delete from History where id in (9)

-------------------------------------------------------------------

create table Plans (

     id int AUTO_INCREMENT PRIMARY KEY,
     userId int not null, 
     text varchar(500) ,
     title varchar(255) not null, 
     createData date not null,
     adres varchar(500),
     lat int,
     lon int

)

insert into Plans (userId, text, title, createData, adres,  lat, lon)
values (1, 'kiedys tam pojade', 'nowa wies', now(), 'nylonowa, nowy budyn',  null, null)

insert into Plans (userId, text, title, createData, adres,  lat, lon)
values (2, 'extra miejsce', 'gdzies bede', now(), 'gdzies',  null, null)

insert into Plans (userId, text, title, createData, adres,  lat, lon)
values (1, null, 'chce tam byc ', now(), 'banda',  51.08315, 17.02407)

select * from Plans

ALTER TABLE Plans MODIFY lon FLOAT;

--------------------------------------------------------------------

create table Roads (

     id int AUTO_INCREMENT PRIMARY KEY,
     userId int not null, 
     text varchar(500) ,
     title varchar(255) not null, 
     createData date not null,
     adresFrom varchar(500),
     adresTo varchar(500),
     latFrom int,
     lonFrom int,
     latTo int,
     lonTo int

)



insert into Roads (userId, text, title, createData, adresFrom, adresTo, latFrom, lonFrom, latTo, lonTo)
values (1, 'hen daleko', 'nowa trasa', now(), 'nylonowanowy budyn', 'dom', 51.08315, 17.02407, 51.36339, 17.47071)

insert into Roads (userId, text, title, createData, adresFrom, adresTo, latFrom, lonFrom, latTo, lonTo)
values (2, null, 'dafewfwefwe', now(), 'nylonowanowy budyn', 'dom', 51.08315, 17.02407, 51.36339, 17.47071)

insert into Roads (userId, text, title, createData, adresFrom, adresTo, latFrom, lonFrom, latTo, lonTo)
values (2, 'hen daleko', 'nowa trasa', now(), 'nylonowanowy budyn', 'dom', 51.08315, 17.02407, 51.36339, 17.47071)

ALTER TABLE Roads MODIFY lonTo FLOAT;

select * from Roads