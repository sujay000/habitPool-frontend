import clsx from "clsx"

export const Button = ({
    children,
    onClick,
    mt,
    ml,
    mb,
    mr
}: {
    children: React.ReactNode,
    onClick?: () => void,
    mt?: string,
    ml?: string,
    mb?: string,
    mr?: string
}) => {
    
    const styles = clsx("border-black border-2 rounded-md px-[1rem] py-[0.5rem]", mt && `mt-${mt}`, ml && `ml-${ml}`, mb && `mb-${mb}`, mr && `mr-${mr}`)
    return <button onClick={onClick} className={styles}>
        {children}
    </button>
}