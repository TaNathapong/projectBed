//----------- initialize -------------
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.manageWorkSchedule = functions.https.onRequest((req, res) => {
    const Today = Date.now();
    const db = admin.database();

    //------------ uid user --------------
    const resident1 = 'qiIfuIX2y7T2t5OT3dnVLQvumi72';
    const resident2 = 'xwfOsn1UipWxqaMuVnv4US4ClNm1';
    const resident3 = 'whGXWX2CEXSEK268bbTqmoRDAUh1';
    const resident4 = '2EGZq3Zx0AVULQIoCq7VoN4rpsa2';
    const resident5 = '0gMmOdaDFhV6gSqHdGzvubDP3sh2';
    const resident6 = '92Un8lkEDtfPpxM2ZSNeTQqVVj43';
    const resident7 = 'IOg2LESXA5b6PuMUUmprpfpI8so1';
    const resident8 = 'xxFKsW73BKfsjOzbMvqpdJJuH8l2';
    const resident9 = 'ieXuwevBiLTHFBTmLG9bmeZyn1S2';

    //--------------- day ----------------
    const week1 = 1523552400000;
    const week2 = 1523638800000;
    const week3 = 1523725200000;
    const week4 = 1523811600000;
    const week5 = 1523898000000;
    const week6 = 1523984400000;

    //------------ functions -------------
    if (Today >= week1 && Today < week2) {
        db.ref('profiles/' + resident1).update({
            ward: "4ก",
            update: Today
        });
        db.ref('profiles/' + resident2).update({
            ward: "4ข",
            update: Today
        });
        db.ref('profiles/' + resident3).update({
            ward: "4ค",
            update: Today
        });
        db.ref('profiles/' + resident4).update({
            ward: "AE3",
            update: Today
        });
        db.ref('profiles/' + resident5).update({
            ward: "สว9A",
            update: Today
        });
        db.ref('profiles/' + resident6).update({
            ward: "สว9B",
            update: Today
        });
        db.ref('profiles/' + resident7).update({
            ward: "MICU1",
            update: Today
        });
        db.ref('profiles/' + resident8).update({
            ward: "MICU2",
            update: Today
        });
        db.ref('profiles/' + resident9).update({
            ward: "CCU",
            update: Today
        });
        console.log("update week 1");
    } else if (Today >= week2 && Today < week3) {
        db.ref('profiles/' + resident1).update({
            ward: "CCU",
            update: Today
        });
        db.ref('profiles/' + resident2).update({
            ward: "4ก",
            update: Today
        });
        db.ref('profiles/' + resident3).update({
            ward: "4ข",
            update: Today
        });
        db.ref('profiles/' + resident4).update({
            ward: "4ค",
            update: Today
        });
        db.ref('profiles/' + resident5).update({
            ward: "AE3",
            update: Today
        });
        db.ref('profiles/' + resident6).update({
            ward: "สว9A",
            update: Today
        });
        db.ref('profiles/' + resident7).update({
            ward: "สว9B",
            update: Today
        });
        db.ref('profiles/' + resident8).update({
            ward: "MICU1",
            update: Today
        });
        db.ref('profiles/' + resident9).update({
            ward: "MICU2",
            update: Today
        });
        console.log("update week 2");
    } else if (Today >= week3 && Today < week4) {
        db.ref('profiles/' + resident1).update({
            ward: "MICU2",
            update: Today
        });
        db.ref('profiles/' + resident2).update({
            ward: "CCU",
            update: Today
        });
        db.ref('profiles/' + resident3).update({
            ward: "4ก",
            update: Today
        });
        db.ref('profiles/' + resident4).update({
            ward: "4ข",
            update: Today
        });
        db.ref('profiles/' + resident5).update({
            ward: "4ค",
            update: Today
        });
        db.ref('profiles/' + resident6).update({
            ward: "AE3",
            update: Today
        });
        db.ref('profiles/' + resident7).update({
            ward: "สว9A",
            update: Today
        });
        db.ref('profiles/' + resident8).update({
            ward: "สว9B",
            update: Today
        });
        db.ref('profiles/' + resident9).update({
            ward: "MICU1",
            update: Today
        });
        console.log("update week 3");
    } else if (Today >= week4 && Today < week5) {
        db.ref('profiles/' + resident1).update({
            ward: "MICU1",
            update: Today
        });
        db.ref('profiles/' + resident2).update({
            ward: "MICU2",
            update: Today
        });
        db.ref('profiles/' + resident3).update({
            ward: "CCU",
            update: Today
        });
        db.ref('profiles/' + resident4).update({
            ward: "4ก",
            update: Today
        });
        db.ref('profiles/' + resident5).update({
            ward: "4ข",
            update: Today
        });
        db.ref('profiles/' + resident6).update({
            ward: "4ค",
            update: Today
        });
        db.ref('profiles/' + resident7).update({
            ward: "AE3",
            update: Today
        });
        db.ref('profiles/' + resident8).update({
            ward: "สว9A",
            update: Today
        });
        db.ref('profiles/' + resident9).update({
            ward: "สว9B",
            update: Today
        });
        console.log("update week4");

    } else if (Today >= week5 && Today < week6) {
        db.ref('profiles/' + resident1).update({
            ward: "สว9B",
            update: Today
        });
        db.ref('profiles/' + resident2).update({
            ward: "MICU1",
            update: Today
        });
        db.ref('profiles/' + resident3).update({
            ward: "MICU2",
            update: Today
        });
        db.ref('profiles/' + resident4).update({
            ward: "CCU",
            update: Today
        });
        db.ref('profiles/' + resident5).update({
            ward: "4ก",
            update: Today
        });
        db.ref('profiles/' + resident6).update({
            ward: "4ข",
            update: Today
        });
        db.ref('profiles/' + resident7).update({
            ward: "4ค",
            update: Today
        });
        db.ref('profiles/' + resident8).update({
            ward: "AE3",
            update: Today
        });
        db.ref('profiles/' + resident9).update({
            ward: "สว9A",
            update: Today
        });
        console.log("update week 5");
    } else if (Today >= week6) {
        db.ref('profiles/' + resident1).update({
            ward: "สว9A",
            update: Today
        });
        db.ref('profiles/' + resident2).update({
            ward: "สว9B",
            update: Today
        });
        db.ref('profiles/' + resident3).update({
            ward: "MICU1",
            update: Today
        });
        db.ref('profiles/' + resident4).update({
            ward: "MICU2",
            update: Today
        });
        db.ref('profiles/' + resident5).update({
            ward: "CCU",
            update: Today
        });
        db.ref('profiles/' + resident6).update({
            ward: "4ก",
            update: Today
        });
        db.ref('profiles/' + resident7).update({
            ward: "4ข",
            update: Today
        });
        db.ref('profiles/' + resident8).update({
            ward: "4ค",
            update: Today
        });
        db.ref('profiles/' + resident9).update({
            ward: "AE3",
            update: Today
        });
        console.log("update week 6");
    } else {
        console.log("no function execute");
    }
    res.redirect(200);
});