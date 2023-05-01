export type ButtonProps = {
    content: String;
    isArrow?: boolean;
    handler: React.MouseEventHandler<HTMLButtonElement>;
    isPrimary?: boolean;
}