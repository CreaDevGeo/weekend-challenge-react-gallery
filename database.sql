--DROP TABLE "gallery-list";

CREATE TABLE "gallery-list" 
("id" SERIAL PRIMARY KEY,
"path" varchar(200),
"description" TEXT,
"likes" INT);

INSERT INTO "gallery-list" ("id", "path", "description", "likes")
VALUES('1', 'images/black-silhouettes.jpg', 'Art of monkey-like creatures silhouettes dancing.', '0' ), ('2', 'images/mask.jpg', 'A child-like mask with gray and other colors.', '0'),
('3', 'images/overwhelming-love.jpg', 'Art drawing of a cat uncomfortably being pet by many hands.', '0'),
('4', 'images/pumpkin-knight.jpg', 'Art drawing of a shimmering pumpkin-headed knight holding a battle axe.', '0'),
('5', 'images/smiling-purple-face.jpg', 'Art illustration of a purple faced, spiky haired person, smiling with sharp teeth.', '0'),
('6', 'images/spooky-surprise.jpg', 'Art illustration of a quirky ghost startling a blonde-haired person.', '0');