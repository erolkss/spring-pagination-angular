SELECT * FROM pagination.user LIMIT 10;

--- Commands that populate the 'status' record with 'BANNED' or 'ACTIVE' for each user in the 'user' table.

SET SQL_SAFE_UPDATES = 0;
UPDATE user SET status = 'BANNED' WHERE (id % 2 = 0);
UPDATE user SET status = 'BANNED' WHERE (id > 40 AND id < 28);
UPDATE user SET status = 'ACTIVE' WHERE (status != 'BANNED');
UPDATE user SET status = 'INACTIVE' WHERE (id % 3 = 0);


--- Delete if have more them 100 registers
DELETE FROM pagination.user WHERE id > 100;

--- Populating 'img_url' record with random photos from 'randomuser' api
UPDATE pagination.user SET image_url = CONCAT('https://randomuser.me/api/portraits/men/', FLOOR(RAND() * 100), '.jpg');

SELECT FLOOR(RAND() * 100);


ALTER TABLE pagination.user
DROP COLUMN imageUrl;