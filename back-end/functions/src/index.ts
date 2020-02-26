import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

export const helloFromApp = functions.https.onRequest((req, res) => {
 admin.firestore().doc('users').get()
 .then(snapshot => {
     const data = snapshot.get('uid');
     res.send(data);
 })
 .catch(err => {
     console.log(err);
     res.status(500).send(err);
 })
});

export const onUserCreate = functions.database.ref('users')
.onCreate((snap, context) => {
    console.log(`This user had been create !!!`);
});

export const onFilesCreate = functions.database.ref('files')
.onCreate((snap, context) => {
    console.log(`This file had been create !!!`);
});

export const onStorageCreate = functions.storage.object().onFinalize((event: any) => {
    console.log(event);
});
