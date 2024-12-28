- add different page folders

- use index as homepage

- use component-specific styles
e.g.,
src/
├── styles/
│   ├── base/
│   │   ├── _variables.scss
│   │   ├── _typography.scss
│   │   ├── _reset.scss
│   ├── components/
│   │   ├── _button.scss
│   │   ├── _card.scss
│   ├── pages/
│   │   ├── _home.scss
│   │   ├── _about.scss
│   ├── utils/
│   │   ├── _mixins.scss
│   │   ├── _functions.scss
│   │   ├── _placeholders.scss
│   └── main.scss
```
import './Button.scss';

const Button = () => (
  <button className="btn primary-btn">Click Me</button>
);

export default Button;
```

- create reusable patterns
```
// _mixins.scss
@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}

// Use in component styles
.container {
  @include flex-center(column);
}
```