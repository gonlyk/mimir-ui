/**
 * 
 * @param {{
 *     children: JSX.Element
 *     theme: 'mimir-ui__standard'
 * }} param0 
 * @returns 
 */
function StyleProvider({ children, theme }) {
    return (
        <div className={theme}>
            {children}
        </div>
    )
}

export default StyleProvider