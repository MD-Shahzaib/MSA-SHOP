// action for setTheme.
function setTheme(theme) {
    console.log('inside action', theme);
    return {
        type: 'SET_THEME',
        data: theme
    }
}

// action for removeTheme.
/*
function removeTheme(theme) {
    return {
        type: 'REMOVE_THEME',
    }
}
*/

export {
    setTheme,
    // removeTheme
}