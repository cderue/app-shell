import { test, expect } from '@playwright/test';

test("l'utilisateur est capable de créer un projet et de suivre son évolution", async ({ page }) => {
    // Aller sur la page d'accueil
    await page.goto('http://localhost:3000');

    // Click sur créer un projet
    await page.click('text=Créer un projet');
    await page.waitForURL('**/creation-projet');

    // Remplir le formulaire et soumettre
    await page.fill('input[name="name"]', 'Nom du projet');
    await page.fill('textarea[name="message"]', 'Ambition du projet');
    await page.selectOption('select[name="categorie"]', { label: 'Habitation' });
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    // Vérifier qu’on est dans suivi projet et le nom du projet qu’on a créé avant est présent
    await page.waitForSelector('div:has-text("Nom du projet")');
    const nomProjet = await page.innerText('div:has-text("Nom du projet")');
    expect(nomProjet).toBeTruthy();
    await page.click('text=Nom du projet');
    const suivreProjet = await page.innerText('div:has-text("Suivre votre projet : Nom du projet")');
    expect(suivreProjet).toBeTruthy();


    // Cliquer sur suivi produit
    await page.click('text=Suivre vos produits');
    await page.waitForURL('**/suivi-produit');

    // Vérifier que les charts sont présents
    await page.waitForSelector('svg g');
    const gElements = await page.locator('svg g').count();
    expect(gElements).toBeGreaterThan(0);
});
