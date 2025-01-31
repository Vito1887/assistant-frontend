export type MODALS = keyof Props;

export type Modals = {
  [P in MODALS]: { name: P; data: Props[P]; orderUID: string };
}[MODALS];

type Props = {};
