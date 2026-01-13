import { cls } from "../../src/utils/cls"

describe('cls()', () => {
  test('joins class names with space', () => {
    expect(cls('btn', 'active')).toBe('btn active')
  })

  test('filters out falsy values', () => {
    expect(cls('btn', false, null, undefined, 'active')).toBe('btn active')
  })

  test('returns single class if only one is truthy', () => {
    expect(cls('btn')).toBe('btn')
  })

  test('returns empty string when all values are falsy', () => {
    expect(cls(null, false, undefined, '')).toBe('')
  })

  test('works with conditional expressions', () => {
    const isActive = true
    const isDisabled = false

    expect(
      cls(
        'btn',
        isActive && 'active',
        isDisabled && 'disabled'
      )
    ).toBe('btn active')
  })
})
