const Footer = ({colorStyle}) => {
    
    const isColor = (strColor) => {
        var s = new Option().style;
        s.color = strColor;
        return (s.color == strColor);
    }
    const colorRender = (colorCheck) => {
        if (!isColor(colorCheck)) {
            return ;
        } else {
            return JSON.stringify(colorCheck.toUpperCase());
        }
    }
    return (
        <footer>
            <h2 >Last Color Style : {`\n`}
                <font color={colorStyle}>{colorRender(colorStyle)}</font>
            </h2>

            {/* <h2 style={{color:colorStyle}}>
                Last Color Style :{colorRender(colorStyle)}
            </h2> */}
        </footer>
    )
}

export default Footer
