    /* **************************************
     * ************        
     *                            
     * Create a NodeText
     *                            
     * ************        
     ************************************** */
    
    function createText(text) {

        return document.createTextNode(text);

    }
    
    
    
    
    
    
    
    /* **************************************
     * ************        
     *                            
     * Create a NodeElementHtml
     *                            
     * ************        
     ************************************** */
   
    function create(tag, attributesOrText) {

        /* functions */
        function createText(text) {

            return document.createTextNode(text);

        }

        /* create element */
        var element = document.createElement(tag);

        /* **************************************
         * ************
         *
         * create attributes
         *
         * ************
         ************************************** */

        if (typeof attributesOrText !== 'undefined') {

            /* id */
            if (typeof attributesOrText['id'] !== 'undefined') {
                element.id = attributesOrText['id'];
            }

            /* href */
            if (typeof attributesOrText['href'] !== 'undefined') {
                element.href = attributesOrText['href'];
            }

            /* class */
            if (typeof attributesOrText['class'] !== 'undefined') {
                element.classList = attributesOrText['class'];
            }

            /* title */
            if (typeof attributesOrText['title'] !== 'undefined') {
                element.title = attributesOrText['title'];
            }
            
            /* src */
            if (typeof attributesOrText['src'] !== 'undefined') {
                element.src = attributesOrText['src'];
            }

            /* TEXTE */
            if (typeof attributesOrText['text'] !== 'undefined') {
                element.appendChild(createText(attributesOrText['text']));
            }

        }
        
        return element;

    }
