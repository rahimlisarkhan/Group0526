import Countdown from "@/components/Countdown";

export default function About() {

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                This is the About Page.
            </h1>

            <Countdown />
        </div>
    );
}

// CSR - Client Side Rendering
// SSR - Server Side Rendering