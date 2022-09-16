/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ["Bash", "Counter", "Healing"];
interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: "Anto",
  hp: 250,
  habilidades: ["Bash", "Counter", "Healing"],
};
personaje.puebloNatal = "Macondo";

console.table(personaje);
