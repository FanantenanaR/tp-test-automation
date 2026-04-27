import { test } from '@playwright/test';

test.describe('Boutique — panier', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('devrait_afficher_le_panier_vide_au_chargement', async ({ page }) => {
    // À compléter ensemble
  });

  test('devrait_ajouter_un_article_au_panier_quand_on_clique_sur_ajouter', async ({ page }) => {
    // À compléter ensemble
  });

  test('devrait_mettre_a_jour_le_total_quand_plusieurs_articles_sont_ajoutes', async ({ page }) => {
    // À compléter ensemble
  });

  test('devrait_vider_le_panier_quand_on_clique_sur_vider', async ({ page }) => {
    // À compléter ensemble
  });
});
