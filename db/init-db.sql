CREATE TABLE flowerstable(
    flowerid serial unique primary key,
    name character varying(20) not null,
    family character varying(200) not null,
    color character varying(200) not null
);

ALTER TABLE flowersTable
    OWNER TO schenker;

alter role schenker connection limit -1;

insert into flowerstable(name,family,color)
values('Rose','A.rose','red');
insert into flowerstable(name,family,color)
values('Lavender','A.lavender','purple');
