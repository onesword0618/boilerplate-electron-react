-- scenario1
DROP TABLE IF EXISTS scenario.current_product;
CREATE TABLE scenario.current_product (id varchar(50), name varchar(50), product_address varchar(50), end_date varchar(100));
INSERT INTO scenario.current_product VALUES('01','STRAWBERRY','SAITAMA','202003');
INSERT INTO scenario.current_product VALUES('02','WATER MELON','SAITAMA','203003');
INSERT INTO scenario.current_product VALUES('03','MELON','AOMORI','203003');
INSERT INTO scenario.current_product VALUES('04','ACEROLA','SAITAMA','202003');
INSERT INTO scenario.current_product VALUES('05','BANANA','AOMORI','202003');
INSERT INTO scenario.current_product VALUES('06','CERRY','AOMORI','203003');
INSERT INTO scenario.current_product VALUES('07','CRANBERRY','SAITAMA','202003');
INSERT INTO scenario.current_product VALUES('08','FIG','AOMORI','202003');
INSERT INTO scenario.current_product VALUES('09','GUAVA','SAITAMA','202003');
INSERT INTO scenario.current_product VALUES('10','KIWI','AOMORI','203003');
INSERT INTO scenario.current_product VALUES('11','LEMON','SAITAMA','202003');
INSERT INTO scenario.current_product VALUES('12','LIME','AOMORI','203003');
INSERT INTO scenario.current_product VALUES('13','MANGO','SAITAMA','202003');
INSERT INTO scenario.current_product VALUES('14','ORANGE','AOMORI','203003');
INSERT INTO scenario.current_product VALUES('15','PAPAYA','SAITAMA','202003');
SELECT * FROM scenario.current_product;

DROP TABLE IF EXISTS scenario.current_warehouse;
CREATE TABLE scenario.current_warehouse (id varchar(50), name varchar(50));
INSERT INTO scenario.current_warehouse VALUES('01','WAREHOUSE1');
SELECT * FROM scenario.current_warehouse;
