# reliable-touch-element

An element providing a reliable `onTouch` callback.
The touch is reliable because the component need to have a `touchstart` and a `touchend` event, without any `touchmove` events, in order to trigger the `onTouch` callback.

For example, can be convenient when you have a scrollable list with touchable elements inside, in order to show/display, or navigate to, the element touched.

## Usage

```jsx
import { ReliableTouchElement } from "reliable-touch-element"
// or
import ReliableTouchElement from "reliable-touch-element"
// but prefer the first 😉

<ReliableTouchElement onTouch={handleTouch}>
  Hello World!
</ReliableTouchElement>
```

## Props

| Prop          | Type     | Required | Description                                         |
| ------------- | -------- | -------- | --------------------------------------------------- |
| onTouch       | function | yes      | Callback triggered when a real touch is detected    |
| children      | any      | no       | Children of the element (wrapped in a div).         |
| any div props |          |          | The component accepts any prop a `div` element can. |
