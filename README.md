
# Multiselect with Alpine.js

This project is a component called multiselect created using Alpine.js

## Tech Stack

- [Alpine.js](https://alpinejs.dev/)
- [TailwindCSS](https://tailwindcss.com)

## Installation

```bash
# Install packages
npm i
```

## Run Locally

```bash
# Start Vitejs
npm run dev
```
  
## Documentation

This component is inspired by the new Alpine.js components, precisely the [dropdown](https://alpinejs.dev/pattern/dropdown)!

In fact, in server-side framework like [AdonisJS](https://adonisjs.com/), [Ruby on Rails](https://rubyonrails.org/) or [Laravel](https://laravel.com/), having Alpine.js is such useful to create interactive components ! But why always creating components from scratch? This is why this multiselect exist, to help you!

This multiselect have keyboards navigation built-in!

The multiselect takes 2 parameters:

- data, an array of object with id and name
- selectedData, an array of id

Exemple:

```js
multiselect([
    {
        id: 1,
        name: 'Option 1',
    },
    {
        id: 2,
        name: 'Option 2',
    },
    {
        id: 3,
        name: 'Option 3',
    },
    {
        id: 4,
        name: 'Option 4',
    },
    {
        id: 5,
        name: 'Option 5',
    },
], [1, 3])
```

But, because you will copy-paste this component, feel free to update data to your to your needs!

### How to use with a template engine

Using a template engine is easy now.

With Edge:

```edge
multiselect({{ stringify(data) }}, {{ stringify(selectedData) }})
```

With PHP:

```php
multiselect(<?= json_encode(data)  ?>, <?= json_encode(selectedData) ?>)
```

And your multiselect will works on client-side!

### Can I use it in a form

Yes! You can use it in a form because a select with multiple attribut is updated in realtime using the selected data.

```html
 <select multiple="multiple" name="alpine[]" hidden>
    <template x-for="id in selected" :key="id">
        <option selected :value="id"></option>
    </template>
</select>
```

## Examples

You can test this component [at this url](https://alpinejs-multiselect.netlify.app/)

## Contributing

Contributions are always welcome!

Feel free to provide feedbacks !

## Authors

- [@barbapapazes](https://www.github.com/barbapapazes)
