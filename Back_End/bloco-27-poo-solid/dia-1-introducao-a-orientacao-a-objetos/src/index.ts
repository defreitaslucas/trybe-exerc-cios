class PessoaEstudante {
  private matricula: string;
  private name: string;
  private notesExams: number[];
  private notesTrabs: number[];

  constructor(matricula: string, name: string) {
    this.matricula = matricula;
    this.name = name;
    this.notesExams = [];
    this.notesTrabs = [];
  }
	public get $matricula(): string {
		return this.matricula;
	}
	public set $matricula(value: string) {
		this.matricula = value;
	}
	public get $name(): string {
		return this.name;
	}
	public set $name(value: string) {
		this.name = value;
	}
	public get $notesExams(): number[] {
		return this.notesExams;
	}
	public set $notesExams(value: number[]) {
		this.notesExams = value;
	}
	public get $notesTrabs(): number[] {
		return this.notesTrabs;
	}
	public set $notesTrabs(value: number[]) {
		this.notesTrabs = value;
	}
  sumGrades(): number {
    return [...this.notesExams, ...this.notesTrabs]
      .reduce((previousNote, note) => {
        note += previousNote;

        return note;
      }, 0);
  }
  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.notesExams.length + this.notesTrabs.length;

    return Math.round(sumGrades / divider);
  }
}

const personOne = new PessoaEstudante('202001011', 'Maria da Silva');

personOne.$notesExams = [25, 20, 23, 23];
personOne.$notesTrabs = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());