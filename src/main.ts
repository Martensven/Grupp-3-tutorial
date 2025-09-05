type Role = "student" | "nonStudent";

interface formData {
  name: string;
  age: number;
  role: Role;
  //   Vilket passar bäst för email: boolean? string? number?
}

const form = document.querySelector<HTMLFormElement>("#person-form")!;
const displayInputs = document.querySelector<HTMLElement>("#displayInputData")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);

  const person: formData = {
    name: String(fd.get("stringInput") ?? ""),
    age: Number(fd.get("numberInput") ?? 0),
    role: (fd.get("radio") as Role) ?? "nonStudent",

    // "email" ska ha samma struktur som "namn"
  };

  if (person.role !== "student") {
    alert("Du måste vara student för att gå vidare!");
    return;
  }

  displayInputs.innerHTML = `
    <p>Hej ${person.name}, vad kul att du pluggar vid ${person.age} års ålder!<p>
    `;
  // Vad kan behövas läggas till i texten här nedanför för att email ska synas i texten?
  // kommentera ur raden nedan och skriv in det som saknas innanför "måsvingarna"

  //   displayInputs.innerHTML += `Tack, då kan vi nå dig på: ${}`;
});
