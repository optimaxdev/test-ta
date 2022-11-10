You are a TA engineer, you have a repository with a `__specs__` subdirectory(integration tests), yesterday a couple of frontend developers decided to implement some cool features(popup 🤯 ), along with this, making a few "unimportant" changes.

## Your task is to fix failing test:
- Fix wrong [css](https://www.w3schools.com/cssref/css_selectors.asp) / [xpath](https://www.w3schools.com/xml/xpath_syntax.asp) selector
- `__specs__/tests/mock.spec.ts` - fix wrong fixture returning form mock
- `__specs__/tests/addItemPopup.spec.ts` - finish an incomplete test
- `__specs__/tests/itemCount.spec.ts` - write negative quantity test

## Helpfull commands

| Command               | Description          | Directory          |
| --------------------- | -------------------- | ------------------ |
| yarn                  | install all packages | `/` & `/__specs__` |
| yarn test [test name] | run test             | `/__specs__`       |
| yarn start            | start fronend        | `/`                |
