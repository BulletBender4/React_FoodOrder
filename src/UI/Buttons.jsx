export default function Buttons({ children, textOnly, className, ...props }) {

    let cssClasses = textOnly ? 'text-button' : 'button';
    cssClasses += ' ' + className;
    return (
        <>
            <button className={cssClasses} {...props}>{children}</button >
        </>
    )
}

// wanna have buttons with background
// text only buttons
// we can adjust button styles by adding it outside the component
// let cssClasses = textOnly ? `text-button ${className}` : 'button';
// its better to use rest property syntax i.e {...props }
// instead of type onClick etc <button onClick = {}>      