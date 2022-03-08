const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

    constructor(){

        this.firebaseConfig = {
            
            apiKey: "AIzaSyBJl1Cjm9ZtKKx1S7rNPVHL1t6rJ3KIxWs",
            authDomain: "whatsapp-clone-a8b7a.firebaseapp.com",
            projectId: "whatsapp-clone-a8b7a",
            storageBucket: "whatsapp-clone-a8b7a.appspot.com",
            messagingSenderId: "781441243620",
            appId: "1:781441243620:web:bea326a3ad2c276036cff1"
        
        }

        this.init();

    }

    init(){

        if (!window._initializedFirebase) {
            firebase.initializeApp(this.firebaseConfig);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

            window._initializedFirebase = true;
        }
    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    }

    initAuth(){

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then(result => {


                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user,
                    token
                });

            });
            
            
            }).catch(err=>{

                f(err);

            });

        

        }
    }
