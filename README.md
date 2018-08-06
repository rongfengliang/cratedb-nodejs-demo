# cratedb nodejs demo

## run cratedb local(with docker)

```code
docker run -d -p 4200:4200 crate
```

## create table && insert data

* create table

```code
create table appdemofirst (
     id int,
     quote string
 ) clustered into 5 shards with (number_of_replicas = 0);

```

* insert data

```code
insert into appdemofirst(id,quote) values(1,'Don't panic')
insert into appdemofirst(id,quote) values(2,'Ford, you're turning into a penguin. Stop it.')

```

## How to Run

* install deps

```code
yarn
```

* run

```code
yarn s
```