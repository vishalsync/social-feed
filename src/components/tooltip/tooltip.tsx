interface TooltipProps {
    className?: string

}

const Tooltip: React.FC<TooltipProps> = (props) => {

    const { className, children} = props;
    
    return (
        <div className={`absolute shadow-md z-50 space-x-4 bg-gray-100 p-2 rounded-md ${className}`}>
            {children}
        </div>
    );

}// End of Tooltip component


export default Tooltip;