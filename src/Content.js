const Content = ({colorItem, setColor, handleColor}) => {
    const message = `Add color name to change the backgroundColor \n :") `;
    return (
        <main>
            <section className="container" style={{ backgroundColor: `${colorItem}` }}>
                <div className="inLineText">
                    {!colorItem ? message : colorItem}
                </div>
            </section>
            <section>
                <form className="addForm" >
                    <label htmlFor="inputText" style={{ margin: '5px' }}>inputText: </label>
                    <input
                        autoFocus 
                        id="inputText"
                        type="text" 
                        placeholder="Add Color Name"
                        value={colorItem}
                        onChange={(e) => setColor(e.target.value)}/>
                    <button
                        type="submit"
                        aria-label="Add Item"
                        onClick={handleColor}>
                        Enter
                    </button>
                </form>
            </section>
        </main>
    )
}

export default Content
