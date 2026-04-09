import stilos from './styles.module.css';

type GenericHtmlProps = {
    children: React.ReactNode
};

export function Generichtml({ children }: GenericHtmlProps) {
    return <div className={stilos.genericHtml}>{children}</div>
}