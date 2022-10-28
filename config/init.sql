create table tasks (
    id SERIAL PRIMARY KEY,
    hardness varchar(20),
    text varchar(255)
);

-- EINFACH
INSERT INTO TASKS (hardness, text) VALUES ('EINFACH', '(Name) Erzähle deine peinlichste geschichte.'); 
INSERT INTO TASKS (hardness, text) VALUES ('EINFACH', '(Name) zeige deine letzte versendete oder bekommene sprachnachricht'); 
INSERT INTO TASKS (hardness, text) VALUES ('EINFACH', '(Name) zeige dein zuletzt gelöstes foto'); 
INSERT INTO TASKS (hardness, text) VALUES ('EINFACH', '(Name) schweige für die nächste runde'); 
INSERT INTO TASKS (hardness, text) VALUES ('EINFACH', '(Name) sprich für die nächste runde mit einem akzent'); 
INSERT INTO TASKS (hardness, text) VALUES ('EINFACH', '(Name) deine mitspieler mischen dir einen mystery shot'); 
INSERT INTO TASKS (hardness, text) VALUES ('EINFACH', '(Name) tausche dein getränk mit dem vollsten am tisch (ausser es ist dein eigenes)'); 
INSERT INTO TASKS (hardness, text) VALUES ('EINFACH', '(Name) sing ein lied'); 
INSERT INTO TASKS (hardness, text) VALUES ('EINFACH', '(Name) du darfst eine neue regel für diese runde festlegen'); 
INSERT INTO TASKS (hardness, text) VALUES ('EINFACH', '(Name) mache 10 liegestützen');

-- MITTEL
INSERT INTO TASKS (hardness, text) VALUES ('MITTEL', '(Name) trink dein bodycount');
INSERT INTO TASKS (hardness, text) VALUES ('MITTEL', '(Name) tanze zu einem song deiner wahl für 1 minute');
INSERT INTO TASKS (hardness, text) VALUES ('MITTEL', '(Name) rufe den 3. kontakt in deinem handy an und singe happy birthday');
INSERT INTO TASKS (hardness, text) VALUES ('MITTEL', '(Name) versuche deine beine hinter den kopf zu bekommen');
INSERT INTO TASKS (hardness, text) VALUES ('MITTEL', '(Name) imitier ein tier');
INSERT INTO TASKS (hardness, text) VALUES ('MITTEL', '(Name) mach einen purzelbaum');
INSERT INTO TASKS (hardness, text) VALUES ('MITTEL', '(Name) iss etwas ohne die hände zur hilfe zu nehmen');

-- SCHWEIRIG
INSERT INTO TASKS (hardness, text) VALUES ('SCHWIERIG', '(Name) lecke den boden ab');
INSERT INTO TASKS (hardness, text) VALUES ('SCHWIERIG', '(Name) geh nach hause');
INSERT INTO TASKS (hardness, text) VALUES ('SCHWIERIG', '(Name) die person die dich am besten kennt darf dir eine aufgabe stellen');
INSERT INTO TASKS (hardness, text) VALUES ('SCHWIERIG', '(Name) summ ein lied, wenn es niemand errät musst du die bestrafung trotzdem machen');
INSERT INTO TASKS (hardness, text) VALUES ('SCHWIERIG', '(Name) führe eine neue regel fürs ganze spiel ein');
