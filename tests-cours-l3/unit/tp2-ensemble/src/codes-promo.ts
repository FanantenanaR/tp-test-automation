export interface CodePromo {
  code: string;
  pourcentage: number;
  actif: boolean;
}

export class RegistreCodesPromo {
  private codes = new Map<string, CodePromo>();

  ajouter(codePromo: CodePromo): void {
    this.codes.set(codePromo.code.toUpperCase(), codePromo);
  }

  trouver(code: string): CodePromo | undefined {
    return this.codes.get(code.toUpperCase());
  }
}
