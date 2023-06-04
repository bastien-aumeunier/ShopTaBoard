import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const JWTAtom = atomWithStorage('JWT', '')
export const CartAtom = atom(null)
export const AddressIdAtom = atom('')
