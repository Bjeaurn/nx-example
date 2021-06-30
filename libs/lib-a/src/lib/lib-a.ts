import { circA } from '@circ-dep-test/circ-a';

export function libA(): string {
  return 'web';
}

export function circular(): string {
  return circA();
}
