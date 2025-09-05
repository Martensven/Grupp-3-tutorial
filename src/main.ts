type Role = "student" | "nonStudent"

interface formData {
    name: string,
    age: number,
    role: Role;
}

const form = document.querySelector<HTMLFormElement>("#person-form")!;
const displayInputs = document.querySelector<HTMLElement>("#displayInputData")!;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);

    const person: formData = {
        name: String(fd.get("stringInput") ?? ""),
        age: Number(fd.get("numberInput") ?? 0),
        role: (fd.get("radio") as Role) ?? "nonStudent"
    }

    if (person.role !== "student") {
        alert("Du måste vara student för att gå vidare!");
        return;
    }

    displayInputs.innerHTML = `
    <p>Hej ${person.name}, vad kul att du pluggar vid ${person.age} års ålder!<p>
    `
})



