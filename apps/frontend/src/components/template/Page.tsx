export interface PageProps {
    children: React.ReactNode;
    className?: string;
}

export default function Page(props: PageProps) {
    return (
        <div className="
            flex flex-col items-center py-10 min-h-screen
            bg-[url('/background.png')] bg-cover
        ">
            <main className={props.className}>
                {props.children}
            </main>
        </div>
    )
}