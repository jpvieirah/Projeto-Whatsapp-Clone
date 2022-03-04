const firebase = require("firebase/app");
require('firebase/firestore');

export class Firebase {

    constructor() {

        this._config = {
            apiKey: "AIzaSyCmJQFpT_BwijT_6Y4dnAYi58tQoAoC4JM",
            authDomain: "whatsapp-clone-90fe2.firebaseapp.com",
            projectId: "whatsapp-clone-90fe2",
            storageBucket: "whatsapp-clone-90fe2.appspot.com",
            messagingSenderId: "940544319239",
            appId: "1:940544319239:web:aa599224c5074ed683efa2"
          };
        
        this.init();

        

    }

    init() {

        if(!this._initialized){
            firebase.initializeApp(this._config);


            this._initialized = true;
        }

        

    }

    static db() {

        return firebase.firestore();

    }

    static hd() {

        return firebase.storage();

    }

}