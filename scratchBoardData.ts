/**
 * Board has 56 spaces: index 0 = Go; indices 1..55 match list slots 0..54.
 * Buy prices follow Scratch `propertyBuyPrice` (see RAW_PURCHASE_PRICES).
 *
 * `SPACE_DISPLAY_NAMES` matches the **print board** UI (`public/extendedMonopoly1-12282024_print copy.png`).
 * If you re-run `docs/gen_scratch_board_ts.py`, it will overwrite names with Scratch list labels — restore this array from git or from the print board.
 */

export const SCRATCH_PROPERTY_LIST_LENGTH = 55 as const;
export const BOARD_SPACE_COUNT = 56 as const;
export const GO_SPACE_INDEX = 0 as const;
/**
 * Token position while incarcerated (matches list name `Just Visiting`, board space 14).
 * Scratch used list name `Jail` for space 42 (Go to Jail corner), not the holding cell.
 */
export const JAIL_SPACE_INDEX = 14 as const;
/** Go to Jail corner (Scratch list label `Jail`) — use when sending someone to jail. */
export const GO_TO_JAIL_SPACE_INDEX = 42 as const;
/** Income space (not the jail holding cell). */
export const FREE_PARKING_SPACE_INDEX = 28 as const;

export const SPACE_DISPLAY_NAMES: readonly string[] = [
  "Go",
  "Hilton Ave.",
  "Community Chest",
  "Aurora Ave.",
  "Income Tax",
  "Bartle Station",
  "Graham St.",
  "Donaldson St.",
  "Valentine St.",
  "Donaldson Park Station",
  "Magnolia St.",
  "Chance",
  "Benner St.",
  "Johnson St.",
  "Jail / Just Visiting",
  "First Ave.",
  "Raceway Gas",
  "South Adelaide Ave.",
  "Community Chest",
  "Papa John's Station",
  "River Road",
  "Cedar Lane",
  "Leia Lane",
  "Johnson Park Station",
  "Ella Lane",
  "Chance",
  "Gabriel Lane",
  "Ethan Lane",
  "Free Parking",
  "Wayside Road",
  "Community Chest",
  "Cleveland Ave.",
  "Madison Ave.",
  "HPMS Station",
  "Wayne St.",
  "HPHS",
  "Montgomery St.",
  "HP Public Library Station",
  "South Park Ave.",
  "Brookfall Road",
  "Chance",
  "Marshall Drive",
  "Go to Jail",
  "Highland Ave.",
  "Washington Ave.",
  "Community Chest",
  "Lexington Ave.",
  "Chef Ge's Station",
  "Central Ave.",
  "Exeter St.",
  "Parker Road",
  "Dunkin' Station",
  "Chance",
  "Woodbridge",
  "Luxury Tax",
  "Raritan",
];

const RAW_PURCHASE_PRICES: readonly number[] = [
  60,
  99999,
  60,
  99999,
  200,
  75,
  75,
  90,
  200,
  100,
  99999,
  100,
  120,
  99999,
  120,
  150,
  120,
  99999,
  200,
  140,
  140,
  160,
  200,
  180,
  99999,
  180,
  200,
  99999,
  220,
  99999,
  220,
  240,
  200,
  240,
  150,
  260,
  200,
  260,
  260,
  99999,
  280,
  99999,
  280,
  280,
  99999,
  300,
  200,
  300,
  300,
  320,
  200,
  99999,
  350,
  99999,
  400,
];

export function purchasePriceForSpace(spaceIndex: number): number | undefined {
  if (spaceIndex <= 0 || spaceIndex >= BOARD_SPACE_COUNT) return undefined;
  const raw = RAW_PURCHASE_PRICES[spaceIndex - 1];
  if (raw >= 99999) return undefined;
  return raw;
}
