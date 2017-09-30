class SymbolNode {
  constructor(public readonly value: string) { }

  public toString(): string {
    return `${this.value}`;
  }
}

export default SymbolNode;
