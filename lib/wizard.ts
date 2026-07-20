/** localStorage key: wizard finished, closed, or first-visit prompt dismissed */
export const WIZARD_DONE_KEY = "sunrise-wizard-done";

export function isWizardDone(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return localStorage.getItem(WIZARD_DONE_KEY) === "1";
  } catch {
    return true;
  }
}

export function markWizardDone(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(WIZARD_DONE_KEY, "1");
  } catch {
    // private mode / quota
  }
}
