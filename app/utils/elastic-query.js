import Ember from 'ember';

/**
 * @module ember-preprints
 * @submodule utils
 */

/**
 * Backslash-escape characters with special meaning to elasticsearch, to prevent queries from failing
 *   https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#_reserved_characters
 *
 * @param {String} text
 * @returns {*}
 */
function elasticEscape(text) {
    if (Ember.$.type(text) === 'string') {
        return text.replace(/[+\-=><!(){}\[\]^"~*?:\\/]|\&\&|\|\|/g, '\\$&');
    }
    return text;
}

export { elasticEscape };

