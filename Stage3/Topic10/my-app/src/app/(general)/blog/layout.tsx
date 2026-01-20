

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="p-8 border-4 border-amber-600 ">
            {children}
        </div>
    );
}