import { RiceCooker } from '../model/RiceCooker'
import '@jest/globals'
import {
  add,
  changeState,
  getRiceCookerById,
  getRiceCookersList,
  startCooking
} from '../feature/actions/riceCookersAction'

describe('Test rice cooker action', () => {
  test('Add new rice cooker to list', () => {
    add(1, true)
    add(2, false)

    expect(getRiceCookersList().length === 2)
  })

  test('Change rice cooker state', () => {
    add(1, false)
    const expected = new RiceCooker(1, true)
    expected.isCooking = true
    expected.isPlugged = true

    changeState(1, 'isOperational', true)
    changeState(1, 'isPlugged', true)
    changeState(1, 'isCooking', true)
    expect(getRiceCookerById(1)).toStrictEqual(expected)
  })

  test('Rice cooker started cooking', () => {
    add(3, true)
    startCooking(3)
    expect(getRiceCookerById(3)?.isCooking).toBe(true)
  })
})
