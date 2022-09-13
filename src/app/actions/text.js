export const Types = { 
    ADD_ORDENED_TEXT_PRONOUNS: 'text/ADD_ORDENED_TEXT_PRONOUNS',
    ADD_ORDENED_TEXT: 'text/ADD_ORDENED_TEXT',
    ADD_TEXT: 'text/ADD_TEXT',
    EREASEALL_TEXT: 'text/EREASE_ALL'
}

export const Creators = {
    addOrdenedTextPronouns: (ordenedTextPronouns) => ({
        type:  Types.ADD_ORDENED_TEXT_PRONOUNS,
        ordenedTextPronouns
    }),
    addOrdenedText: (ordenedText) => ({
        type: Types.ADD_ORDENED_TEXT,
        ordenedText
    }),
    addText: (text) => ({
        type: Types.ADD_TEXT,
        text
    }),
    ereaseAll: () => ({
        type: Types.EREASEALL_TEXT
    })
}

export default Creators;