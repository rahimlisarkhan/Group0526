import type { Info } from "../../types/profile";



export const Header = () => {

    const info: Info = {
        fullname: "John Doe",
        age: 30,
        isActive: true,
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }

    return (
        <header>
            <h1>Welcome to the TypeScript App: {info.fullname}</h1>
        </header>
    );
}