require.config({
    /**
    *  All of the libraries in the paths below will be packaged by RJS Optimizer
    *  in to the modules/includes/js directory 
    *  Note: paths are relative to the compiling cwd - see Gruntfile.js
    **/
    paths:{
        require:'../../node_modules/requirejs/require'
        ,underscore:'../../bower_components/underscore/underscore-min'
        ,jquery:'../../bower_components/jquery/dist/jquery.min'
        ,Backbone:'../../bower_components/backbone/backbone-min'
        ,bootstrap:'../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min'
        ,html5shiv: '../../bower_components/html5shiv/dist/html5shiv.min'
        ,fastclick: '../../bower_components/fastclick/lib/fastclick'
        ,iCheck: '../../bower_components/iCheck/icheck.min'
        ,jsonlint: '../../bower_components/jsonlint/lib/jsonlint'
        ,modernizr: '../../bower_components/modernizr/lib/build'
        ,respond: '../../bower_components/respond/dest/respond.min'
        ,switchery: '../../bower_components/switchery/dist/switchery.min'
        ,scrollify: '../../bower_components/Scrollify/jquery.scrollify.min'
        ,navgoco: '../../bower_components/navgoco/src/jquery.navgoco.min'
        ,"es6-shim": '../../bower_components/es6-shim/es6-shim.min'
        ,prism: '../../bower_components/prism/prism'
        ,clipboard: '../../bower_components/clipboard/dist/clipboard.min'
        ,messenger: '../../modules/relax/includes/plugins/messenger/js/messenger.min'
        ,messengerTheme: '../../modules/relax/includes/plugins/messenger/js/messenger-theme-flat'
    }
    
    /**
    * Shim config for window globals
    * Specify any upstream dependencies and the global variables exported
    **/
    ,shim:{
        underscore:{exports:'_'}
        ,jquery:{exports:['jQuery','$']}
        ,Backbone:{exports:'Backbone', deps:['jquery', 'underscore'] }
        ,bootstrap:{ exports:'Bootstrap', deps:['jquery'] }
        ,html5shiv:{exports:'html5shiv'}
        ,navgoco:{exports:'navgoco',deps:['jquery']}
        ,"es6-shim":{exports:'es6-shim'}
        ,jsonlint:{exports:'jsonlint'}
        ,clipboard:{exports:'Clipboard'}
        ,messenger:{exports:'Messenger'}
        ,messengerTheme:{deps: [ 'messenger' ]}
        ,scrollify:{deps: [ 'jquery' ]}
    }

    /**
    * Any items in the deps array will be pre-compiled in to the Relax module includes/js/globals.js file and will be available immediately on every request
    **/
    ,deps:['jquery','bootstrap','underscore','Backbone','respond','switchery','navgoco','html5shiv','iCheck','fastclick','messenger','messengerTheme','scrollify']
});