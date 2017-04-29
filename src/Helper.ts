import * as $ from 'jquery';

class Helper {
    /**
     * Creates an element with optional attributes
     *
     * @static
     * @param {string} element Tag of the element to be created
     * @param {Object} [attributes] Attributes to apply to the element
     * @returns {JQuery} JQuery object containing the element
     *
     * @memberOf Helper
     */
    public static c(element: string, attributes?: object): JQuery {
        const e = $(document.createElement(element));
        if (attributes) {
            e.attr(attributes);
        }
        return e;
    }
}

export { Helper };