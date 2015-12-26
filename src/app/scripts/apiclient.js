'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Fetch = require('node-fetch');
var OAuth = require('oauth');

var GetApiClient = (function () {
    function GetApiClient(options) {
        _classCallCheck(this, GetApiClient);

        this.baseUrl = options.base_url || '//';
        this.oauth = options.oauth || false;
        this.debug = options.debug || false;
        this.oAuth = this.oauth ? new OAuth.OAuth(this.oauth.request_token, this.oauth.access_token, this.oauth.consumer_key, this.oauth.consumer_secret, '1.0A', null, 'HMAC-SHA1') : false;
    }

    _createClass(GetApiClient, [{
        key: 'consoleDebugMessage',
        value: function consoleDebugMessage(text, data) {
            if (this.debug) {
                console.log('\x1b[36m', text, '\x1b[0m', data);
            }
        }
    }, {
        key: 'serialize',
        value: function serialize(params) {
            return Object.keys(params).map(function (key) {
                return key + '=' + params[key];
            }).join('&');
        }
    }, {
        key: 'onGetData',
        value: function onGetData(data) {

            if (!!data && !!data.json) {
                data = data.json();
            }

            return data;
        }
    }, {
        key: 'fetchData',
        value: function fetchData(url) {
            var _self = this;

            return Fetch(url).then(function (data) {
                return _self.onGetData(data);
            });
        }
    }, {
        key: 'getDataOAuth',
        value: function getDataOAuth(url) {
            var _self = this;

            return new Promise(function (resolve, reject) {
                _self.oAuth.get(url, _self.oauth.access_token, _self.oauth.access_token_secret, function (e, data, res) {
                    if (e) {
                        reject(e);
                    } else {
                        resolve(_self.onGetData(JSON.parse(data)));
                    }
                });
            });
        }
    }, {
        key: 'getData',
        value: function getData(url) {
            var _self = this;

            return _self.fetchData(url);
        }
    }, {
        key: 'get',
        value: function get(src, params) {
            var _self = this,
                _url = '' + _self.baseUrl + src + '?' + _self.serialize(params);

            _self.consoleDebugMessage('url', _url);

            if (_self.oauth) {
                return this.getDataOAuth(_url);
            }

            return this.getData(_url);
        }
    }]);

    return GetApiClient;
})();

exports['default'] = GetApiClient;
module.exports = exports['default'];
