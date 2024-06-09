export function Button({children, onHandleClick, icon}) {
    return(
        <>
            <button onClick={onHandleClick}>
                <img src={icon}/>
                {children}
            </button>
        </>
    )
        
    
}