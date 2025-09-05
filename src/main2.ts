// 1) Våra typer (ordlista)
type Role = "student" | "nonStudent";               // type alias: namnger en union

interface Person {                                   // interface: form på en person
    name: string;
    age: number;
    role: Role;
}

// 2) Hämta element (TS hjälper oss att få rätt typ)
const form = document.querySelector<HTMLFormElement>("#person-form")!;
const output = document.querySelector<HTMLElement>("#output")!;
const studentBox = form.querySelector<HTMLInputElement>("input[name=isStudent]")!;
const studentFields = document.querySelector<HTMLElement>("#student-fields")!;

// Visa/dölj studentfält
studentBox.addEventListener("change", () => {
    studentFields.style.display = studentBox.checked ? "block" : "none";
});
studentFields.style.display = "none";

// 3) När man skickar formuläret: skapa ett Person-objekt
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "");
    const age = Number(fd.get("age") ?? 0);
    const isStudent = !!fd.get("isStudent");          // checkbox ⇒ ”student” eller inte

    const person: Person = isStudent
        ? {
            name,
            age,
            role: "student",

        }
        : { name, age, role: "nonStudent" };

    // 4) Visa resultatet
    const line = person.role === "student"
        ? `${person.name}, ${person.age} år – Är ${person.role})`
        : `${person.name}, ${person.age} år – Är cke student`;

    output.innerHTML = `
    <p>${line}</p>
    <pre>${JSON.stringify(person, null, 2)}</pre>
  `;
});