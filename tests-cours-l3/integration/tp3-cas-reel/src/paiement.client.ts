export interface PaiementClient {
  debiter(montant: number, reference: string): Promise<{ accepte: boolean; transactionId?: string }>;
}
