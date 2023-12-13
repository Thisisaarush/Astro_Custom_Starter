// Consume states directly in .astro files
// Consume states with the help of `useStores` in .jsx,.tsx files

import { atom } from "nanostores"

// create more states as per need
export const testState = atom(false)
