## 5. Interpolate values

When using the `get` function it is possible to interpolate values (replacing placeholders with content). As default, you can simply use the `{{ key }}` syntax in your translations and provide an object with values replacing those defined in the translations when using the `get` function. The example below is based on the strings defined in [step 1](#-1-define-the-translations).

```js
import { get } from "lit-translate";

get("cta.awesome", { things: get("cta.cats") }); // Cats are awesome!
```

