const Footer = ({colorStyle, setColorStyle}) => {
    
    const isColor = (strColor) => {
        var s = new Option().style;
        s.color = strColor;
        return (s.color == strColor);
    }
    const colorRender = (colorCheck) => {
        if (!isColor(colorCheck)) {
            return JSON.stringify("Invalid Color Style")
        } else {
            return <font color={colorStyle}>{(colorCheck.toUpperCase())}</font>
        }
    }
    return (
        <footer>
            <h2 >Last Color Style : {`\n`}
                {colorRender(colorStyle)}
            </h2>

            {/* <h2 style={{color:colorStyle}}>
                Last Color Style :{colorRender(colorStyle)}
            </h2> */}
        </footer>
    )
}

export default Footer
