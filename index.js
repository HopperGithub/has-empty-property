/*!
 * hasEmptyProperty <https://github.com/HopperGithub/has-empty-property>
 *
 * Copyright (c) 2018-present, Hopper Sun.
 * Released under the MIT License.
 */

'use strict';

module.exports = function (obj) {
    var empty = true;
    for (var property in obj) {
        empty = false;
        if (obj[property] == undefined || obj[property] == null) {
            return true;
        }
        if (obj[property].constructor == String && obj[property].length == 0) {
            return true;
        }
    }
    return empty;
}