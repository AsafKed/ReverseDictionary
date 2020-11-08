// Should have type, props. Props are dependent on the component.
let components = []

// Components have id as a Date for ordering purposes when printing on-screen.
export default class ComponentStore {
    /**
     * Add selector component to component store.
     */
    addSelector() {
        components.push({
            id: Date.now(),
            type: 'selector'
        })
    }


    /**
     * Add text component to component store.
     * text_type can be 'description' or 'synonym'.
     * set is a boolean.
     *
     * @param text_type
     * @param set
     */
    addText(text_type, set) {
        components.push({
            id: Date.now(),
            type: 'text',
            props: {
                text_type: text_type,
                set: set
            }
        })
    }

    /**
     * Remove component from component store. Type takes 'selector' and 'text'
     *
     * @param type
     */
    remove(type) {
        // Remove any InputSelectors still left in the components
        components.forEach(component => {
            if (component.type === type) {
                components.splice(components.indexOf(component), 1)
            }
        })
    }

    /**
     * Return component list.
     * @returns {[]}
     */
    getComponents() {
        return components
    }
}