CREATE DATABASE chinese001 WITH ENCODING 'UTF8';


CREATE TABLE chinese_chars(
  char_id SERIAL PRIMARY KEY,
  char_chinese VARCHAR(32),
  char_pinyin VARCHAR(32),
  char_meaning VARCHAR(120)
);

INSERT INTO  chinese_chars (char_chinese, char_pinyin, char_meaning)
    VALUES 
        (CONCAT(E'\u6211'), CONCAT(E'w', E'\u01d2'), 'I, Me'),
        (CONCAT(E'\u7684'), 'de', 'Of'),
        (CONCAT(E'\u5bb6'), CONCAT(E'ji', E'\u0101'), 'Family, Home'),
        (CONCAT(E'\u6709'), CONCAT(E'y', E'\u01d2', E'u'), 'To have'),
        (CONCAT(E'\u5169'), CONCAT(E'li', E'\u01ce', E'ng'), 'Two');