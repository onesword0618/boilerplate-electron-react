-- scenario1
DROP TABLE IF EXISTS scenario.newer_product;
CREATE TABLE scenario.newer_product (id varchar(50), name varchar(50),warehouse varchar(50),status varchar(50), product_address varchar(50), end_date varchar(100));
SHOW columns FROM scenario.newer_product;

DROP TABLE IF EXISTS scenario.newer_warehouse;
CREATE TABLE scenario.newer_warehouse (id varchar(50), name varchar(50),address varchar(50));
INSERT INTO scenario.newer_warehouse VALUES('02','WAREHOUSE2','SAITAMA');
INSERT INTO scenario.newer_warehouse VALUES('03','WAREHOUSE3','AOMORI');
SELECT * FROM scenario.newer_warehouse;
