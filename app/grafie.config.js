/**
 * Created by Evan on 2017-01-23.
 */
/******************************************************************************
 * Configurations : Application
 ******************************************************************************/
'use strict';

var appConfig = window.appConfig || {};

window.appConfig = appConfig;

/******************************************************************************
 * Configurations : Components and Dependencies
 ******************************************************************************/
'use strict';

var $appId = 'grafie';

var $dependencies = [
    'ui.router'
];

var $components = [
    'grafie.layout',
    'grafie.home',
    'grafie.profile',
    'grafie.auth',
    'grafie.browse'
];

$dependencies = $dependencies.concat($components);

