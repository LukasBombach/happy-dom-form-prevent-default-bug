# Min Rep. Example for preventing form submissions in happy-dom

Issue:

Using `preventDefault()` on a `<form>` submit event should stop the from from navigating, but it does not in `happy-dom`.

See [form-submit-prevent-default-bug.spec.ts](/form-submit-prevent-default-bug.spec.ts) as a reproduction of the bug using `vitest`
