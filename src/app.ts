// import required elements
import { Application, VLayout, Label, installHMR } from 'x4js'

// create the application
let app = new Application( {
	app_name: "template",
	app_version: "1.0.0"
} );

// create the main frame
let frame = new VLayout( {
    content: [
        new Label( { text: "Welcome ! Your X4 application is running" } )
    ]
});

// define it as the app main frame.
app.mainView = frame;

declare const DEBUG;
if( DEBUG ) {
	installHMR()	
}
