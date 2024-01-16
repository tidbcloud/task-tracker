USE tasktracker;
UPDATE `todos` SET 
`status` = IF(length(${status})>0,${status},`status`),
`task` = IF(length(${task})>0,${task},`task`),
`description` = IF(length(${description})>0,${description},`description`)
 WHERE `id` = ${id} ;